package web

import (
	"io"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"luxploit.net/server/util"
)

func RunServer() {
	gin.SetMode(gin.ReleaseMode)
	r := gin.New()

	r.Use(gin.Recovery())
	r.Use(customGinLogger())
	r.Use(cors.New(cors.Config{
		AllowAllOrigins: true,
		AllowWildcard:   true,
	}))

	activityRouter(r.Group("/activity"))
	// guestbookRouter(r.Group("/guestbook"))

	r.GET("/js/webring", func(ctx *gin.Context) {
		resp, err := http.Get("https://transring.neocities.org/ring.js")
		if err != nil {
			ctx.AbortWithStatus(500)
			return
		}
		defer resp.Body.Close()

		if resp.StatusCode != http.StatusOK {
			ctx.AbortWithStatus(500)
			return
		}

		body, err := io.ReadAll(resp.Body)
		if err != nil {
			ctx.AbortWithStatus(500)
			return
		}

		ctx.Data(http.StatusOK, "application/javascript", body)
	})

	util.LogInfo("WebAPI", "Listening on port :9999")

	err := r.Run(":9999")
	if err != nil {
		util.LogError("MySpace HTTP API", "Error setting up http server! (%s)", err.Error())
		panic(0)
	}
}

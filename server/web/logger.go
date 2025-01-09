package web

import (
	"time"

	"github.com/gin-gonic/gin"
	"luxploit.net/server/util"
)

func customGinLogger() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Log the start time
		start := time.Now()

		// Process the request
		c.Next()

		// Log the details after the request is processed
		duration := time.Since(start)
		statusCode := c.Writer.Status()

		util.LogDebug(util.DEBUG_WEBAPI, "WebAPI", "<IP: %s> <Time: %.3fms> <Status: %d> %s %s",
			c.RemoteIP(), float64(duration.Nanoseconds())/1e6, statusCode, c.Request.Method, c.Request.URL.Path,
		)
	}
}

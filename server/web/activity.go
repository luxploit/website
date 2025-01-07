package web

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/shkh/lastfm-go/lastfm"
	"luxploit.net/server/util"
)

var lastFm *lastfm.Api

func activityRouter(router *gin.RouterGroup) {
	lastFm = lastfm.New("8a10e03afa4e0f6cc9cc66b3cee0010c", "")
	router.GET("/lastfm", getLastFmStatus)
}

func getLastFmStatus(c *gin.Context) {
	rtResp, err := lastFm.User.GetRecentTracks(lastfm.P{
		"user":  "lnk_fm",
		"limit": "1",
	})

	if err != nil {
		c.AbortWithStatus(400)
		util.LogError("WebAPI LastFM", "Unable to get recent lastfm track! %s", err.Error())
		return
	}

	rtData := rtResp.Tracks[0]

	atData, err := lastFm.Artist.GetInfo(lastfm.P{
		"artist": rtData.Artist.Name,
	})

	if err != nil {
		c.AbortWithStatus(400)
		util.LogError("WebAPI LastFM", "Unable to get recent lastfm artist! %s", err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"name":       rtData.Name,
		"artist":     rtData.Artist.Name,
		"url":        rtData.Url,
		"artistUrl":  atData.Url,
		"nowPlaying": rtData.NowPlaying == "true",
	})
}

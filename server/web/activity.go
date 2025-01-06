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
	resp, err := lastFm.User.GetRecentTracks(lastfm.P{
		"user":  "lnk_fm",
		"limit": "1",
	})

	if err != nil {
		c.AbortWithStatus(400)
		util.LogError("WebAPI LastFM", "Unable to get recent lastfm track! %s", err.Error())
		return
	}

	data := resp.Tracks[0]

	if err != nil {
		c.AbortWithStatus(500)
		util.LogError("WebAPI LastFM", "Unable to get now playing status! %s", err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"name":       data.Name,
		"artist":     data.Artist.Name,
		"url":        data.Url,
		"nowPlaying": data.NowPlaying == "true",
	})
}

package web

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/shkh/lastfm-go/lastfm"
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
		return
	}

	data := resp.Tracks[0]
	np, err := strconv.ParseBool(data.NowPlaying)

	if err != nil {
		c.AbortWithStatus(500)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"name":       data.Name,
		"artist":     data.Artist.Name,
		"url":        data.Url,
		"nowPlaying": np,
	})
}

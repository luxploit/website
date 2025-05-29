package web

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func guestbookRouter(router *gin.RouterGroup) {
	router.GET("/", getBookPosts)
	router.POST("/", addNewBookPost)
	router.DELETE("/", deleteNewBookPost)
}

func getBookPosts(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"posts": []gin.H{
			{
				"": "",
			},
		},
	})
}

func addNewBookPost(c *gin.Context) {

}

func deleteNewBookPost(c *gin.Context) {

}

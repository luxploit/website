package main

import (
	"luxploit.net/server/database"
	"luxploit.net/server/util"
	"luxploit.net/server/web"
)

func main() {

	println("\033[38;5;18m website/server || v1.0 \033[0m")
	util.GetArguments()

	database.Initialize()
	database.RunMigration()

	go web.RunServer()

	util.WaitForShutdown()
}

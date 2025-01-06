package database

import (
	"os"

	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
	"luxploit.net/server/util"
)

var Engine *gorm.DB

func Initialize() {

	if *util.TestNoDb {
		util.LogWarning("Database", "Database disabled!")
		return
	}

	util.LogInfo("Database", "Connecting to database")

	var err error
	customLogger := &CustomGormLogger{}

	Engine, err = gorm.Open(sqlite.Open(*util.SqliteDbName), &gorm.Config{
		Logger: customLogger,
	})

	if err != nil {
		util.LogError("Database", "Failed to establish database connection (%s)", err.Error())
		panic(0)
	}

	var version string
	err = Engine.Raw("select sqlite_version()").Scan(&version).Error

	if err != nil {
		util.LogError("Database", "Failed to query database version (%s)", err.Error())
		panic(0)
	}

	util.LogInfo("Database", "Connected to \"SQLite v%s\"", version)

}

func RunMigration() {
	if !*util.DoMigration {
		return
	}

	util.LogInfo("Database", "Migrating Schema...")
	err := Engine.AutoMigrate()

	if err != nil {
		util.LogError("Database", "Failed to establish migrate schema (%s)", err.Error())
		panic(0)
	}

	os.Exit(0)
}

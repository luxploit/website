package util

import "flag"

var ShowSqlDebug *bool
var DoMigration *bool
var ShowServerDebug *bool
var TestNoDb *bool
var SqliteDbName *string

func GetArguments() {
	TestNoDb = flag.Bool("nodb", false, "Run without a database (early-stage testing!)")
	ShowSqlDebug = flag.Bool("sql", false, "Show SQL log statements for debugging")
	DoMigration = flag.Bool("migrate", false, "Run Database migration")
	ShowServerDebug = flag.Bool("debug", false, "Show Server debug log")
	SqliteDbName = flag.String("database", "lxpt.db", "SQLite Database File")

	flag.Parse()
}

package database

import (
	"context"
	"errors"
	"time"

	"gorm.io/gorm"
	gormlogger "gorm.io/gorm/logger"
	"luxploit.net/server/util"
)

type CustomGormLogger struct{}

func (l CustomGormLogger) LogMode(level gormlogger.LogLevel) gormlogger.Interface {
	return l
}

func (l CustomGormLogger) Info(ctx context.Context, format string, args ...interface{}) {
	util.LogInfo("GORM", format, args...)
}

func (l CustomGormLogger) Warn(ctx context.Context, format string, args ...interface{}) {
	util.LogWarning("GORM", format, args...)
}

func (l CustomGormLogger) Error(ctx context.Context, format string, args ...interface{}) {
	util.LogError("GORM", format, args...)
}

func (l CustomGormLogger) Trace(ctx context.Context, begin time.Time, fc func() (string, int64), err error) {
	elapsedTime := time.Since(begin)
	switch {
	case err != nil && errors.Is(err, gorm.ErrRecordNotFound):
		fcStr, _ := fc()
		util.LogDebug(util.DEBUG_DATABASE, "GORM", "<Time: %.3fms> <Rows: None> %s", float64(elapsedTime.Nanoseconds())/1e6, fcStr)
	case err != nil:
		fcStr, _ := fc()
		util.LogError("GORM", "<Time: %.3fms> <Rows: None> %s", float64(elapsedTime.Nanoseconds())/1e6, err.Error(), fcStr)
	default:
		sql, rows := fc()
		util.LogDebug(util.DEBUG_DATABASE, "GORM", "<Time: %.3fms> <Rows: %v> %s", float64(elapsedTime.Nanoseconds())/1e6, rows, sql)
	}
}

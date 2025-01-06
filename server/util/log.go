package util

import (
	"fmt"
	"time"
)

var debugComponentColors = []string{
	"\033[38;5;67m", // Hex: #336699 DEBUG_GENERIC  -> any
	// "\033[38;5;208m", // Hex: #ff6600 DEBUG_TRAFFIC  -> TCP/UDP
	// "\033[38;5;221m", // Hex: #ffd75f DEBUG_MYSPACE  -> MySpaceIM
	// "\033[38;5;93m",  // Hex: #6600ff DEBUG_OSCAR    -> AIM/ICQ/QIP
	// "\033[38;5;111m", // Hex: #6600ff DEBUG_MSNP     -> MSN/WLM/Skype6+
	"\033[38;5;191m", // Hex: #6600ff DEBUG_DATABASE -> GORM & Redis
	"\033[38;5;88m",  // Hex: #6600ff DEBUG_WEBAPI   -> WebAPI
	"\033[38;5;73m",  // Hex: #009900 DEBUG_CDN   	 -> CDN
}

const (
	DEBUG_GENERIC int = iota
	// DEBUG_TRAFFIC
	// DEBUG_MYSPACE
	// DEBUG_OSCAR
	// DEBUG_MSNP
	DEBUG_DATABASE
	DEBUG_WEBAPI
	DEBUG_CDN
)

func processLog(colorCode string, logType string, prefix string, format string, a ...interface{}) {
	buffer := fmt.Sprintf("%s [%s] [%s] <%s> %s\033[0m", colorCode, time.Now().Local().Format("02/01/2006 03:04:05"), logType, prefix, format)
	finalBuffer := fmt.Sprintf(buffer, a...)
	fmt.Println(finalBuffer)
}

func LogInfo(prefix string, format string, a ...interface{}) {
	processLog("\033[38;5;112m", "Info", prefix, format, a...) // Hex: #339900
}

func LogAction(prefix string, format string, a ...interface{}) {
	processLog("\033[38;5;153m", "Action", prefix, format, a...) // Hex: #fcba03
}

func LogEvent(prefix string, format string, a ...interface{}) {
	processLog("\033[38;5;73m", "Event", prefix, format, a...) // Hex: #fcba03
}

func LogWarning(prefix string, format string, a ...interface{}) {
	processLog("\033[38;5;229m", "Warning", prefix, format, a...) // Hex: #ffff99
}

func LogError(prefix string, format string, a ...interface{}) {
	processLog("\033[38;5;160m", "Error", prefix, format, a...) // Hex: #cc0000
}

func LogDebug(component int, prefix string, format string, a ...interface{}) {
	if !*ShowServerDebug {
		return
	}

	processLog(debugComponentColors[component], "Debug", prefix, format, a...)
}

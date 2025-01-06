package util

import (
	"os"
	"os/signal"
	"syscall"
)

func WaitForShutdown() {
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	for sig := range c {
		LogInfo("Exit Handler", "Captured %v! Stopping Server...", sig)
		os.Exit(0)
	}
}

#!/usr/bin/env bash

debug_url=$(adb devices | grep "192.168." | awk '{print $1}')
adb -s $debug_url reverse tcp:8081 tcp:8081

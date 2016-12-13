#!/usr/bin/env bash

## Generate signing keys
# keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
# mv my-release-key.keystore android/app

## Generate the installable build
react-native bundle --platform android --dev false --entry-file index.android.js \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res/

## Generate the build using gradle
cd android && ./gradlew assembleRelease

## Upload the APK to your phone. The -r flag will replace the existing app (if it exists)
adb install -r ./app/build/outputs/apk/app-release-unsigned.apk

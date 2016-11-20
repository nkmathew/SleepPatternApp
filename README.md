#### Requirements
+ Working installation of `Android Studio` with the paths to the android binaries
  and scripts added to the `PATH`
+ NodeJS >= 4
+ Yarn >= 0.17.0
+ `npm install -g react-native-cli`
+ Install `forever` task runner if on Linux and `forever-win` if on Windows:

  ```shell
  npm install -g forever
  npm install -g forever-win
  ```
+ Install Genymotion
  1. Create an account on their website
  2. Install Oracle virtual box
  3. Get genymotion app and install
  4. login with user and pass
  5. click on +(Add) , install device
  6. down load virtual device you want , and then start emulator
  7. run react-native run-android , check emulator app should be running there.

#### Building and Installing
+ Clone this repo
+ Run `yarn install`
+ Start `Genymotion`
+ Run `react-native run-android` from the root folder of the project to install and
  run the app in the running instance of `Genymotion`

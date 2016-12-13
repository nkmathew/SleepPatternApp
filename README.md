### Overview

This is supposed to be an Android app for monitoring your sleep pattern built with
[React Native][1] quickly hacked together for a group project assignment in *User
Interface Architectures*. Did this with very minimal knowledge of `ReactJS` and
`React Native` and had some difficulty in maintaining state between the different
components which I could have used [Redux][2] for but didn't have time to learn it.

This app is the equivalent of a basic CRUD app in your framework of choice.

### Requirements
- Working installation of `Android Studio` with the paths to the android binaries
  and scripts added to the `PATH`
- NodeJS >= 4
- Yarn >= 0.17.0
- `npm install -g react-native-cli`
- Install `forever` task runner if on Linux and `forever-win` if on Windows:

  ```
  npm install -g forever
  npm install -g forever-win
  ```
### Genymotion
1. Create an account on [their website](https://www.genymotion.com/account/create/)
2. Install [Oracle Virtual Box](https://www.virtualbox.org/wiki/Downloads)
3. Download and install the [Genymotion app](https://www.genymotion.com/download/)
4. Login with your username and password after installing it in your computer
5. Click on `Add` and `Select New Virtual Device`
6. Download the virtual device you want and run it
7. Run `react-native run-android` from the root folder of the project and you'll
   have the app running in the Genymotion emulator

### Building and Installing
+ Clone this repo
+ Run `yarn install`
+ Start `Genymotion`
+ Run `react-native run-android` from the root folder of the project to install and
  run the app in the running instance of `Genymotion`

### Screenshot

![](http://image.prntscr.com/image/d2ecd2e447054a2698956a9a26fceb2d.png)
![](http://image.prntscr.com/image/f48fb56f91b74c3ab3de74df624f0e1b.png)
![](http://image.prntscr.com/image/a9e6257ed225485b8f6ee3d681e16d15.png)


[1]: https://facebook.github.io/react-native/
[2]: http://redux.js.org/

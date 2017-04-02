# CoCoME App
## Installation

Install npm and install the cordova and typescript by this commands: 
```
npm install -g cordova
npm install -g typescript
```

## Compilation 

To compile the app, run the following command in the root folder of the app.
```
tsc
```

## Execution

Change the App-Adapter url in the Settings.ts file and recompile the app. 

### Browser

To see the app in the browser, run this command in the root folder:
```
cordova run browser
```

Optional you can run the following comand. Then the app in the browser is automatically reloded after the complie comand. 

```
cordova run browser -- --live-reload
```

### Android

#### Emulator 

Create a Emulator with this [tutorial](https://cordova.apache.org/docs/de/latest/guide/platforms/android/). After that call the follwing commands to start the app in the emulator:

```
cordova prepare
cordova run android
```

### iOS

Not testet. 
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:3000/api/',
  firebaseConfig :{
    apiKey: "AIzaSyAhkTu0Be4W6dl2FyqMHnyddl1puO7-A8Q",
    authDomain: "navyastudio-49c1c.firebaseapp.com",
    databaseURL: "https://navyastudio-49c1c-default-rtdb.firebaseio.com",
    projectId: "navyastudio-49c1c",
    storageBucket: "navyastudio-49c1c.appspot.com",
    messagingSenderId: "568612923453",
    appId: "1:568612923453:web:4bb9676cba21978408e254",
    measurementId: "G-VHZKNRNC5Z"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

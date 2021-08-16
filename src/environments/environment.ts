// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  newsApi: 'https://jsonplaceholder.typicode.com/posts',
  countryCode: 'https://countrycode.org/api/countryCode/countryMenu',
  countryCodeWithIndex: 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;callingCodes',
  firebaseConfig: {
    apiKey: "AIzaSyAegmGPuEAROsRK3Pmx7fo9x-6JVm-gX0Q",
    authDomain: "anu-sample-projects.firebaseapp.com",
    projectId: "anu-sample-projects",
    storageBucket: "anu-sample-projects.appspot.com",
    messagingSenderId: "793586972250",
    appId: "1:793586972250:web:518cb9ab1bd8276a1dca63",
    measurementId: "G-MFNFXN54P8"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

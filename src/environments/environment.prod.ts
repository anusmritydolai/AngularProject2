export const environment = {
  production: true,
  newsApi: 'https://api.first.org/data/v1/news',
  countryCode: 'https://countrycode.org/api/countryCode/countryMenu',
  countryCodeWithIndex: 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;callingCodes',
  firebase: {
    apiKey: '${process.env.firebaseConfig}'
},
};

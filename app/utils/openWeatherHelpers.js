var axios = require('axios');

var _APIKEY = '8294b2fa865ef5dfa3914914f711f6df';
var _baseURL = 'http://api.openweathermap.org/data/2.5/';

function getQueryObj (city) {
	return {
		q: city,
		type: 'accurate',
		APPID: _APIKEY,
		cnt: 5,
		units: 'imperial'
	}
}

function prepRouteParams (queryObj) {
	return '?' + Object.keys(queryObj)
		.map(function (key) {
			return key + '=' + encodeURIComponent(queryObj[key]);
		}).join('&');
}

function getUrl (apiType, queryObj) {
	return [_baseURL, apiType, prepRouteParams(queryObj)].join('');
}

function callApi (city, type) {
	var queryObj = getQueryObj(city);
	var url = getUrl(type, queryObj);
	return axios.get(url)
		.then(function (forecastData) {
			return forecastData.data
		});
}

function getCurrentWeather (city) {
	return callApi(city, 'weather')
}

function getForecast (city) {
	return callApi(city, 'forecast/daily');
}

module.exports = {
	getCurrentWeather: getCurrentWeather,
	getForecast: getForecast
};
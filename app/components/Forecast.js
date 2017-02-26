var React = require('react');
var PropTypes = React.PropTypes;
var helpers = require('../utils/openWeatherHelpers');

var DayItem = function (props) {
  var date = props.day.dt;
  // var icon = props.day.weather[0].icon;
  return (
    <div>
      <h2>{date}</h2>
    </div>
  )
}

var ForecastUI = function (props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <div>
        {props.forecast.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} />
        })}
      </div>
    </div>
  )
}

var Forecast = function (props) {
	return props.isLoading === true
		? <div> Loading </div>
		: <ForecastUI
				city={props.city}
				forecast={props.forecastData} />
}

module.exports = Forecast;
var React = require('react');
var PropTypes = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer');

function Home () {
	return (
		<div>
			<h1>Please Enter a City and State</h1>
			<GetCityContainer />
		</div>
	)
}

module.exports = Home;
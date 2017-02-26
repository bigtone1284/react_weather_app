var React = require('react');
var GetCityContainer = require('./GetCityContainer');

var Main = React.createClass({
	render: function () {
    return (  
      <div className='main-container'>
      	<h1>ReactWeatherApp</h1>
      	<GetCityContainer direction='row' />
        {this.props.children}
      </div>
    );
	}
});

module.exports = Main;
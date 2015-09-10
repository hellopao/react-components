var React = require('react');
var moment = require('moment');

var Calendar = require('./calendar');

require('./styles/datePicker.css');

var DatePicker = React.createClass({
	
	getInitialState: function(){
		return {
			select: this.props.current || new Date(),
			show: false
		}
	},
	
	onDaySelect: function(date){
		this.setState({
			select: date,
			show: false
		});
	},
	
	handleClick: function(){
		this.setState({
			show: true
		});
	},
	
	render: function(){
		return (
			<div className={(this.props.className || " ") + "date-picker"} style={this.props.style}>
				<input type="text" readOnly 
					className="date-input" 
					value={moment(this.state.select).format('YYYY-MM-DD')}
					onClick={this.handleClick}/>
				<Calendar 
					current={this.state.current} 
					sundayFirst={this.props.sundayFirst}
					onDaySelect={this.onDaySelect}
					days={this.props.days}
					show={this.state.show}/>
			</div>
		);
	}
});

module.exports = DatePicker;
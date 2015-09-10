var React = require('react');
var moment = require('moment');

require('./styles/calendar.css');

var Day = React.createClass({
	
	getInitialState: function(){
		return {
			active: this.props.active
		}
	},
	
	handleClick: function(){
		this.props.onDayClick(this.props.date);
	},
	
	render: function(){		
		return (
			<td onClick={this.handleClick} 
				className={this.props.active ? 'active' : (this.props.currentMonth ? '': 'other')}>{this.props.date}</td>
		);
	}
});

var Calendar = React.createClass({

	getInitialState: function(){
		var days = ["一","二","三","四","五","六","日"];
		var sundayFirst = this.props.sundayFirst === "1";
		
		if (sundayFirst){
			days = ["日","一","二","三","四","五","六"];
		}
		
		return {
			sundayFirst: sundayFirst,
			days: this.props.days || days,
			current: this.props.select || new Date()
		}
	},
	
	showPrevMonth: function(){
		this.setState({
			current: moment(this.state.current).add(-1,'month')
		})
	},
	
	showNextMonth: function(){
		this.setState({
			current: moment(this.state.current).add(1,'month')
		})
	},
	
	onDayClick: function(date){
		if (typeof date === "number") {
			var current = moment(this.state.current).set('date',date);
			this.setState({
				current: current
			});
			
			this.props.onDaySelect && this.props.onDaySelect(current);
		}
	},
	
	render: function(){
		var current = moment(this.state.current);
		var currentDate = current.get('date');
		var firstDate = current.set('date',1);
		var firstDay = firstDate.get('day');
		var nextFirstDate = moment(this.state.current).set('date',1).add(1,'month');
		var days = nextFirstDate.diff(firstDate,'days');
		
		if (firstDay === 0){
			firstDay = 7;
		}
		
		return (
			<div className="calendar" style={{display: this.props.show ? '' : 'none'}}>
				<div className="calendar-bar">
					<span className="prev">
						<a href="javascript:;" onClick={this.showPrevMonth}>&lt;</a>
					</span>
					<span className="time">{moment(this.state.current).format('YYYY-MM')}</span>
					<span className="next">
						<a href="javascript:;" onClick={this.showNextMonth}>&gt;</a>
					</span>
				</div>
				<table className="calendar-table">
					<thead>
						<tr>
							{this.state.days.map(function(day){
								return <th>{day}</th>;
							})}
						</tr>
					</thead>
					<tbody>
						{Array(7).join('0').split('').map(function(item,index){
							return (
								<tr>
									{Array(8).join('0').split('').map(function(item,$index){
										var date = index * 7 + $index + 1 - (firstDay - 1);
										var currentMonth = false;
										
										if (this.state.sundayFirst) {
											date -= 1;
										}
										
										if (date <= 0) {
											date = moment(this.state.current).set('date',1).add(date - 1,'day').get('date'); 
										} else if (date > days){
											date = date - days;
										} else {
											currentMonth = true;
										}
										
										return (
											<Day onDayClick={this.onDayClick} active={currentDate ===  date && currentMonth} currentMonth={currentMonth} date={date}/>
										)
									}.bind(this))}
								</tr>
							)
						}.bind(this))}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Calendar;
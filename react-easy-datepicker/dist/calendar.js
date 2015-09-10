'use strict';

var React = require('react');
var moment = require('moment');

require('./styles/calendar.css');

var Day = React.createClass({
	displayName: 'Day',

	getInitialState: function getInitialState() {
		return {
			active: this.props.active
		};
	},

	handleClick: function handleClick() {
		this.props.onDayClick(this.props.date);
	},

	render: function render() {
		return React.createElement(
			'td',
			{ onClick: this.handleClick,
				className: this.props.active ? 'active' : this.props.currentMonth ? '' : 'other' },
			this.props.date
		);
	}
});

var Calendar = React.createClass({
	displayName: 'Calendar',

	getInitialState: function getInitialState() {
		var days = ["一", "二", "三", "四", "五", "六", "日"];
		var sundayFirst = this.props.sundayFirst === "1";

		if (sundayFirst) {
			days = ["日", "一", "二", "三", "四", "五", "六"];
		}

		return {
			sundayFirst: sundayFirst,
			days: this.props.days || days,
			current: this.props.select || new Date()
		};
	},

	showPrevMonth: function showPrevMonth() {
		this.setState({
			current: moment(this.state.current).add(-1, 'month')
		});
	},

	showNextMonth: function showNextMonth() {
		this.setState({
			current: moment(this.state.current).add(1, 'month')
		});
	},

	onDayClick: function onDayClick(date) {
		if (typeof date === "number") {
			var current = moment(this.state.current).set('date', date);
			this.setState({
				current: current
			});

			this.props.onDaySelect && this.props.onDaySelect(current);
		}
	},

	render: function render() {
		var current = moment(this.state.current);
		var currentDate = current.get('date');
		var firstDate = current.set('date', 1);
		var firstDay = firstDate.get('day');
		var nextFirstDate = moment(this.state.current).set('date', 1).add(1, 'month');
		var days = nextFirstDate.diff(firstDate, 'days');

		if (firstDay === 0) {
			firstDay = 7;
		}

		return React.createElement(
			'div',
			{ className: 'calendar', style: { display: this.props.show ? '' : 'none' } },
			React.createElement(
				'div',
				{ className: 'calendar-bar' },
				React.createElement(
					'span',
					{ className: 'prev' },
					React.createElement(
						'a',
						{ href: 'javascript:;', onClick: this.showPrevMonth },
						'<'
					)
				),
				React.createElement(
					'span',
					{ className: 'time' },
					moment(this.state.current).format('YYYY-MM')
				),
				React.createElement(
					'span',
					{ className: 'next' },
					React.createElement(
						'a',
						{ href: 'javascript:;', onClick: this.showNextMonth },
						'>'
					)
				)
			),
			React.createElement(
				'table',
				{ className: 'calendar-table' },
				React.createElement(
					'thead',
					null,
					React.createElement(
						'tr',
						null,
						this.state.days.map(function (day) {
							return React.createElement(
								'th',
								null,
								day
							);
						})
					)
				),
				React.createElement(
					'tbody',
					null,
					Array(7).join('0').split('').map((function (item, index) {
						return React.createElement(
							'tr',
							null,
							Array(8).join('0').split('').map((function (item, $index) {
								var date = index * 7 + $index + 1 - (firstDay - 1);
								var currentMonth = false;

								if (this.state.sundayFirst) {
									date -= 1;
								}

								if (date <= 0) {
									date = moment(this.state.current).set('date', 1).add(date - 1, 'day').get('date');
								} else if (date > days) {
									date = date - days;
								} else {
									currentMonth = true;
								}

								return React.createElement(Day, { onDayClick: this.onDayClick, active: currentDate === date && currentMonth, currentMonth: currentMonth, date: date });
							}).bind(this))
						);
					}).bind(this))
				)
			)
		);
	}
});

module.exports = Calendar;
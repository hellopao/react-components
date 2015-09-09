'use strict';

var React = require('react');

require('./styles/pagination.css');

var Pagination = React.createClass({
	displayName: 'Pagination',

	getInitialState: function getInitialState() {
		return {
			current: 1
		};
	},

	changePage: function changePage(page) {
		this.setState({
			current: page
		});

		this.props.onPageChage && this.props.onPageChage(page);
	},

	render: function render() {
		var pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);

		return React.createElement(
			'div',
			{ className: 'pagination' },
			React.createElement(
				'span',
				null,
				'共',
				React.createElement(
					'var',
					null,
					this.props.totalCount
				),
				'条记录'
			),
			React.createElement(
				'span',
				{ style: { visibility: this.state.current === 1 ? 'hidden' : 'visible' } },
				React.createElement(
					'a',
					{ href: 'javascript:;', onClick: this.changePage.bind(this, this.state.current - 1) },
					'上一页'
				)
			),
			React.createElement(
				'span',
				{ className: 'page' },
				Array(pageCount + 1).join('0').split('').map((function (item, index) {
					if (index > 4 && index < pageCount - 1 && index !== this.state.current - 1) {
						return null;
					}

					if (index > 3 && index < pageCount - 1 && index !== this.state.current - 1) {
						return React.createElement(
							'span',
							null,
							'...'
						);
					}
					return React.createElement(
						'a',
						{ href: 'javascript:;',
							className: this.state.current === index + 1 ? 'active' : '',
							onClick: this.changePage.bind(this, index + 1) },
						index + 1
					);
				}).bind(this))
			),
			React.createElement(
				'span',
				{ style: { visibility: this.state.current === pageCount ? 'hidden' : 'visible' } },
				React.createElement(
					'a',
					{ href: 'javascript:;', onClick: this.changePage.bind(this, this.state.current + 1) },
					'下一页'
				)
			),
			React.createElement(
				'span',
				null,
				'共',
				React.createElement(
					'var',
					null,
					pageCount
				),
				'页'
			),
			React.createElement(
				'span',
				null,
				', 转至',
				React.createElement('input', { type: 'text', className: 'page-input' }),
				'页'
			)
		);
	}
});

module.exports = Pagination;
var React = require('react');

var Pagination = require('../dist/pagination');

React.render(
	<Pagination pageSize="10" totalCount="100" current="1"/>,
	document.getElementById('pagination') 
);
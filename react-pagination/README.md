### pagination 
a pagination component for react

## Install

```bash
npm install react-pagination
```
## Usage

```js
var React = require('react');
var DatePicker = require('react-pagination');

React.render(
	<Pagination pageSize="10" totalCount="100" current="1"/>,
	document.getElementById('pagination') 
);
```
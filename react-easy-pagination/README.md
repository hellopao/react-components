### pagination 
a pagination component for react

## Install

```bash
npm install react-easy-pagination
```
## Usage

```js
var React = require('react');
var Pagination = require('react-easy-pagination');

React.render(
	<Pagination pageSize="10" totalCount="100" current="1"/>,
	document.getElementById('pagination') 
);
```

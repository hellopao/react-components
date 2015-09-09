### datePicker 
a datepicker component for react

## Install

```bash
npm install react-easy-datepicker
```
## Usage

```js
var React = require('react');
var DatePicker = require('react-easy-datepicker');

React.render(
	<DatePicker />,
	document.getElementById('datePicker') 
);
```

## Options

## sundayFirst 
sunday is the first of the week

```js
var React = require('react');
var DatePicker = require('react-easy-datepicker');

React.render(
	<DatePicker sundayFirst="1"/>,
	document.getElementById('datePicker') 
);
```
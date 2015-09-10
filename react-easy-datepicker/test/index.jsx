var React = require('react');

var DatePicker = require('../dist/datePicker');

React.render(
	<div>
		<div>
			<DatePicker style={{display:"inline-block"}}/>
			<DatePicker 
				sundayFirst="1" 
				style={{display:"inline-block",marginLeft: "300px"}}/>	
		</div>
		<div style={{marginTop: "300px"}}>
			<DatePicker 
				style={{display:"inline-block"}}
				days={["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}/>
			<DatePicker 
				style={{display:"inline-block",marginLeft: "300px"}}
				sundayFirst="1" 
				days={["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}/>
		</div>
	</div>,
	document.getElementById('datePicker') 
);
var React = require('react');

require('./styles/pagination.css');

var Pagination = React.createClass({
	
	getInitialState: function(){
		return {
			current: 1
		}
	},
	
	changePage: function(page){
		this.setState({
			current: page
		});
		
		this.props.onPageChage && this.props.onPageChage(page);
	},
	
	handleKeyUp: function(e){
		if (e.keyCode === 13) {
			var page = Number(e.target.value);
			var pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
			
			if (typeof page === "number" && page > 0 && page <= pageCount) {	
				this.changePage(page);
			}
		}
	},
	
	render: function(){
		var pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
		
		return (
			<div className="pagination">
				<span>共<var>{this.props.totalCount}</var>条记录</span>			
				{
					[''].map(function(){
						if (!this.props.totalCount) {
							return null
						}
						return (
							<div style={{display:"inline-block"}}>
								<span style={{visibility: this.state.current === 1 ? 'hidden' : 'visible'}}>
									<a href="javascript:;" onClick={this.changePage.bind(this,this.state.current - 1)}>上一页</a>
								</span>				
								<span className="page">	
									{Array(pageCount + 1).join('0').split('').map(function(item,index){		
										if (index > 4 && index < pageCount - 1 && index !== this.state.current - 1) {
											return null
										}
										
										if (index > 3 && index < pageCount - 1 && index !== this.state.current - 1) {
											return (
												<span>...</span>
											)
										}		
										return (
											<a href="javascript:;" 
												className={this.state.current === (index + 1) ? 'active' : ''}
												onClick={this.changePage.bind(this,index + 1)}>{index + 1}</a>
										)	
									}.bind(this))}
								</span>
								<span style={{visibility: this.state.current === pageCount ? 'hidden' : 'visible'}}>
									<a href="javascript:;" onClick={this.changePage.bind(this,this.state.current + 1)}>下一页</a>
								</span>			
								<span>共<var>{pageCount}</var>页</span>
								<span>, 转至<input type="text" onKeyUp={this.handleKeyUp} className="page-input"/>页</span>
							</div>
						)
					}.bind(this))							
				}	
				
			</div>
		);
	}
});

module.exports = Pagination;
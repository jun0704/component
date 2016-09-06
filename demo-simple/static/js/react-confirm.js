var ReactConfirm = React.createClass({
	getInitialState: function(){
		return ({
			show: true
		})
	},
	cancelHandle: function(){
		this.props.opt.cancelHandler && this.props.opt.cancelHandler();
		document.getElementById("confirm-wrapper").classList.toggle("on")
	},
	confirmHandle: function(){
		this.props.opt.confirmHandler && this.props.opt.confirmHandler();
		document.getElementById("confirm-wrapper").classList.toggle("on")
		
	},
	componentWillUpdate: function(){
		console.log("123")
		document.getElementById("confirm-wrapper").classList.toggle("on")
	},
	render: function(){
		return(
			<div id="confirm-wrapper" className={this.props.show ? 'confirm-wrapper on' : 'confirm-wrapper'}>
				<div className="confirm-mask">
					<div className="react-confirm">
						<h3 className="confirm-title">{this.props.opt.title}</h3>
						<p className="confirm-content">{this.props.opt.content}</p>
						<div className="confirm-btns">
							<span className="btn cancelBtn" onClick={this.cancelHandle}>{this.props.opt.cancelText}</span>
							<span className="btn confirmBtn" onClick={this.confirmHandle}>{this.props.opt.confirmText}</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

ReactConfirm.defaultProps ={
    opt: {
    	title: '此处为主题标题文字内容',
	    content: '此处为详情描述文字内容',
	    cancelText:'取消',
	    cancelHandler:function(){console.log('defaultProps is cancel !')},
	    confirmText:'确认',
	    confirmHandler:function(){
	    	console.log('defaultProps is confirm !');
	    	// fetch('http://www.baidu.com/s?wd=12asd',{
	    	// 	method: "get"
	    	// }).then(function(res){
	    	// 	console.log(res)
	    	// },function(e){
	    	// 	alert("error")
	    	// })
	    }
    }
    
} 


var Page = React.createClass({
	getInitialState: function(){
		return ({
			show: false
		})
	},
	handleClick: function(){
		this.setState({
			show: true
		})
	},
	render: function(){
		var opt = {
			title: "粑粑的标题",
			content: "粑粑的内容",
			cancelText: "取消",
			cancelHandler: function(){
				alert("baba 取消啦 ")
			},
			confirmText: "确认",
			confirmHandler: function(){
				alert("baba 确认");
				console.log('defaultProps is confirm !');
		    	fetch('../mock/sample.json',{
		    		method: "get"
		    	}).then(function(res){
		    		console.log(res)
		    		if(res.ok){
		    			res.json().then(function(data){
		    				console.log(data.data.uname)
		    			})
		    		}
		    	},function(e){
		    		alert("error")
		    	})
			}
		}
		return (
			<div className="wrapper">
				<button className="btn addBtn" onClick = {this.handleClick}> confirm </button>
				<ReactConfirm show={this.state.show} opt={opt}></ReactConfirm>
			</div>
		)
	}
})

ReactDOM.render(
	<Page/>,
	document.getElementById("app")
)
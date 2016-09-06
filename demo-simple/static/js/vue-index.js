// "use strict";
// import 'test.js';
// import 'test.js';
class Page {
	constructor(){
		this.initPage();
	}
	initPage(){
		this.page = new Vue({
			el: "#app",
			data: {
				showConfirm: false,
				showToast: false,
				// content: "hahha"
				confirmContent: {
					title: "这里是标题",
					content: "这里是内容",
					btn: ["确认", "取消"],
					callback: [
						() => {
							alert("queren")
						},
						() => {
							// alert("quxiao")
							console.log("quxiap")
						}
					]
				},
				toastContent: {
					// content: 'tip',
					class: '',
					type: 'loading',
					text: 'hello toast',
					time: 1000
				}
			},
			methods: {
				confirm: function(){
					this.showConfirm = true;
				},
				toast: function(){
					this.showToast = true;
					
				}
			}
		})
	}
}
// export var page = new Page();
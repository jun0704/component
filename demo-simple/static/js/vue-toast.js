Vue.component('vue-toast',{
	template: 
		'<div v-if="show" class="vue-toast">' +
			'<div class="toast-wrapper">' +
				'<i class={{content.type}}></i>' +
				'<p v-text="content.text">' + '</p>' +
			'</div>' +
		'</div>',
	props:['show','content'],
	methods: {
		change: function(){
			var _self = this
			var timer = setTimeout(function(){
				_self.show = false;
				console.log(_self.content.time)
			},_self.content.time)

			if(!this.show){
				clearTimeout(timer)
			}
		}
	},
	watch: {
		show: function(val, oldVal){
			if(val && val != oldVal){
				this.change();
			}
		}
	}
})
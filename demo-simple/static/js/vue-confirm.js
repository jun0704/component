Vue.component('vue-confirm',{
	template: 
		'<div class="confirm-mask" v-if="show" transition="dialog">'+
			'<div class="vue-confirm">'+
				'<div v-show="content.title ? true : false" class="confirm-title" v-bind:style="titleStyle">'+
					'<h3>{{content.title}}</h3>'+
					// '<i class="confirm-icon" v-on:click="cancel">x</i>' +
				'</div>'+
				'<div v-show="content.content? true : false" class="confirm-content">{{content.content}}</div>'+
				'<div v-show="content.btn? true: false" class="confirm-btns">'+
					'<span class="btn" v-for="item in content.btn" v-on:click="fn($index)">{{item}}</span>'+
				'</div>'+
			'</div>'+
		'</div>',
	props: ['content','show'],
	methods: {
		cancel: function(){
			this.show = false
		},
		fn: function(index){
			(this.content.callback[index])();
			this.cancel();
		}
	}
})

Page({
	data:{
		title:''
	},
	change:function(e){
		console.log(e.detail.value);
	},
	change1:function(e){
		console.log(e.detail.value);
	},
	onLoad:function(options){
			console.log(options);
			this.setData({
				title:options.title
			})
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		

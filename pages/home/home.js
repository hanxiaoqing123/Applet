var api = require('../../utils/api.js');
Page({
	data:{
		pn:1,
		list:[]
	},
	onLoad:function(options){
		api.getList('in_theaters',this.data.pn)
		.then(res=>{console.log(res)
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

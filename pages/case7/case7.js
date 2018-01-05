Page({
	data:{
		icons:[
		  {type:"success","size":23,color:"green"},
		  {type:"success_no_circle","size":23,color:"green"},
		  {type:"info","size":23,color:"red"},
		  {type:"warn","size":45,color:"green"},
		  {type:"waiting","size":23,color:""},
		  {type:"cancel","size":23,color:"orange"},
		  {type:"search","size":25,color:"green"},
		  {type:"download","size":23,color:"green"},
		  {type:"clear","size":23,color:"green"}		  		  
		]
	},
	change:function(e){
		this.setData({
             index:e.detail.value
		})
	},
	onLoad:function(options){
		
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

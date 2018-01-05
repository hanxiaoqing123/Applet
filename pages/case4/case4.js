Page({
	data:{
		seladdr:'北京',
		selcour:'JAVA',
		selclz:1601,
		value:[0,0,0],
		address:['北京','深圳','大连','武汉'],
		course:['PHP','JAVA','VR','Android'],
		clz:[1601,1602,1603,1604,1605]
	},
	change:function(e){
		var val=e.detail.value;
		this.setData({
             seladdr:this.data.address[val[0]],
             selcour:this.data.course[val[1]],
             selclz: this.data.clz[val[2]],
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

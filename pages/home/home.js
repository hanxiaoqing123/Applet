var api = require('../../utils/api.js');
Page({
	data:{
		pn:0,
		list:[],
		showloading:true,
		showMore:true
	},
	scrolltolower:function(e){
      if(!this.data.showMore) return;
      console.log(1111);
      this.loadData(this.data.pn);
	},
	loadData:function(pn){
		api.getList('in_theaters',pn)
		.then(res=>{
			//console.log(res)
			if(res.subjects.length>0){
			   this.setData({
				  list:this.data.list.concat(res.subjects),
				  showloading:false,
				  pn:pn+1
			   })

			}else{
               this.setData({
               	  showMore:false
               })
			}

		})
	},
	onLoad:function(options){
		this.loadData(this.data.pn);
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

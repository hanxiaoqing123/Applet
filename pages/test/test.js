var app=getApp();
Page({
	data:{
		name:"测试欢乐慧",
		time:"",
		username:""
	},
	onLoad:function(options){
		this.setData({
			time:app.globalData.time
		})
		this.setData({
			username:app.getUserName()
		})
		var that=this;
		wx.request({
		  url: 'http://news-at.zhihu.com/api/4/news/latest',
		  data: {
		  	
		  },
		  header: {
		      'Content-Type': 'application/json'
		  },
		  success: function(res) {
		  	that.setData({
		       list:res.data.stories
		    })
		  },
		  fail: function(res) {
		    
		  },
		  complete: function(res) {

		  }
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

var API_URI = 'https://api.douban.com/v2/movie';
function fetchApi(type,params){
	return  new Promise((resolve,reject)=>{
		wx.request({
		  url:`${API_URI}/${type}`, //仅为示例，并非真实的接口地址
		  data:params,
		  header: {
		      'content-type': 'json' // 默认值
		  },
		  success:resolve,
		  fail:reject

		})

	})

}

module.exports={
	getList:function(type,pn=0,count=20){
         return fetchApi(type,{"start":pn*count,"count":count})
          .then(res=>res.data)
	}
}
const Promise = require('../promise/promise.js').Promise
var API_URI="https://api.douban.com/v2/movie"
function fetchApi(type,params){
	return  new Promise((resolve,reject)=>{
		  url:`${API_URI}/${type}`, //仅为示例，并非真实的接口地址
		  data:`${params}`,
		  header: {
		      'content-type': 'json' // 默认值
		  },
		  success:resolve,
		  fail:reject
	})

}

module.exports={
	getList:function(type,pn){
         return fetchApi(type,{"start":pn,"account":20})
          .then(res=>res.data)
	}
}
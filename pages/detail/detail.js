var api = require('../../utils/api.js');
Page({
  data:{
    msg:''
    
  },
  onLoad:function(options){
     var id=options.id;
     api.getDetail(id)
     .then(res=>{
      //console.log(res)
      var m1=this.getSummary(res.summary);
        this.setData({
          msg:res,
          summary:m1
        })
     })
  },
  getSummary:function(data){
    if(data.length>=180){
       return data.substr(0,180)+"......";
    }else{
      return data;
    }
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
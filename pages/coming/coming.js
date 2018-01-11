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
      this.loadData(this.data.pn);
  },
  loadData:function(pn){
    api.getList('coming_soon',pn)
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
  redirect:function(e){
       var id=e.currentTarget.dataset.id;
       wx.navigateTo({
         url:"../detail/detail?id="+id
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

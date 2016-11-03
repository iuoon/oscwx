<template>
  <div>
  <scroller lock-x scrollbar-y height="360px"  :prevent-default="false" v-ref:scroller>
    <div class="news-wrap">
     <cell v-for="x in Objlist"  :title="x.title" v-link="{path: '/newsdetail',query:{id:x.id,tag:'资讯'}}" :inline-desc='x.body'>
        <img class="ic_img"  slot="icon" src="../assets/image/ic_label_today.png">
        <div>
           <span class="pubdate">{{x.pub_date}}</span>
        </div>
     </cell>
    </div>
  </scroller>
  </div>
</template>
<style>
.ic_img{
position:absolute; top:10px; left: 5px;
width:15px;
height:15px;
}
.weui_cell_bd>p{
 font-size:15px;
}
.vux-label-desc{
 padding-right:15px;
}
.weui_cell_bd.weui_cell_primary{
padding-left:5px;
}
.news-wrap {
  height: 1800px;
  overflow: hidden;
}
.pubdate{
font-size:5px;

}
</style>
<script>
    import Scroller from 'vux/dist/components/scroller'
    import Cell from 'vux/dist/components/cell'
    import Group from 'vux/dist/components/group'
    import { getList } from '../utils/api'
    import Divider from 'vux/dist/components/divider'


    export default{
        data(){
            return{
                ishow:false,
                Objlist:[],
                pageIndex:1,
                catalog:0,
            }
        },
        components:{
            Scroller,
            Cell,
            Group
        },
        ready () {
          this.getList()
        },
        methods:{
            async getList() {
				       let data =await getList(this.pageIndex, this.catalog)
				       console.log(data)
				       var news_list=data.result.items;
				       if(news_list.length>0){
				          this.ishow=true
				          for(var i=0;i<news_list.length;i++){
				              var time = news_list[i].pubDate;
                      var bngDate = new Date(time.replace("-", "/").replace("-", "/"));
                      var endDate = new Date();
                      var minutes = (endDate.getTime()-bngDate.getTime())/60/1000;

                      if(minutes>=60){
                         minutes=minutes/60;
                       }else{
                         var minute=parseInt(minutes);
                         news_list[i].pubDate=minute+ "分钟以前"
                       }
                      var datetime=parseInt(minutes);

                      if(datetime>=48){
                         news_list[i].pubDate="2天前"
                      }else if(datetime>=24){
                         news_list[i].pubDate="昨天"
                      }else{
                         news_list[i].pubDate=datetime+ "小时以前"
                      }
                      this.Objlist.push(news_list[i]);
				          }

				       }
				       this.locked = false
				       this.loading = false
			},
			load (uuid) {
         setTimeout(() => {
         this.getList();
         this.$broadcast('pulldown:reset', uuid)
        }, 1000)
      },
    }
  }
</script>

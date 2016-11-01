<template>
  <div>
  <scroller v-show="ishow" lock-x scrollbar-y height="360px">
    <div >
    <cell v-for="x in Objlist"  :title="x.title" link="demo/wechat" :inline-desc='x.body'>
      <img class="ic_img"  slot="icon" src="../assets/image/ic_label_today.png">
      <div>
        <span></span>
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

</style>
<script>
    import Scroller from 'vux/dist/components/scroller'
    import Cell from 'vux/dist/components/cell'
    import Group from 'vux/dist/components/group'
    import { getList } from '../utils/api'

    export default{
        data(){
            return{
                ishow:true,
                Objlist:[],
                title:'111',
                body:'1111',
                comment_count:2,
                pub_date:'2016-11-01 07:21:39',
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
         // this.suaDate()
        },
        methods:{
            async getList() {
				       let data =await getList(this.pageIndex, this.catalog)
				       console.log(data)
				       if(data.obj_list.length>0){
				          this.ishow=true
				          this.title=data.obj_list[0].title
				          this.body=data.obj_list[0].body
				          for(var i=0;i<data.obj_list.length;i++){
                      var bngDate = new Date(data.obj_list[i].pub_date);
                      var endDate = new Date();
                      var minutes = (endDate.getTime()-bngDate.getTime())/60/60/1000;
                      var minute=parseInt(minutes);
                      if(minute>=48){
                         data.obj_list[i].pub_date='2天前'
                      }else if(minute>=24){
                         data.obj_list[i].pub_date='昨天'
                      }else{
                         data.obj_list[i].pub_date=minute+'小时以前'
                      }
                      this.Objlist.push(data.obj_list[i]);
				          }

				       }
				       this.locked = false
				       this.loading = false
			},
			suaDate(){

			}

  }
    }
</script>

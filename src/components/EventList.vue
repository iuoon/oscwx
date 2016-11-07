<template>
    <div>

    </div>
</template>
<style>

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
                msg:''
            }
        },
        components:{
            Scroller,
            Cell,
            Group,
            Divider
        }
    }
</script>

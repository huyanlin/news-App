<!--  -->
<template>
 <div class="guonei">
   <loading></loading>
   4545
   <div style="height:800px">
     <ul>
     <li v-for="(item, index) in $store.state.typeLableList" :key="index">{{item}}</li>
   </ul>
   <button @click="onchange()">xiugai</button>
   </div>
 </div> 
</template>

<script>
import loading from '@/components/loading'
export default {
  name: 'guonei',
  methods: {
    onchange() {
      this.$store.commit('incrementTypeLable', { name: '数学', class: 'asdad' })
    },
  },
  components: {
    loading
  }
}

</script>
<style scoped>
.guonei {
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding: 10px 15px 60px 15px;
  background-color: #f4f4f4;
}
  .guonei div {
   height: 100px;
  }
</style>
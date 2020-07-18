<!--  -->
<template>
 <div class="international">
   <loading></loading>
 </div>
</template>

<script>
import loading from '@/components/loading'
export default {
  name: 'internation',
  components: {
    loading,
  }
}

</script>
<style scoped>
.international {
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>
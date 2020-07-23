<!-- 滚动组件 -->
<template>
  <div class="news-info">
    <div class="new-info-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scroll',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll('.news-info', {
      click: true,
      probeType: 3,
      pullUpLoad: true,
    })

    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    backTop(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    }
  },
}

</script>
<style scoped>
.news-info {
  height: 84%;
}
</style>
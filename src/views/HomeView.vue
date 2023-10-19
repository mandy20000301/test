<template>
  <div>
    <TheBanner/>
    <ThePlatform/>
  </div>
</template>

<script>
import TheBanner from '@/components/banner/the-banner.vue'
import ThePlatform from '@/components/platform/the-platform.vue'
export default {
  name: 'Home',
  components: {
    TheBanner,
    ThePlatform
  }
}
</script>
<style scoped lang="scss">

</style>
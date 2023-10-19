<template>
  <div>
    <TheBanner/>
    <ThePlatform/>
    <TheFunction/>
  </div>
</template>

<script>
import TheBanner from '@/components/banner/the-banner.vue'
import ThePlatform from '@/components/platform/the-platform.vue'
import TheFunction from '@/components/function/the-function.vue'
export default {
  name: 'Home',
  components: {
    TheBanner,
    ThePlatform,
    TheFunction
  }
}
</script>
<style scoped lang="scss">

</style>
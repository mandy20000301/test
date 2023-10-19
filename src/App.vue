<template>
  <TheHeader />
  <router-view />
  <TheFooter />
</template>
<script>
import TheHeader from '@/components/the-header.vue'
import TheFooter from '@/components/the-footer.vue'
export default {
  name: 'APP',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

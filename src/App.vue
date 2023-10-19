<template>
  <TheHeader/>
  <router-view/>
 
</template>
<script>
import TheHeader from '@/components/the-header.vue'
export default {
  name: 'APP',
  components: {
    TheHeader
  }
}
</script>

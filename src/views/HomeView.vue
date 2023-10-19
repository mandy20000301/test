<template>
  <div class="overflow-hidden">
    <TheBanner/>
    <ThePlatform/>
    <TheFunction/>
    <TheConcept/>
    <ThePartner/>
    <TheWoman/>
    <TheForm/>
  </div>
</template>

<script>
import TheBanner from '@/components/banner/the-banner.vue'
import ThePlatform from '@/components/platform/the-platform.vue'
import TheFunction from '@/components/function/the-function.vue'
import TheConcept from '@/components/concept/the-concept.vue'
import ThePartner from '@/components/partner/the-partner.vue'
import TheWoman from '@/components/woman/the-woman.vue'
import TheForm from '@/components/form/the-form.vue'
export default {
  name: 'Home',
  components: {
    TheBanner,
    ThePlatform,
    TheFunction,
    TheConcept,
    ThePartner,
    TheWoman,
    TheForm
  }
}
</script>
<style scoped lang="scss">

</style>
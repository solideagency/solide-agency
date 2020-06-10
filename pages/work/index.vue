<template>
  <div class="container">
    <div class="inner">
      <projectpreview/>
      <calltoaction linkto="Contact"/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import projectpreview from '~/components/projectpreview.vue'
import calltoaction from '~/components/calltoaction.vue'

export default {
  transition: {
    css: false
  }, // set our transition with nuxt.js
  components: {
    projectpreview,
    calltoaction
  },
  async fetch ({store, params}) {
    return Promise.all([
      store.dispatch("company/getCompanyDetails"),
      store.dispatch("socialmedia/getSocialMediaAccounts"),
      store.dispatch("calltoaction/getCallToActions"),
      store.dispatch("project/getProjects")
    ])
  },
  head () {
    return {
      // meta: [
      //   { hid: 'description', name: 'description', content: this.$store.state.teasers.metadescription },
      //   { name: 'keywords', content: this.$store.state.teasers.metadekeywords }
      // ]
    }
  }
}
</script>

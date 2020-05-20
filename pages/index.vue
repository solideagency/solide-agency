<template>
  <div>
    <div class="teaser">
      <div class="container">
        <div class="inner">
          <calltoaction limit="1" linkto="Services"/>
          <cityimage/>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="inner">
          <keyvalue page="Home"/>
          <service disable="Prepaid cards"/>
          <projectpreview limit="3"/>
          <calltoaction linkto="Contact"/>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import calltoaction from '~/components/calltoaction.vue'
import cityimage from '~/components/cityimages.vue'
import keyvalue from '~/components/keyvalue.vue'
import service from '~/components/service.vue'
import projectpreview from '~/components/projectpreview.vue'


export default {
  components: {
    calltoaction,
    cityimage,
    keyvalue,
    service,
    projectpreview
  },
  async fetch ({store, params}) {
    return Promise.all([
      store.dispatch("getCallToActions"),
      store.dispatch("getNavigation"),
      store.dispatch("getCityImages"),
      store.dispatch("getKeyValues"),
      store.dispatch("getServices"),
      store.dispatch("getProjects")
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

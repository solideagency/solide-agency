<template>
  <div class="container">
    <div class="inner">
      <keyvalue page="Services"/>
      <principle/>
      <h1 class="process-title">Our process</h1>
      <processStep/>
      <service disable="Prepaid cards"/>
    </div>
  </div>
</template>

<script>
import keyvalue from '~/components/keyvalue.vue'
import processStep from '~/components/processStep.vue'
import principle from '~/components/principle.vue'
import service from '~/components/service.vue'


export default {
  components: {
    keyvalue,
    processStep,
    principle,
    service
  },
  async fetch ({store, params}) {
    return Promise.all([
      store.dispatch("company/getCompanyDetails"),
      store.dispatch("socialmedia/getSocialMediaAccounts"),
      store.dispatch("keyvalue/getKeyValues"),
      store.dispatch("process_step/getOurProcessSteps"),
      store.dispatch("principle/getPrinciples"),
      store.dispatch("service/getServices")
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

<template>
  <div class="container">
    <div class="inner">
      <div v-for="item in $store.state.company.companyDetails" v-html="item.about"></div>
      <div class="employees">
        <h1>We are two people</h1>
        <div class="more-about">
          <h3 v-for="employee in $store.state.employee.employees">More about {{employee.name}}</h3>
        </div>
        <div v-for="employee in $store.state.employee.employees" :class="employee.name">
          <p class="small-text">{{employee.about}}</p>
          <img :src="(employee.image)" alt=""/>
        </div>
      </div>
      <div>
        <h1>We are in two places</h1>
        <p class="small-text" v-for="item in $store.state.company.companyDetails" v-html="item.culture"></p>
      </div>
      <calltoaction linkto="Contact"/>
    </div>
  </div>
</template>


<script>
import { mapMutations } from 'vuex'
import calltoaction from '~/components/calltoaction.vue'


export default {
  components: {
    calltoaction
  },
  async fetch ({store, params}) {
    return Promise.all([
      store.dispatch("company/getCompanyDetails"),
      store.dispatch("socialmedia/getSocialMediaAccounts"),
      store.dispatch("company/getCompanyDetails"),
      store.dispatch("employee/getEmployees"),
      store.dispatch("calltoaction/getCallToActions")
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

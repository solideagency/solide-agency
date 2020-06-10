<template>
  <div class="container">
    <div class="inner">
      <h1 class="cta-contact-page"><span>Mail us at </span><a class="contact-heading" v-for="item in $store.state.company.companyDetails" :href="'mailto:' + item.email">{{' ' + item.email}}</a></h1>
      <h1 class="cta-contact-page"><span>Call Suus at </span><a class="contact-heading" v-for="item in $store.state.company.companyDetails" :href="'tel:' + item.secondphonenumber">{{' ' + item.secondphonenumber}}</a></h1>
      <h1 class="cta-contact-page"><span>Call Werner at </span><a class="contact-heading" v-for="item in $store.state.company.companyDetails" :href="'tel:' + item.phonenumber">{{' ' + item.phonenumber}}</a></h1>
    </div>
  </div>

</template>

<script>
export default {
  transition: {
    css: false
  }, // set our transition with nuxt.js
  components: {
  },
  async fetch ({store, params}) {
    return Promise.all([
      store.dispatch("company/getCompanyDetails"),
      store.dispatch("socialmedia/getSocialMediaAccounts")
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

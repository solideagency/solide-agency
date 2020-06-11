<template>
  <footer>
    <div class="contact">
      <h3>Contact</h3>
      <a class="small-text" v-for="item in $store.state.company.companyDetails" :href="'mailto:' + item.email">{{item.email}}</a>
      <a class="small-text" v-for="item in $store.state.company.companyDetails" :href="'tel:' + item.phonenumber">{{item.phonenumber}}</a>
      <a class="small-text" v-for="item in $store.state.company.companyDetails" :href="'tel:' + item.secondphonenumber">{{item.secondphonenumber}}</a>
    </div>
    <div class="who-we-are">
      <h3>Who we are</h3>
      <nuxt-link class="small-text" to="/about-us">About us</nuxt-link>
      <nuxt-link class="small-text" to="/contact">Contact</nuxt-link>
    </div>
    <div class="what-we-do">
      <h3>What we do</h3>
      <nuxt-link class="small-text" to="/work">Work</nuxt-link>
      <nuxt-link class="small-text" to="/approach">Approach</nuxt-link>
    </div>
    <div class="follow-us">
      <h3>Follow us</h3>
      <a target="_blank" class="small-text" v-for="item in $store.state.socialmedia.socialMediaAccounts" :href="item.url">
        <img :src="require(`~/assets/images/${item.platform}.svg`)" :alt="'social media icon ' + item.platform"/>
      </a>
    </div>
  </footer>
</template>

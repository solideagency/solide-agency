<template>
  <div :class="'page-' + this.routeName">
    <header class="first">
      <div class="container">
        <div class="inner">
          <div>
            <nuxt-link class="logo" to="/">
              <h1>Sólide Agency</h1>
            </nuxt-link>
            <navigationItems/>
          </div>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </header>
    <main>
      <nuxt/>
    </main>
    <footer>
      <div class="contact">
        <h3>Contact</h3>
        <a class="small-text" v-for="item in $store.state.company.companyDetails" :href="'mailto:' + item.email">{{item.email}}</a>
        <a class="small-text" v-for="item in $store.state.company.companyDetails" :href="'tel:' + item.phonenumber">{{item.phonenumber}}</a>
      </div>
      <div class="who-we-are">
        <h3>Who we are</h3>
        <nuxt-link class="small-text" to="/about-us">About us</nuxt-link>
        <nuxt-link class="small-text" to="/contact">Contact</nuxt-link>
      </div>
      <div class="what-we-do">
        <h3>What we do</h3>
        <nuxt-link class="small-text" to="/work">Work</nuxt-link>
        <nuxt-link class="small-text" to="/services">Services</nuxt-link>
      </div>
      <div class="follow-us">
        <h3>Follow us</h3>
        <a target="_blank" class="small-text" v-for="item in $store.state.socialmedia.socialMediaAccounts" :href="item.url">
          <img :src="require(`~/assets/images/${item.platform}.svg`)" :alt="'social media icon ' + item.platform"/>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import navigationItems from '~/components/navigationItems.vue'

export default {
  components: {
    navigationItems
  },
  mounted(){
    //switch
    var switchButton = document.querySelector('.switch input');
    var bodyBackground = document.querySelector('body');

    switchButton.addEventListener('change', function(e){
      if(switchButton.checked === true){
        bodyBackground.classList.add("barcelona");
        bodyBackground.classList.remove("amsterdam");
        document.querySelector('.city-images .amsterdam').style.display = "none";
        document.querySelector('.city-images .barcelona').style.display = "block";

      } else {
        bodyBackground.classList.remove("barcelona");
        bodyBackground.classList.add("amsterdam");
        document.querySelector('.city-images .amsterdam').style.display = "block";
        document.querySelector('.city-images .barcelona').style.display = "none";
      }
    })

    //menu show only on scroll up
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").classList.remove("nav-up");
      }
      else if (currentScrollPos > 100){
        document.querySelector("header").classList.add("nav-up");
        document.querySelector("header").classList.remove("first");
      }

      if (currentScrollPos < 100) {
        document.querySelector("header").classList.add("first");
      }
      prevScrollpos = currentScrollPos;
    }
  },
  computed: {
    routeName: function(){
      return this.$nuxt.$route.name
    }
  }
}
</script>

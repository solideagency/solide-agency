<template>
  <div :class="'page-' + this.routeName">
    <header class="first">
      <div class="container">
        <div class="inner">
          <div>
            <nuxt-link class="logo" to="/">
              <h2>Sólide Agency</h2>
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
    <footerBlock/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import navigationItems from '~/components/navigationItems.vue'
import footerBlock from '~/components/footer.vue'

export default {
  components: {
    navigationItems,
    footerBlock
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
      console.log(this.$nuxt.$route.name)
      return this.$nuxt.$route.name
    }
  }
}
</script>

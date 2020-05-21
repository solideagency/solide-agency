<template>
  <div>
    <header>
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
    var switchButton = document.querySelector('.switch input');

    var bodyBackground = document.querySelector('body');

    switchButton.addEventListener('change', function(e){
      if(switchButton.checked === true){
        bodyBackground.classList.add("barcelona");
        document.querySelector('.city-images .amsterdam').style.display = "none";
        document.querySelector('.city-images .barcelona').style.display = "block";

      } else {
        bodyBackground.classList.remove("barcelona");
        document.querySelector('.city-images .amsterdam').style.display = "block";
        document.querySelector('.city-images .barcelona').style.display = "none";
      }
    })
  }
}
</script>

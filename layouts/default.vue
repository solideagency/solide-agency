<template>
  <div>
    <header>
      <div class="container">
        <div class="inner">
          <div>
            <a class="logo" href="/"><h1>Sólide Agency</h1></a>
            <navigation/>
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
import navigation from '~/components/navigation.vue'

export default {
  components: {
    navigation
  },
  mounted(){
    var switchButton = document.querySelector('.switch input');

    var bodyBackground = document.querySelector('body');
    var headerBackground = document.querySelector('header');
    var teaserBackground = document.querySelector('.teaser');
    var hoverMenuBackground = document.querySelector('header nav');
    var hoverBorderBackground = document.querySelector('.teaser h1');


    switchButton.addEventListener('change', function(e){
      if(switchButton.checked === true){
        bodyBackground.classList.add("barcelona");
        headerBackground.classList.add("barcelona");
        teaserBackground.classList.add("barcelona");
        hoverMenuBackground.classList.add("barcelona");
        hoverBorderBackground.classList.add("barcelona");

        document.querySelector('.city-images .amsterdam').style.display = "none";
        document.querySelector('.city-images .barcelona').style.display = "block";

      } else {
        bodyBackground.classList.remove("barcelona");
        headerBackground.classList.remove("barcelona");
        teaserBackground.classList.remove("barcelona");
        hoverMenuBackground.classList.remove("barcelona");
        hoverBorderBackground.classList.remove("barcelona");

        document.querySelector('.city-images .amsterdam').style.display = "block";
        document.querySelector('.city-images .barcelona').style.display = "none";

      }
    })



  },
  async fetch ({store, params}) {
    return Promise.all([
      store.dispatch("getNavigation")
    ])
  }
}
</script>

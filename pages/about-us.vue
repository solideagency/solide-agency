<template>
  <div class="container">
    <div class="inner">
      <div v-for="item in $store.state.company.companyDetails" v-html="item.about"></div>
      <div class="employees">
        <h1>We are two people</h1>
        <div class="more-about">
          <h3 v-for="employee in $store.state.employee.employees" :class="employee.name">More about {{employee.name}}</h3>
        </div>
        <div v-for="employee in $store.state.employee.employees" :class="'employee ' + employee.name">
          <p class="small-text">{{employee.about}}</p>
          <img :src="(employee.image)" :alt="(employee.imageAlt)"/>
        </div>
      </div>
      <div class="two-places">
        <h1>We are in two places</h1>
        <p class="small-text" v-for="item in $store.state.company.companyDetails" v-html="item.culture"></p>
        <div class="flip hidden">
          <div class="nums nums-one">
            <div class="num" data-num="A" data-num-next="P"></div>
            <div class="num" data-num="P" data-num-next="S"></div>
            <div class="num" data-num="S" data-num-next="D"></div>
            <div class="num" data-num="D" data-num-next="Q"></div>
            <div class="num" data-num="Q" data-num-next="R"></div>
            <div class="num" data-num="R" data-num-next="J"></div>
            <div class="num" data-num="J" data-num-next="G"></div>
            <div class="num" data-num="G" data-num-next="R"></div>
            <div class="num" data-num="R" data-num-next="K"></div>
            <div class="num" data-num="K" data-num-next="A"></div>
          </div>
           <div class="nums nums-two">
            <div class="num" data-num="M" data-num-next="O"></div>
            <div class="num" data-num="O" data-num-next="L"></div>
            <div class="num" data-num="L" data-num-next="N"></div>
            <div class="num" data-num="N" data-num-next="B"></div>
            <div class="num" data-num="B" data-num-next="V"></div>
            <div class="num" data-num="V" data-num-next="E"></div>
            <div class="num" data-num="E" data-num-next="T"></div>
            <div class="num" data-num="T" data-num-next="M"></div>
            <div class="num" data-num="M" data-num-next="A"></div>
            <div class="num" data-num="A" data-num-next="M"></div>
          </div>

          <div class="nums nums-three">
            <div class="num" data-num="S" data-num-next="G"></div>
            <div class="num" data-num="G" data-num-next="Q"></div>
            <div class="num" data-num="Q" data-num-next="F"></div>
            <div class="num" data-num="F" data-num-next="I"></div>
            <div class="num" data-num="I" data-num-next="X"></div>
            <div class="num" data-num="X" data-num-next="A"></div>
            <div class="num" data-num="A" data-num-next="C"></div>
            <div class="num" data-num="C" data-num-next="Y"></div>
            <div class="num" data-num="Y" data-num-next="Z"></div>
            <div class="num" data-num="Z" data-num-next="S"></div>
          </div>

          <div class="nums nums-four"></div>

          <div class="nums nums-five">
            <div class="num" data-num="B" data-num-next="P"></div>
            <div class="num" data-num="P" data-num-next="S"></div>
            <div class="num" data-num="S" data-num-next="D"></div>
            <div class="num" data-num="D" data-num-next="Q"></div>
            <div class="num" data-num="Q" data-num-next="R"></div>
            <div class="num" data-num="R" data-num-next="J"></div>
            <div class="num" data-num="J" data-num-next="G"></div>
            <div class="num" data-num="G" data-num-next="R"></div>
            <div class="num" data-num="R" data-num-next="K"></div>
            <div class="num" data-num="K" data-num-next="B"></div>
          </div>
           <div class="nums nums-six">
            <div class="num" data-num="C" data-num-next="O"></div>
            <div class="num" data-num="O" data-num-next="L"></div>
            <div class="num" data-num="L" data-num-next="N"></div>
            <div class="num" data-num="N" data-num-next="B"></div>
            <div class="num" data-num="B" data-num-next="V"></div>
            <div class="num" data-num="V" data-num-next="E"></div>
            <div class="num" data-num="E" data-num-next="T"></div>
            <div class="num" data-num="T" data-num-next="M"></div>
            <div class="num" data-num="M" data-num-next="A"></div>
            <div class="num" data-num="A" data-num-next="C"></div>
          </div>

          <div class="nums nums-seven">
            <div class="num" data-num="N" data-num-next="G"></div>
            <div class="num" data-num="G" data-num-next="Q"></div>
            <div class="num" data-num="Q" data-num-next="F"></div>
            <div class="num" data-num="F" data-num-next="I"></div>
            <div class="num" data-num="I" data-num-next="X"></div>
            <div class="num" data-num="X" data-num-next="A"></div>
            <div class="num" data-num="A" data-num-next="C"></div>
            <div class="num" data-num="C" data-num-next="Y"></div>
            <div class="num" data-num="Y" data-num-next="Z"></div>
            <div class="num" data-num="Z" data-num-next="N"></div>
          </div>
        </div>
      </div>
      <calltoaction linkto="Contact"/>
    </div>
  </div>
</template>


<script>
import { mapMutations } from 'vuex'
import calltoaction from '~/components/calltoaction.vue'


export default {
  transition: {
    css: false
  }, // set our transition with nuxt.js
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
  mounted(){
    // Toggle between employees
    var employees = document.querySelectorAll(".employee");
    var navigation = document.querySelectorAll('.more-about h3');

    navigation[0].classList.add('active');
    employees[0].classList.add('active');

    navigation.forEach(function(nav, index){
      nav.addEventListener('click', function(){
        var currentNav = document.querySelectorAll("h3.active");
        currentNav[0].className = currentNav[0].className.replace(" active", "");
        var currentEmployee = document.querySelectorAll(".employees div.active");
        currentEmployee[0].className = currentEmployee[0].className.replace(" active", "");

        nav.classList.add('active');
        employees[index].classList.add('active');
      })
    })

    // Flip
    function Flip() {
      var elements;
      var windowHeight;

      function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
      }

      function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var positionFromTop = elements[i].getBoundingClientRect().top;

          if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element');
            element.classList.remove('hidden');
          } else {
              element.classList.remove('fade-in-element');
          }
        }
      }

      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);

      init();
      checkPosition();
    };

    Flip();

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

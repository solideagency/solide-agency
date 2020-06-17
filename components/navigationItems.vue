<template>
  <nav>
    <ul>
      <li><nuxt-link to="/work">Work</nuxt-link></li>
      <li><nuxt-link to="/approach">Approach</nuxt-link></li>
      <li><nuxt-link to="/about-us">About us</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    items: function(){
      return this.$store.state.navigation.navigationitems;
    }
  }
}
</script>

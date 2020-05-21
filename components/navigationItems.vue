<template>
  <nav>
    <ul>
      <nuxt-link to="/work">Work</nuxt-link>
      <nuxt-link to="/services">Services</nuxt-link>
      <nuxt-link to="/about-us">About us</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    items: function(){
      // console.log(this.$store.state.navigation.navigationitems)
      return this.$store.state.navigation.navigationitems;
    }
  }
}
</script>

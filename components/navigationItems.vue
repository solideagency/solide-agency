<template>
  <nav>
    <ul>
      <div v-for="item in this.items">
        <p>test</p>
        <nuxt-link
        :key="item.name"
        v-if="item.name !== 'Home'"
        :to="(item.name.toLowerCase().replace(/\s/g, '-'))">
        {{ item.name }}
        </nuxt-link>
      </div>
      <nuxt-link to="/work">Work</nuxt-link>
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

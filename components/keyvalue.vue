<template>
  <section class="key-value">
    <div v-for="item in this.keyValues" class="text" v-html="item.content"></div>
  </section>
</template>

<script>
  export default {
    props: ['page'],
    computed: {
      keyValues: function(){
        return this.$store.state.keyValues.filter(value =>
          Object.values(value.sitemap)[0] == this.page
        )
      }
    }
  }
</script>

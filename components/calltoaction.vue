<template>
  <section class="call-to-action">
    <div v-for="item in this.callToActions">
      <div class="text" v-html="item.title"></div>
      <a :href="'/' + (item.link.toLowerCase().replace(/\s/g, '-'))">
        <span class="cta">{{item.cta}}</span>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['linkto', 'limit'],
    computed: {
      callToActions: function(){
        return this.$store.state.callToActions.filter(cta =>
          cta.link == this.linkto
        )
      }
    }
  }
</script>

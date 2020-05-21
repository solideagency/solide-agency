<template>
  <section class="services">
    <div v-for="item in this.services">
      <p>{{item.name}}</p>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['disable'],
    computed: {
      services: function(){
        return this.$store.state.service.services.filter(value =>
          value.name !== this.disable
        )
      }
    }
  }
</script>

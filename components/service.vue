<template>
  <section class="services">
    <div v-for="item in this.services">
      <p class="title">{{item.name}}</p>
      <p v-for="product in item.products">
        {{product.title.value}}
      </p>
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

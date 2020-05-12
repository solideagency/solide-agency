<template>
  <section class="city-images">
    <div :class=(item.city.toLowerCase()) v-for="item in $store.state.cityImages">
      <p class="small-text">A creative agency in <span class="small-text">{{item.city}}</span></p>
      <img :src="(item.image)">
    </div>
  </section>
</template>

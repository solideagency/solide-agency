<template>
  <section class="city-images rellax" data-rellax-speed="5">
    <div :class=(item.city.toLowerCase()) v-for="item in $store.state.cityimage.cityImages">
      <p class="caption">A creative agency in <span class="caption">{{item.city}}</span></p>
      <img :src="(item.image)" :alt="(item.alt)">
    </div>
  </section>
</template>

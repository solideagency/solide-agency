<template>
  <section class="principles">
    <div v-for="item in $store.state.principle.principles">
      <h2 class="number">{{item.number + ' ' + item.title}}</h2>
      <p class="small-text">{{item.content}}</p>
    </div>
  </section>
</template>

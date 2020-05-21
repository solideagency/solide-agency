<template>
  <nav>
    <ul>
      <nuxt-link
        v-for="item in $store.state.navigation.navigationitems"
        :key="item.name"
        v-if="item.name !== 'Home'"
        :to="(item.name.toLowerCase().replace(/\s/g, '-'))">
        {{ item.name }}
      </nuxt-link>
    </ul>
  </nav>
</template>

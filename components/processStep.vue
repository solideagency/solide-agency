<template>
  <section class="process">
    <div v-for="item in $store.state.process_step.ourProcessSteps">
      <div class="step">
        <h2>{{item.number}}</h2>
        <h2 class="title">{{item.title}}</h2>
      </div>
      <p class="small-text">{{item.content}}</p>
    </div>
  </section>
</template>

<template>
  <section class="projects">
    <div class="project" v-for="project in this.projects">
      <img :src="(project.headerImageURL)" :alt="(project.headerImageAlt)"/>
      <h1>{{project.title}}</h1>
      <p class="label">{{project.client}}</p>
      <p class="service label" v-for="service in project.services">{{service.title.value}}</p>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['limit'],
    computed: {
      projects: function(){
        return this.$store.state.projects.length > this.limit
        ? this.$store.state.projects.slice(0, this.limit)
        : this.$store.state.projects;
      }
    }
  }
</script>

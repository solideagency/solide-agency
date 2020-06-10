<template>
  <div class="container">
    <div class="inner">
      <div class="project" v-for="project in this.projects">
        <h1>{{project.title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    css: false
  }, // set our transition with nuxt.js
  validate ({ params, store, context}) {
    // Check if `params.id` is an existing category
      return store.state.projectSlug.some(project =>
        project.slug === params.project
      )
  },
  computed: {
    projects: function(){
      return this.$store.state.projectSlug.filter(project =>
        project.slug === this.$route.params.project
      )
    }
  }
}
</script>

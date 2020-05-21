<template>
  <div class="inner">
    <div class="project" v-for="project in this.projects">
      <h1>{{project.title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  validate ({ params, store, context}) {
    // Check if `params.id` is an existing category
      return store.state.projectItems.some(project =>
        project.slug === params.project
      )
  },
  computed: {
    projects: function(){
      return this.$store.state.projectItems.filter(project =>
        project.slug === this.$route.params.project
      )
    }
  }
}
</script>

<template>
  <div class="other-projects">
    <div v-for="other in this.others">
      <nuxt-link :to="'/work/' + (other.slug)">
        <p class="caption">Next project</p>
        <img :src="(other.headerImageURL)" :alt="(other.headerImageAlt)"/>
        <h2>{{other.title}}</h2>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['limit'],
  computed: {
    others: function(){
      var otherprojects = this.$store.state.projectSlug.filter(project =>
        project.slug !== this.$route.params.project
      )

      return otherprojects.length > this.limit
      ? otherprojects.slice(0, this.limit)
      : otherprojects;
    }
  }
}
</script>

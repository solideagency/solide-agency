<template>
  <section class="projects">
    <div class="project" v-for="project in this.projects">
      <nuxt-link :to="'work/' + (project.slug)">
        <div class="container-img">
          <img :src="(project.headerImageURL)" :alt="(project.headerImageAlt)"/>
        </div>
        <h1>{{project.title}}</h1>
        <p class="client caption">{{project.client}}</p>
        <p class="service caption" v-for="service in project.services">{{service.title.value}}</p>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['limit'],
    computed: {
      projects: function(){
        return this.$store.state.project.projectItems.length > this.limit
        ? this.$store.state.project.projectItems.slice(0, this.limit)
        : this.$store.state.project.projectItems;
      }
    }
  }
</script>

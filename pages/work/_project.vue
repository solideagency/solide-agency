<template>
  <div class="container">
    <div class="inner">
      <div class="project-detail" v-for="project in this.projects">
        <div class="project-subtitle">
          <div>
            <p class="caption">{{project.client}}</p>
            <p class="service caption" v-for="service in project.services">{{service.title.value}}</p>
          </div>
          <h1>{{project.fulltitle}}</h1>
          <div v-html="project.context"></div>
          <img class="first-image" alt="" v-for="image in project.productImages" :src="image.url"/>
        </div>

        <div class="chapter" v-for="chapter in project.chapters">
          <h2>{{chapter.title.value}}</h2>
          <p class="small-text" v-html="chapter.text.value"></p>
          <img alt="" v-for="image in chapter.assets.value" :src="image.url"/>
        </div>

        <div class="meta">
          <div>
            <h2>Client</h2>
            <p class="small-text">{{project.client}}</p>
          </div>
          <div>
            <h2>Services</h2>
            <p class="small-text" v-for="service in project.services">{{service.title.value}}</p>
          </div>
          <div>
            <h2>Deliverables</h2>
          </div>
          <div>
            <h2>Links</h2>
            <a class="small-text cta-link" target="_blank" :href="'https://' + project.websiteUrl">{{project.websiteUrl}}</a>
          </div>
        </div>
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

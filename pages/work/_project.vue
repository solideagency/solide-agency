<template>
  <div class="container">
    <div class="inner">
      <div class="project-detail" v-for="project in this.projects">
        <div class="project-subtitle">
          <div>
            <p class="client caption service">{{project.client}}</p>
            <p class="service caption service" v-for="service in project.services">{{service.title.value}}</p>
          </div>
          <h1>{{project.fulltitle}}</h1>
          <div v-html="project.context"></div>
          <img class="first-image" alt="" v-for="image in project.productImages" :src="image.url"/>
        </div>

        <div class="chapter" v-for="chapter in project.chapters">
          <h2>{{chapter.title.value}}</h2>
          <p class="small-text" v-html="chapter.text.value"></p>
          <img alt="" v-for="image in chapter.assets.value" :src="image.url"/>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/O5K3607Hkvc?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="100%" height="100%" src="//www.youtube.com/embed/qUJYqhKZrwA?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="meta">
          <div>
            <h2>Client</h2>
            <p class="small-text">{{project.client}}</p>
          </div>
          <div>
            <h2>Publication</h2>
            <p class="small-text date"> {{ project.date.toLocaleString("default", { month: "long" }) + ' '  + project.date.getFullYear() }}</p>
          </div>
          <div>
            <h2>Deliverables</h2>
            <p class="small-text" v-for="product in project.products">{{product.title.value}}</p>
          </div>
          <div v-if="project.websiteUrl">
            <h2>Link</h2>
            <a class="small-text cta-link" target="_blank" :href="'https://' + project.websiteUrl">{{project.websiteUrl}}</a>
          </div>
        </div>
      </div>
      <otherprojects limit="2"/>
    </div>
  </div>
</template>

<script>
import otherprojects from '~/components/other-projects.vue'

export default {
  transition: {
    css: false
  },
  components: {
    otherprojects,
  },
  async fetch ({store, params}) {
    return Promise.all([
      store.dispatch("company/getCompanyDetails"),
      store.dispatch("socialmedia/getSocialMediaAccounts")
    ])
  },
  validate ({ params, store, context}) {
    // Check if `params.id` is an existing category
    console.log(store)
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

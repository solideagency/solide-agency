export const state = () => ({
  projectSlug: null
})

export const mutations = {
  setProjectSlug(state, projectSlug){
    state.projectSlug = projectSlug;
  }
}

export const actions = {
  nuxtServerInit ({commit}) {
      return this.$deliveryClient
      .items()
      .type('project')
      .toPromise()
      .then(response => {
        commit('setProjectSlug', response.items.map(item => ({
          title: item.title.value,
          fulltitle: item.title_full.value,
          client: item.client.value,
          date: item.publication_date.value,
          headerImageURL: item.header_image.value[0].url,
          headerImageAlt: item.header_image.value[0].description,
          context: item.context.value,
          productImages: item.product_images.value,
          services: item.services.value,
          chapters: item.chapters.value,
          seoDescription: item.seo__meta_description.value,
          seoKeywords: item.seo__meta_keywords.value,
          slug: item.untitled_url_slug.value
        })))
      });
  }
}

export const state = () => ({
  projectItems: null
})

export const mutations = {
  setProjects(state, projectItems){
    state.projectItems = projectItems;
  }
}

export const actions = {
  getProjects (context) {
    return this.$deliveryClient
    .items()
    .type('project')
    .toPromise()
    .then(response => {
      context.commit('setProjects', response.items.map(item => ({
        title: item.title.value,
        client: item.client.value,
        date: item.publication_date.value,
        headerImageURL: item.header_image.value[0].url,
        headerImageAlt: item.header_image.value[0].description,
        context: item.context.value,
        productImages: item.product_images.value,
        services: item.services.value,
        seoDescription: item.seo__meta_description.value,
        seoKeywords: item.seo__meta_keywords.value,
        slug: item.untitled_url_slug.value
      })))
    });
  }
}

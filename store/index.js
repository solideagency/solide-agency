export const state = () => ({
  projectItems: null
})

export const mutations = {
  setProjects(state, projectItems){
    state.projectItems = projectItems;
  }
}

export const actions = {
  nuxtServerInit ({commit}, {req}) {
      return this.$deliveryClient
      .items()
      .type('project')
      .toPromise()
      .then(response => {
        commit('setProjects', response.items.map(item => ({
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


// import Vuex from 'vuex'
// import { SortOrder } from 'kentico-cloud-delivery'
//
// const createStore = () => {
//   return new Vuex.Store({
//     state: () => ({
//       navigationitems: null,
//       callToActions: null,
//       cityImages: null,
//       keyValues: null,
//       services: null,
//       projects: null
//     }),
//     mutations: {
//       setNavigation(state, navigationitems){
//         state.navigationitems = navigationitems;
//       },
//       setCallToActions(state, callToActions){
//         state.callToActions = callToActions;
//       },
//       setCityImages(state, cityImages){
//         state.cityImages = cityImages;
//       },
//       setKeyValues(state, keyValues){
//         state.keyValues = keyValues;
//       },
//       setServices(state, services){
//         state.services = services;
//       },
//       setProjects(state, projects){
//         state.projects = projects;
//       }
//     },
//     actions: {
//       getNavigation (context) {
//         return this.$deliveryClient
//         .taxonomy('sitemap')
//         .toObservable()
//         .subscribe(response => {
//           context.commit('setNavigation', response.taxonomy.terms.map(item => ({
//             name: item.name,
//           })))
//         });
//       },
//
//       getCallToActions (context) {
//         return this.$deliveryClient
//         .items()
//         .type('cta')
//         .toPromise()
//         .then(response => {
//           context.commit('setCallToActions', response.items.map(item => ({
//             title: item.title.value,
//             cta: item.cta.value,
//             link: item.sitemap_2ea706f.value[0].name,
//             pagename: item.sitemap.value
//           })))
//         });
//       },
//
//       getCityImages (context) {
//         return this.$deliveryClient
//         .items()
//         .type('city_image')
//         .toPromise()
//         .then(response => {
//           context.commit('setCityImages', response.items.map(item => ({
//             image: item.image_of_the_city.value[0].url,
//             city: item.city.value[0].name
//           })))
//         });
//       },
//
//       getKeyValues (context) {
//         return this.$deliveryClient
//         .items()
//         .type('key_value')
//         .toPromise()
//         .then(response => {
//           context.commit('setKeyValues', response.items.map(item => ({
//             sitemap: item.sitemap.value[0],
//             content: item.title.value
//           })))
//         });
//       },
//
//       getServices (context) {
//         return this.$deliveryClient
//         .items()
//         .type('service')
//         .toPromise()
//         .then(response => {
//           context.commit('setServices', response.items.map(item => ({
//             name: item.title.value
//           })))
//         });
//       },
//
//       getProjects (context) {
//         return this.$deliveryClient
//         .items()
//         .type('project')
//         .toPromise()
//         .then(response => {
//           context.commit('setProjects', response.items.map(item => ({
//             title: item.title.value,
//             client: item.client.value,
//             date: item.publication_date.value,
//             headerImageURL: item.header_image.value[0].url,
//             headerImageAlt: item.header_image.value[0].description,
//             context: item.context.value,
//             productImages: item.product_images.value,
//             services: item.services.value,
//             seoDescription: item.seo__meta_description.value,
//             seoKeywords: item.seo__meta_keywords.value,
//             slug: item.untitled_url_slug.value
//           })))
//         });
//       }
//
//     }
//   });
// };
//
// export default createStore

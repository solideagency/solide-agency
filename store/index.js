import Vuex from 'vuex'
import { SortOrder } from 'kentico-cloud-delivery'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      navigationitems: null,
      callToActions: null,
      cityImages: null
    }),
    mutations: {
      setNavigation(state, navigationitems){
        state.navigationitems = navigationitems;
      },
      setCallToActions(state, callToActions){
        state.callToActions = callToActions;
      },
      setCityImages(state, cityImages){
        state.cityImages = cityImages;
      }
    },
    actions: {
      // getTeasers (context) {
      //   return this.$deliveryClient
      //   .items()
      //   .type('teaser')
      //   .toPromise()
      //   .then(response => {
      //     context.commit('setTeasers', response.items.map(item => ({
      //       title: item.title.value,
      //       subtitle: item.title.value,
      //       page: item.sitemap.value,
      //       metadescription: item.seo__meta_description.value,
      //       metadekeywords: item.seo__meta_keywords.value
      //     })))
      //   });
      // },

      getCallToActions (context) {
        return this.$deliveryClient
        .items()
        .type('cta')
        .toPromise()
        .then(response => {
          context.commit('setCallToActions', response.items.map(item => ({
            title: item.title.value,
            cta: item.cta.value,
            link: item.sitemap_2ea706f.value[0].name,
            pagename: item.sitemap.value
          })))
        });
      },

      getNavigation (context) {
        return this.$deliveryClient
        .taxonomy('sitemap')
        .toObservable()
        .subscribe(response => {
          context.commit('setNavigation', response.taxonomy.terms.map(item => ({
            name: item.name,
          })))
        });
      },

      getCityImages (context) {
        return this.$deliveryClient
        .items()
        .type('city_image')
        .toPromise()
        .then(response => {
          console.log(response)
          context.commit('setCityImages', response.items.map(item => ({
            image: item.image_of_the_city.value[0].url,
            city: item.city.value[0].name
          })))
        });
      },
    }
  });
};

export default createStore

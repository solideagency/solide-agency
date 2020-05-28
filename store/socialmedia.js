export const state = () => ({
  socialMediaAccounts: null
})

export const mutations = {
  setSocialMediaAccounts(state, socialMediaAccounts){
    state.socialMediaAccounts = socialMediaAccounts;
  }
}

export const actions = {
  getSocialMediaAccounts (context) {
    return this.$deliveryClient
    .items()
    .type('social_media')
    .toPromise()
    .then(response => {
      context.commit('setSocialMediaAccounts', response.items.map(item => ({
        url: item.link_naar_social_media_platform.value,
        platform: item.platform.value
      })))
    });
  }
}


// export default {
//   state: {
//     cityImages: null
//   },
//   mutations: {
//     setCityImages(state, cityImages){
//       state.cityImages = cityImages;
//     }
//   },
//   actions: {
//     getCityImages (context) {
//       return this.$deliveryClient
//       .items()
//       .type('city_image')
//       .toPromise()
//       .then(response => {
//         context.commit('setCityImages', response.items.map(item => ({
//           image: item.image_of_the_city.value[0].url,
//           city: item.city.value[0].name
//         })))
//       });
//     }
//   }
// }

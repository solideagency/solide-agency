export const state = () => ({
  cityImages: null
})

export const mutations = {
  setCityImages(state, cityImages){
    state.cityImages = cityImages;
  }
}

export const actions = {
  getCityImages (context) {
    return this.$deliveryClient
    .items()
    .type('city_image')
    .toPromise()
    .then(response => {
      context.commit('setCityImages', response.items.map(item => ({
        image: item.image_of_the_city.value[0].url,
        city: item.city.value[0].name
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

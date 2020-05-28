export const state = () => ({
  companyDetails: null
})

export const mutations = {
  setCompanyDetails(state, companyDetails){
    state.companyDetails = companyDetails;
  }
}

export const actions = {
  getCompanyDetails (context) {
    return this.$deliveryClient
    .items()
    .type('company')
    .toPromise()
    .then(response => {
      context.commit('setCompanyDetails', response.items.map(item => ({
        name: item.name.value,
        address: item.address.value,
        email: item.email.value,
        phonenumber: item.phone_number.value,
        about: item.about_the_company.value,
        culture: item.culture.value,
        cultureImages: item.culture_images.value

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

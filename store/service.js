export const state = () => ({
  services: null
})

export const mutations = {
  setServices(state, services){
    state.services = services;
  }
}

export const actions = {
  getServices (context) {
    return this.$deliveryClient
    .items()
    .type('service')
    .depthParameter(1)
    .toPromise()
    .then(response => {
      context.commit('setServices', response.items.map(item => ({
        name: item.title.value,
        products: item.products.value
      })))
    });
  }
}

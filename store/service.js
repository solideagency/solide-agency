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
      console.log(response.items[0].products.value[1].title.value);
      context.commit('setServices', response.items.map(item => ({
        name: item.title.value,
        products: item.products.value
      })))
    });
  }
}

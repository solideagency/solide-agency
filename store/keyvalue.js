export const state = () => ({
  keyValues: null
})

export const mutations = {
  setKeyValues(state, keyValues){
    state.keyValues = keyValues;
  }
}

export const actions = {
  getKeyValues (context) {
    return this.$deliveryClient
    .items()
    .type('key_value')
    .toPromise()
    .then(response => {
      context.commit('setKeyValues', response.items.map(item => ({
        sitemap: item.sitemap.value[0],
        content: item.title.value
      })))
    });
  }
}

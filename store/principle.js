export const state = () => ({
  principles: null
})

export const mutations = {
  setPrinciples(state, principles){
    state.principles = principles;
  }
}

export const actions = {
  getPrinciples (context) {
    return this.$deliveryClient
    .items()
    .type('principle')
    .orderParameter('elements.number', this.$deliveryClient.SortOrder)
    .toPromise()
    .then(response => {
      context.commit('setPrinciples', response.items.map(item => ({
        number: item.number.value,
        title: item.title.value,
        content: item.content.value
      })))
    });
  }
}

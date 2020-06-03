export const state = () => ({
  ourProcessSteps: null
})

export const mutations = {
  setOurProcessSteps(state, ourProcessSteps){
    state.ourProcessSteps = ourProcessSteps;
  }
}

export const actions = {
  getOurProcessSteps (context) {
    return this.$deliveryClient
    .items()
    .type('process_step')
    .orderParameter('elements.number_in_the_proces', this.$deliveryClient.SortOrder)
    .toPromise()
    .then(response => {
      context.commit('setOurProcessSteps', response.items.map(item => ({
        number: item.number_in_the_proces.value,
        title: item.title.value,
        content: item.content.value
      })))
    });
  }
}

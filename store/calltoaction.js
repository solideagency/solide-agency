export const state = () => ({
  callToActions: null
})

export const mutations = {
  setCallToActions(state, callToActions){
    state.callToActions = callToActions;
  }
}

export const actions = {
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
  }
}

export const state = () => ({
  navigationitems: null
})

export const mutations = {
  setNavigation(state, navigationitems){
    state.navigationitems = navigationitems;
  }
}

export const actions = {
  getNavigation (context) {
    return this.$deliveryClient
    .taxonomy('sitemap')
    .toObservable()
    .subscribe(response => {
      context.commit('setNavigation', response.taxonomy.terms.map(item => ({
        name: item.name,
      })))
    });
  }
}

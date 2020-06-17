export const state = () => ({
  employees: null
})

export const mutations = {
  setEmployees(state, employees){
    state.employees = employees;
  }
}

export const actions = {
  getEmployees (context) {
    return this.$deliveryClient
    .items()
    .type('employee')
    .toPromise()
    .then(response => {
      context.commit('setEmployees', response.items.map(item => ({
        name: item.name.value,
        job: item.jobtitle.value,
        about: item.description.value,
        image: item.profile_picture.value[0].url,
        imageAlt: item.profile_picture.value[0].description
      })))
    });
  }
}

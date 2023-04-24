const state = {
  nameTicket: 'undefined',
};

const getters = {
  nameTicket: (state) => state.nameTicket,
};

const mutations = {
  CHANGE_NAME_STICKET(state, payload){
    state.nameTicket = payload
  }
};

const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};

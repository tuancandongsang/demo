import { createStore } from 'vuex';

import localState from './modules/localState';
import globalState from './modules/globalState';
import ticket from './modules/ticket';

const store = createStore({
  modules: {
    localState,
    globalState,
    ticket,
  },
});

export default store;

import { createStore } from 'vuex';

import localState from './modules/localState';
import globalState from './modules/globalState';

const store = createStore({
  modules: {
    localState,
    globalState,
  },
});

export default store;

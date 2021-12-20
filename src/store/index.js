import { createStore } from "vuex";

export default createStore({
  state: {
    personajes: [],
    filtroPersonajes: []
  },
  mutations: {

    setPersonajes(state, payload){
        state.personajes = payload;
    },

    setFiltroPersonajes(state, payload){
      state.filtroPersonajes = payload;
    }
  },
  actions: {

      async obtenerPersonajes({commit}){

        try{
          const respuesta = await fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes');
          const datos = await respuesta.json();

          commit('setPersonajes', datos);
          commit('setFiltroPersonajes', datos);
          
        } catch (error){
          console.error('Error!');
        }
      }
  },
  modules: {},
});

import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    juegos: [],
    opiniones: [],
  },
  mutations: {
    SET_GAMES(state, juegos) {
      state.juegos = juegos;
    },
    AGREGAR_OPINIONES(state, opinion) {
      state.opiniones.push(opinion);
    },
    ELIMINAR_OPINION(state,indice){
      state.opiniones.splice(indice,1)
    },
    MODIFICAR_OPINION(state, { indice, opinion }) {
      const opiniones = [...state.opiniones];
      opiniones[indice] = opinion;
      state.opiniones = opiniones;
    }
  },
  actions: {
    async get_Juegos({ commit }) {
      const url = "/games.json";
      const response = await axios.get(url);
      const { data: juegos } = response;
      commit("SET_GAMES", juegos);
    },
    modificar_Opinion({ commit, state }, opinion) {
      const { opiniones } = state;
      const { id } = opinion;
      const indiceDeLaOpinion = opiniones.findIndex((o) => o.id === id);
      commit("MODIFICAR_OPINION", { indice: indiceDeLaOpinion, opinion });
    },
    eliminar_Opinion({commit},id){
      const {opiniones} = this.state
      const indiceDeLaOpinion = opiniones.findIndex((p) => p.id === id)
      commit ("ELIMINAR_OPINION", indiceDeLaOpinion)
    },
  },
  getters: {
    getJuegosAndOpiniones(state) {
      const { juegos, opiniones } = state;
      
      const getFullData = [];
      opiniones.forEach((opinion) => {
        const juegoRelacionadoConLaOpinion = juegos.find((juego) => {
          return juego.id === opinion.idJuego;
          console.log(juego.id)
        });
        
        const JuegoYOpinionUnificada = {
          opinion: { ...opinion },
          juego: { ...juegoRelacionadoConLaOpinion },
        };
        
        getFullData.push(JuegoYOpinionUnificada)
      });
      return getFullData
    },
    getOpinionById:(state) => (id) => {
      const { opiniones } = state
      const opinion = opiniones.find((o) => o.id === id)
      return opinion
    }
  },
});

store.dispatch("get_Juegos");
export default store;

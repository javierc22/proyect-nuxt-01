import { db } from "@/plugins/firebase";

export const state = () => ({
  tareas: '',
})

export const mutations = {
  setTareas(state, payload){
    console.log(payload);
    state.tareas = payload;
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }){
    return db.collection('tareas').get()
      .then( query => {
        const tareas = [];
        query.forEach( element => {
          let tarea = element.data();
          tarea.id = element.id;
          tareas.push(tarea);
        });
        return commit('setTareas', tareas);
      })
      .catch(function(error){
        console.log(error);
      });
  }
}
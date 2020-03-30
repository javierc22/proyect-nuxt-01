import { db } from "@/plugins/firebase";

export const state = () => ({
  tareas: '',
})

export const mutations = {
  setTareas(state, payload){
    console.log(payload);
    state.tareas = payload;
  },
  setTarea(state, payload){
    state.tareas.push(payload)
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
  },
  async agregarTarea({ commit }, payload){
    try {
      const doc = await db.collection('tareas').add({
        nombre: payload,
        fecha: new Date(),
      });
      commit('setTarea', { nombre: payload, id: doc.id});
    } catch (error) {
      console.log(error)
    }
  }
}
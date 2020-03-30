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
  },
  deleteTarea(state, payload){
    // Busca el item por index dentro del state 'tareas'
    const index = state.tareas.findIndex(item => item.id === payload.id);
    // cambia el contenido de 'tareas', eliminando un elemento con el index seleccionado.
    state.tareas.splice(index, 1);
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
  },
  eliminarTarea({ commit }, payload){
    db.collection('tareas').doc(payload.id).delete()
      .then(function() {
        commit('deleteTarea', payload);
      })
      .catch(function(error) {
        console.error(error)
      })
  }
}
<template>
  <div>
    <h2>Vuex</h2>

    <form @submit.prevent="agregarTarea(tarea)">
      <input type="text" class="form-control mb-2" v-model="tarea">
      <b-button type="submit" class="btn-info btn-info">Agregar</b-button>
    </form>
    <ul>
      <li v-for="(item, index) in tareas" :key="index">
        {{ item.id }} - {{ item.nombre }}
        <b-button class="btn-sm btn-warning" :to="`/vuex/${item.id}`">Editar</b-button>
        <b-button class="btn-sm btn-danger" @click="eliminarTarea(item)">Eliminar</b-button>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '@/plugins/firebase'
import { mapState, mapActions } from "vuex";

export default {
  // fetch({ store }){
  //   return db.collection('tareas').get()
  //     .then( query => {
  //       const tareas = [];
  //       query.forEach(element => {
  //         tareas.push(element.data())  
  //       });
  //       return store.commit('setTareas', tareas);
  //     })
  //     .catch(function(error){
  //       console.log(error);
  //     });
  // }
  computed: {
    ...mapState(['tareas']),
  },
  methods: {
    ...mapActions(['agregarTarea']),
    ...mapActions(['eliminarTarea']),
  },
  data() {
    return {
      tarea: '',
    }
  },
}
</script>
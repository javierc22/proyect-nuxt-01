<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2>{{ articulo.title }}</h2>
        <p class="small">{{ articulo.userId }}</p>
        <p>{{ articulo.body }}</p>
        <nuxt-link to="/blog" class="btn btn-primary">Atrás</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      articulo: '',
    }
  },
  async created(){
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
      this.articulo = res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
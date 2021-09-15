<!-- alurapic/src/App.vue -->
<template>

  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>

  </div>
</template>

<script>

// agora temos apenas a propriedade `fotos` que é um array que possui dois objetos que possuem as propriedades `url` e `titulo`, cada um com seu valor.
export default {

  data() {
    return {
      titulo: 'Alurapic',
      fotos: []

    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>
</style>
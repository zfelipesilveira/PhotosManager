<!-- alurapic/src/App.vue -->
<template>
    <div class="painel">
        <h2 class="painel-titulo">{{foto.titulo}}</h2>
            <div class="painel-corpo">

                <img :src="foto.url" :alt="foto.titulo">

            </div><!-- fim painel-corpo -->
    </div><!-- fim painel -->

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


  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
</style>
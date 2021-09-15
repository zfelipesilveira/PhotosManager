<!-- alurapic/src/components/shared/botao/Botao.vue -->
<template>
    <button class="botao botao-perigo" :type="tipo" @click="disparaAcao()">{{rotulo}}</button>
</template>

<script>
export default {

   props: {
       tipo: {
           type: String, 
           required: true
       },

       rotulo: {
           type: String, 
           required: true
       },

       confirmacao: Boolean,
       estilo: String
   },
   methods: {

       disparaAcao() {
           console.log(typeof(this.confirmacao));
           if(this.confirmacao) {
               if(confirm('Confirma operacao?')) {
                    this.$emit('botaoAtivado');
                }
                return;
           }
           this.$emit('botaoAtivado');
       }
   },

   computed: {

       estiloDoBotao() {

           // se o valor é padrão ou não passou nada para estilo
           if(this.estilo == 'padrao') return 'botao botao-padrao';

           if(this.estilo == 'perigo') return 'botao botao-perigo';
       }
   }
}
</script>    

<style scoped lang="sass">

    @import './Botao.scss';

</style>
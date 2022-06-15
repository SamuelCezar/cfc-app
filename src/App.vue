<template>
  <h1>Cálculo do IMC</h1>
  <h2>Digite seu peso e altura para calcular seu IMC</h2>

  <div class="div-imc">
    <span class="p-float-label">
      <InputText id="input-weight" type="text" v-model="weight" v-bind:disabled="imc" />
      <label for="input-weight">Peso</label>
    </span>
  </div>

  <div class="div-imc">
    <span class="p-float-label">
      <InputText id="input-height" type="text" v-model="height" v-bind:disabled="imc"/>
      <label for="input-height">Altura</label>
    </span>
  </div>

  <Button style="margin-top: 1rem; margin-right: 20px" label="Calcular" @click="calculate" />
  <Button label="Limpar" @click="clear" />

  <div v-if="imc">
    <p class="label-result">Seu IMC é: {{ imc }}</p>
    <p class="label-classification">
      A classificação do seu IMC é: {{ classification }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      weight: null,
      imc: null,
      classification: "",
    };
  },
  methods: {
    calculate: function () {
      this.imc = (this.weight / (this.height * this.height)).toFixed(2);
      if (this.imc < 18.5) {
        this.classification = "Magreza";
      } else if (this.imc >= 18.5 && this.imc < 25) {
        this.classification = "Normal";
      } else if (this.imc >= 25 && this.imc < 30) {
        this.classification = "Sobrepeso";
      } else if (this.imc >= 30 && this.imc < 40) {
        this.classification = "Obesidade";
      } else {
        this.classification = "Obesidade mórbida";
      }
      if(isNaN(this.imc)){
        this.imc = null
      }
      console.log(this.imc)
    },
    clear: function () {
      (this.height = ""), (this.weight = "");
      this.imc = null;
      this.classification = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.div-imc {
  margin-top: 1.5rem;
}
.label-result {
  font-size: 2rem;
}
.label-classification {
  font-size: 1.5rem;
}
</style>

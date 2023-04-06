<template>
  <h1>Cálculo da porcentagem a receber:</h1>
  <h3>Digite quantas aulas cada um dos instrutores deu no mês:</h3>

  <div v-if="!porcentagemAulasDaniel && totalAulas == null">
    <div>
      <div class="div-cfc">
        <span class="p-float-label">
          <InputText
            id="input-weight"
            type="number"
            allowEmpty="false"
            v-model="aulasDaniel"
          />
          <label for="input-weight">Aulas Daniel</label>
        </span>
      </div>

      <div class="div-cfc">
        <span class="p-float-label">
          <InputText id="input-weight" type="number" v-model="aulasSevero" />
          <label for="input-weight">Aulas Severo</label>
        </span>
      </div>

      <div class="div-cfc">
        <span class="p-float-label">
          <InputText id="input-weight" type="number" v-model="aulasViviane" />
          <label for="input-weight">Aulas Viviane</label>
        </span>
      </div>

      <div class="div-cfc">
        <span class="p-float-label">
          <InputText id="input-weight" type="number" v-model="aulasWalter" />
          <label for="input-weight">Aulas Walter</label>
        </span>
      </div>
    </div>

    <Button
      style="margin-top: 1rem; margin-right: 20px"
      label="Calcular"
      @click="calculate"
    />
    <Button label="Limpar" @click="clear" />
  </div>
  <div v-if="totalAulas > 0">
    <p class="label-result">Total de aulas do mês: {{ this.totalAulas }}</p>
    <p>
      <b>Daniel: {{ aulasDaniel }} aulas.</b>
    </p>
    <p>
      <b>Severo: {{ aulasSevero }} aulas.</b>
    </p>
    <p>
      <b>Viviane: {{ aulasViviane }} aulas.</b>
    </p>
    <p>
      <b>Walter: {{ aulasWalter }} aulas.</b>
    </p>
    <p class="label-classification">
      Agora digite qual o valor que vai ser distribuido entre os 4 instrutores:
    </p>
    <div class="div-cfc">
      <span class="p-float-label">
        <InputNumber
          mode="currency"
          currency="BRL"
          v-model="valorParaDistribuir"
        />
        <label for="input-weight">R$ a distribuir</label>
        <Button
          style="margin-top: 1rem; margin-left: 10px"
          label="Calcular"
          @click="calcularPorcentagem"
        />
        <Button
          style="margin-top: 1rem; margin-left: 10px"
          label="Voltar"
          @click="clear"
        />
      </span>
    </div>
  </div>

  <div v-if="porcentagemAulasDaniel != 0">
    <p class="label-classification">
      <b>Daniel</b> deu {{ this.aulasDaniel }} aulas, o que corresponde a
      {{ this.porcentagemAulasDaniel }}% das {{ totalAulas }} aulas.
    </p>
    <p>
      Sendo assim ele vai receber <b>R${{ valorDanielReceber }}</b
      >, correspondente a {{ this.porcentagemAulasDaniel }}% dos R$
      {{ valorParaDistribuir }}.
    </p>
    <hr />
    <p class="label-classification">
      <b>Severo</b> deu {{ this.aulasSevero }} aulas, o que corresponde a
      {{ this.porcentagemAulasSevero }}% das {{ totalAulas }} aulas.
    </p>
    <p>
      Sendo assim ele vai receber <b>R${{ valorSeveroReceber }}</b
      >, correspondente a {{ this.porcentagemAulasSevero }}% dos R$
      {{ valorParaDistribuir }}.
    </p>
    <hr />
    <p class="label-classification">
      <b>Viviane</b> deu {{ this.aulasViviane }} aulas, o que corresponde a
      {{ this.porcentagemAulasViviane }}% das {{ totalAulas }} aulas.
    </p>
    <p>
      Sendo assim ela vai receber <b>R${{ valorVivianeReceber }}</b
      >, correspondente a {{ this.porcentagemAulasViviane }}% dos R$
      {{ valorParaDistribuir }}.
    </p>
    <hr />
    <p class="label-classification">
      <b>Walter</b> deu {{ this.aulasWalter }} aulas, o que corresponde a
      {{ this.porcentagemAulasWalter }}% das {{ totalAulas }} aulas.
    </p>
    <p>
      Sendo assim ele vai receber <b>R${{ valorWalterReceber }}</b
      >, correspondente a {{ this.porcentagemAulasWalter }}% dos R$
      {{ valorParaDistribuir }}.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aulasDaniel: "",
      aulasSevero: "",
      aulasViviane: "",
      aulasWalter: "",
      totalAulas: null,
      valorParaDistribuir: undefined,
      porcentagemAulasDaniel: 0,
      valorDanielReceber: 0,
      porcentagemAulasSevero: 0,
      valorSeveroReceber: 0,
      porcentagemAulasViviane: 0,
      valorVivianeReceber: 0,
      porcentagemAulasWalter: 0,
      valorWalterReceber: 0,
    };
  },
  methods: {
    calculate: function () {
      if (
        this.aulasDaniel != "" &&
        this.aulasDaniel >= 0 &&
        this.aulasSevero != "" &&
        this.aulasSevero >= 0 &&
        this.aulasViviane != "" &&
        this.aulasViviane >= 0 &&
        this.aulasWalter != "" &&
        this.aulasWalter >= 0
      ) {
        this.totalAulas =
          parseInt(this.aulasDaniel) +
          parseInt(this.aulasSevero) +
          parseInt(this.aulasViviane) +
          parseInt(this.aulasWalter);
      } else {
        alert("Preencha todos os valores corretamente, não podem haver valores em branco ou negativos.");
      }
    },
    calcularPorcentagem: function () {
      this.porcentagemAulasDaniel = (
        (this.aulasDaniel / this.totalAulas) *
        100
      ).toFixed(2);
      this.valorDanielReceber = (
        (this.valorParaDistribuir * this.porcentagemAulasDaniel) /
        100
      ).toFixed(2);

      this.porcentagemAulasSevero = (
        (this.aulasSevero / this.totalAulas) *
        100
      ).toFixed(2);
      this.valorSeveroReceber = (
        (this.valorParaDistribuir * this.porcentagemAulasSevero) /
        100
      ).toFixed(2);

      this.porcentagemAulasViviane = (
        (this.aulasViviane / this.totalAulas) *
        100
      ).toFixed(2);
      this.valorVivianeReceber = (
        (this.valorParaDistribuir * this.porcentagemAulasViviane) /
        100
      ).toFixed(2);

      this.porcentagemAulasWalter = (
        (this.aulasWalter / this.totalAulas) *
        100
      ).toFixed(2);
      this.valorWalterReceber = (
        (this.valorParaDistribuir * this.porcentagemAulasWalter) /
        100
      ).toFixed(2);
    },
    clear: function () {
      (this.aulasDaniel = ""),
        (this.aulasSevero = ""),
        (this.aulasViviane = ""),
        (this.aulasWalter = "");
      this.totalAulas = null;
      this.valorParaDistribuir = undefined;
      this.porcentagemAulasDaniel = 0;
      this.porcentagemAulasSevero = 0;
      this.porcentagemAulasViviane = 0;
      this.porcentagemAulasWalter = 0;
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
.div-cfc {
  margin-top: 1.5rem;
}
.label-result {
  font-size: 2rem;
}
.label-classification {
  font-size: 1.5rem;
}
</style>

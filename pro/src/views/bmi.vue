<template>
  <div>
      BMI 계산.
    <br />
    <br />
    <input type="text" placeholder="키 입력(cm)" v-model="height" />
    <br />
    <input type="text" placeholder="몸무게 입력(kg)" v-model="weight" />
    <br />
    <button @click="getBmi(height,weight)">입력 후 클릭</button>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: "",
      weight: ""
    };
  },
  methods:{
    getBmi(){
      var bmih =  this.height/100
      var bmi = this.weight / (bmih*bmih)
      console.log(bmi)
    }
  }
}
</script>

<style>

</style>
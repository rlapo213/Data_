<template>
  <div>
    성적 계산.
    <br />
    <br />
    <input type="text" placeholder="총 인원수 입력" v-model="totalnum" />
    <br />
    <input type="text" placeholder="당신의 등수 입력" v-model="yournum" />
    <br />
    <button @click="getGrade(totalnum,yournum)">입력 후 클릭</button>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalnum: "",
      yournum: ""
    };
  },
  methods: {
    getGrade() {
      var yourgrade = (this.yournum / this.totalnum) * 100;
      if (this.totalnum * this.yournum == 0) {
        console.log("제대로 입력");
      } else {
        if (yourgrade <= 4) {
          console.log("1등급");
        } else if (yourgrade <= 11) {
          console.log("2");
        } else if (yourgrade <= 23) {
          console.log("3");
        } else if (yourgrade <= 40) {
          console.log("4");
        } else if (yourgrade <= 60) {
          console.log("5");
        } else if (yourgrade <= 77) {
          console.log("6");
        } else if (yourgrade <= 89) {
          console.log("7");
        } else if (yourgrade <= 96) {
          console.log("8");
        } else if (yourgrade <= 100) {
          console.log("9");
        }
      }
    }
  }
};
</script>

<style>
</style>
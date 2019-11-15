<template>
  <div>
    등급 계산.
    <br />
    <br />
    <input type="text" placeholder="총 인원수 입력" v-model="totalnum" />
    <br />
    <input type="text" placeholder="당신의 등수 입력" v-model="yournum" />
    <br />
    <button @click="getGrade(totalnum,yournum)">입력 후 클릭</button>
    <hr />
    <div id="a"></div>
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
      var k = document.getElementById("a")
      if (this.totalnum * this.yournum == 0) {
        k.innerHTML = ("제대로 입력해주세요 ^ㅡ^");
      } else {
        if (yourgrade <= 4) {
          k.innerHTML = ("1등급");
        } else if (yourgrade <= 11) {
          k.innerHTML = ("2등급");
        } else if (yourgrade <= 23) {
          k.innerHTML = ("3등급");
        } else if (yourgrade <= 40) {
          k.innerHTML = ("4등급");
        } else if (yourgrade <= 60) {
          k.innerHTML = ("5등급");
        } else if (yourgrade <= 77) {
          k.innerHTML = ("6등급");
        } else if (yourgrade <= 89) {
          k.innerHTML = ("7등급");
        } else if (yourgrade <= 96) {
          k.innerHTML = ("8등급");
        } else if (yourgrade <= 100) {
          k.innerHTML = ("9등급");
        }
      }
    }
  }
};
</script>

<style>
#a{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 6em;
  height: 30vh;
}
</style>
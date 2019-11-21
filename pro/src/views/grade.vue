<template>
  <div>
    등급 계산.
    <br />
    엔터로 넘어가기 ^ㅡ^
    <br />
    <input type="text" placeholder="총 인원수 입력" v-model="totalnum" v-on:keyup.enter="move()"/>
    <br />
    <input type="text" placeholder="당신의 등수 입력" v-model="yournum" v-on:keyup.enter="move()" id="num"/>
    <br />
    <button @click="getGrade(totalnum,yournum)" id="c">입력 후 클릭</button>
    <hr />
    <div id="a"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalnum: "",
      yournum: "",
      k : 0
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
    },
    move(){
      if(this.k==0){
        var z = document.getElementById("num")
        z.focus()
        this.k++
      }
      else if(this.k==1){
        var n = document.getElementById("c");
        n.focus()
        
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
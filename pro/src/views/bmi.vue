<template>
  <div>
    BMI 계산.
    <h4 class="z">
      체질량지수는 근육량, 유전적 원인, 다른 개인적 차이를 반영하지 못하는 단점이 있음에도 불구하고
      조사자들이나 의료인들이 가장 많이 쓰는 방법 중 하나입니다.
    </h4>
    <br />
    <div id="box"> 
    <input type="text" placeholder="키 입력(cm)" v-model="height" class="k"/>
    <br />
    <input type="text" placeholder="몸무게 입력(kg)" v-model="weight" class="k"/>
    <br />
    <button @click="getBmi(height,weight)" class="k">입력 후 클릭</button>
    
    </div>
    <div id="bo" v-if="a==1">
    <div class="b">저체중</div>
    <div class="b">정상</div>
    <div class="b">과체중</div>
    <div class="b">비만1단계</div>
    <div class="b">비만2단계</div>
    <div class="b">비만3단계</div>
    </div>
    <h2>비만도 결과 : </h2>
    <h2>나의 BMI 지수 : </h2>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: "",
      weight: "",
      a : 0
    };
  },
  methods: {
    getBmi() {
      var bmih = this.height / 100;
      var bmi = this.weight / (bmih * bmih);
      console.log(bmi.toFixed(2));
      this.a++
      if(bmi<18.5){
        console.log("저체중")
      }
      else if(bmi<23){
        console.log("정상")
      }
      else if(bmi<25){
        console.log("과체중")
      }
      else if(bmi<27){
        console.log("비만 1단계")
      }
      else if(bmi<30){
        console.log("비만 2단계")
      }
      else{
        console.log("비만 3단계")
      }
    }
  }
};
</script>

<style>
.z{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#box{
  padding: 1%;
  display: flex;
}
#bo{
  display: flex;
  padding: 20px;
  justify-content: center;
}
.b{
  border: 1.5px solid black;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  width: 13vw;
  height: 8vh;
  align-items: center;
}
.k{
  padding: 10px;
  margin: 10px;
}
h2{
  font-size: 2em;
}
</style>
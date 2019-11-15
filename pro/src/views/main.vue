<template>
  <div class="main">
    <div class="l">
    <div class="d" @click="toname()">이름 궁합 보기</div>
    <div class="d" @click="tograde()">등급 보기</div>
    <div class="d" @click="toave()">평균 계산하기</div>
    <div class="d" @click="tobmi()">BMI 보기</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toname() {
      this.$router.push("name");
    },
    tograde() {
      this.$router.push("grade");
    },
    toave() {
      this.$router.push("ave");
    },
    tobmi() {
      this.$router.push("bmi");
    },
  }
};
</script>

<style scoped>
.l {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  
}

.d {
  display: flex;
  width: 50%;
  height: 50%;
  justify-content: center;
  align-items: center;

}
</style>
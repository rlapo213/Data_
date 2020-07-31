<template>
  <div class="home">
    <div class="hi" @click="tomain()">메인으로 가기</div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return{

    }
  },
  methods:{
    tomain(){
      this.$router.push("main")
    }
  }
}
</script>
<style scoped>
.hi{
  display: flex;
  justify-content: center;
  padding: 100px;
  font-size: 40px;
}
</style>

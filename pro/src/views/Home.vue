<template>
  <div class="home">
    <div class="hi">안녕하세요</div>
    <div class="hi" @click="tomain()">^^</div>
    
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

<template>
  <div id="lay">
    평균 계산.
    <br />
    <br />
    <input type="text" placeholder="점수 입력" class="box" v-model="score" v-on:keyup.enter="create()" />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: ""
    };
  },
  methods: {
    create() {
      var newI = document.createElement("input");
      newI.setAttribute("class", "box");
      newI.style.backgroundColor = "blue";
      var k = document.getElementsByTagName("input")[0];
      k.appendChild(newI);
    }
  },
  watch: {}
};
</script>

<style>
html {
  height: 100%;
}
</style>
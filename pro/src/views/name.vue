<template>
  <div id="layout">
    이름 계산.
    <br />
    <br />
    <input type="text" v-model="name" />
    <br />
    <button @click="getName(name)">이름 입력 후 클릭</button>

    <br />
    <br />
    <input type="text" v-model="namee" />
    <br />
    <button @click="getName(namee)">이름 입력 후 클릭</button>
    <br />

    <button @click="getConcord()" v-if="a==0">점수 보기</button>
    <br />
    <hr />

    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      namee: "",
      
      score: "",
      m: 0,
      array: new Array(),
      count: 0,
      a: 0
    };
  },
  methods: {
    getWord(kor) {
      const first = [
        "ㄱ",
        "ㄲ",
        "ㄴ",
        "ㄷ",
        "ㄸ",
        "ㄹ",
        "ㅁ",
        "ㅂ",
        "ㅃ",
        "ㅅ",
        "ㅆ",
        "ㅇ",
        "ㅈ",
        "ㅉ",
        "ㅊ",
        "ㅋ",
        "ㅌ",
        "ㅍ",
        "ㅎ"
      ];
      const second = [
        "ㅏ",
        "ㅐ",
        "ㅑ",
        "ㅒ",
        "ㅓ",
        "ㅔ",
        "ㅕ",
        "ㅖ",
        "ㅗ",
        "ㅘ",
        "ㅙ",
        "ㅚ",
        "ㅛ",
        "ㅜ",
        "ㅝ",
        "ㅞ",
        "ㅟ",
        "ㅠ",
        "ㅡ",
        "ㅢ",
        "ㅣ"
      ];
      const third = [
        "",
        "ㄱ",
        "ㄲ",
        "ㄳ",
        "ㄴ",
        "ㄵ",
        "ㄶ",
        "ㄷ",
        "ㄹ",
        "ㄺ",
        "ㄻ",
        "ㄼ",
        "ㄽ",
        "ㄾ",
        "ㄿ",
        "ㅀ",
        "ㅁ",
        "ㅂ",
        "ㅄ",
        "ㅅ",
        "ㅆ",
        "ㅇ",
        "ㅈ",
        "ㅊ",
        "ㅋ",
        "ㅌ",
        "ㅍ",
        "ㅎ"
      ];

      const ga = 44032;
      let uni = kor.charCodeAt(0);

      uni = uni - ga;
      //종성은 숫자 1마다, 중성은 29마다, 초성은 589마다 값이 변한다
      let fidx = parseInt(uni / 588);
      let sidx = parseInt((uni - fidx * 588) / 28);
      let tidx = parseInt(uni % 28);

      return {
        first: first[fidx],
        second: second[sidx],
        third: third[tidx]
      };
    },

    getStroke(obj) {
      var x = 0;
      var y = 0;
      var z = 0;
      switch (obj.first) {
        case "ㄱ":
          x = 1;
          break;
        case "ㄲ":
          x = 2;
          break;
        case "ㄴ":
          x = 1;
          break;
        case "ㄷ":
          x = 2;
          break;
        case "ㄸ":
          x = 4;
          break;
        case "ㄹ":
          x = 3;
          break;
        case "ㅁ":
          x = 3;
          break;
        case "ㅂ":
          x = 4;
          break;
        case "ㅃ":
          x = 8;
          break;
        case "ㅅ":
          x = 2;
          break;
        case "ㅇ":
          x = 1;
          break;
        case "ㅆ":
          x = 4;
          break;
        case "ㅈ":
          x = 2;
          break;
        case "ㅉ":
          x = 4;
          break;
        case "ㅊ":
          x = 3;
          break;
        case "ㅋ":
          x = 2;
          break;
        case "ㅌ":
          x = 3;
          break;
        case "ㅍ":
          x = 4;
          break;
        case "ㅎ":
          x = 3;
          break;
        default:
          x = 0;
          break;
      }
      switch (obj.second) {
        case "ㅏ":
          y = 2;
          break;
        case "ㅐ":
          y = 3;
          break;
        case "ㅑ":
          y = 3;
          break;
        case "ㅒ":
          y = 4;
          break;
        case "ㅓ":
          y = 2;
          break;
        case "ㅔ":
          y = 3;
          break;
        case "ㅕ":
          y = 3;
          break;
        case "ㅖ":
          y = 4;
          break;
        case "ㅗ":
          y = 2;
          break;
        case "ㅘ":
          y = 3;
          break;
        case "ㅙ":
          y = 4;
          break;
        case "ㅚ":
          y = 3;
          break;
        case "ㅛ":
          y = 3;
          break;
        case "ㅜ":
          y = 2;
          break;
        case "ㅝ":
          y = 4;
          break;
        case "ㅞ":
          y = 5;
          break;
        case "ㅟ":
          y = 3;
          break;
        case "ㅠ":
          y = 3;
          break;
        case "ㅡ":
          y = 1;
          break;
        case "ㅢ":
          y = 2;
          break;
        case "ㅣ":
          y = 1;
          break;

        default:
          y = 0;
          break;
      }
      switch (obj.third) {
        case "":
          z = 0;
          break;
        case "ㄱ":
          z = 1;
          break;
        case "ㄲ":
          z = 2;
          break;
        case "ㄳ":
          z = 3;
          break;
        case "ㄴ":
          z = 1;
          break;
        case "ㄵ":
          z = 3;
          break;
        case "ㄶ":
          z = 4;
          break;
        case "ㄷ":
          z = 2;
          break;
        case "ㄹ":
          z = 3;
          break;
        case "ㄺ":
          z = 4;
          break;
        case "ㄻ":
          z = 6;
          break;
        case "ㄼ":
          z = 7;
          break;
        case "ㄽ":
          z = 5;
          break;
        case "ㄾ":
          z = 6;
          break;
        case "ㄿ":
          z = 7;
          break;
        case "ㅀ":
          z = 6;
          break;
        case "ㅁ":
          z = 3;
          break;
        case "ㅂ":
          z = 4;
          break;
        case "ㅄ":
          z = 6;
          break;
        case "ㅅ":
          z = 2;
          break;
        case "ㅆ":
          z = 4;
          break;
        case "ㅇ":
          z = 1;
          break;
        case "ㅈ":
          z = 2;
          break;
        case "ㅊ":
          z = 3;
          break;
        case "ㅋ":
          z = 2;
          break;
        case "ㅌ":
          z = 3;
          break;
        case "ㅍ":
          z = 4;
          break;
        case "ㅎ":
          z = 3;
          break;

        default:
          z = 0;
          break;
      }

      var stroke = x + y + z;
      this.array[this.m] = stroke;
      this.m++;
    },

    getName(name) {
      name.split("").forEach(str => {
        this.getStroke(this.getWord(str));
      });
    },

    getConcord() {
      this.a++;
      console.log(this.array);

      if (this.array.length == 5 && this.name.length == 2) {
        console.log("5 바뀜");
        var tmp = this.array[0];
        var tmp1 = this.array[1];
        this.array[0] = this.array[2];
        this.array[1] = this.array[3];
        this.array[2] = this.array[4];
        this.array[3] = tmp;
        this.array[4] = tmp1;
      }

      if (this.array.length == 7 && this.name.length == 3) {
        console.log("7 바뀜");
        var tmp = this.array[0];
        var tmp1 = this.array[1];
        var tmp2 = this.array[2];

        this.array[0] = this.array[3];
        this.array[1] = this.array[4];
        this.array[2] = this.array[5];
        this.array[3] = this.array[6];
        this.array[4] = tmp;
        this.array[5] = tmp1;
        this.array[6] = tmp2;
      }

      switch (this.array.length) {
        case 4:
          //confirm
          var front = (this.array[0] + this.array[1] + 2 * this.array[2]) % 10;
          var back = (2 * this.array[1] + this.array[2] + this.array[3]) % 10;
          var outcome = String(front) + back;
          console.log(outcome);
          break;
        case 5:
          //confirm
          var front =
            (this.array[0] +
              3 * this.array[1] +
              3 * this.array[3] +
              this.array[4]) %
            10;
          var back =
            (3 * this.array[1] +
              this.array[2] +
              this.array[3] +
              3 * this.array[4]) %
            10;
          var outcome = String(front) + back;
          console.log(outcome);
          break;
        case 6:
          //confirm
          var front =
            (this.array[0] +
              6 * this.array[1] +
              this.array[2] +
              4 * this.array[3] +
              4 * this.array[4]) %
            10;
          var back =
            (4 * this.array[1] +
              4 * this.array[2] +
              this.array[3] +
              6 * this.array[4] +
              this.array[5]) %
            10;
          var outcome = String(front) + back;
          console.log(outcome);
          break;

        case 7:
          var front =
            (this.array[0] +
              5 * this.array[2] +
              5 * this.array[4] +
              this.array[6]) %
            10;
          var back =
            (this.array[3] +
              5 * this.array[1] +
              5 * this.array[6] +
              this.array[4]) %
            10;
          var outcome = String(front) + back;
          console.log(outcome);
          break;

        case 8:
          //confirm
          var front =
            (this.array[0] +
              15 * this.array[1] +
              15 * this.array[2] +
              this.array[3] +
              6 * this.array[4] +
              6 * this.array[6]) %
            10;
          var back =
            (6 * this.array[1] +
              6 * this.array[3] +
              15 * this.array[5] +
              this.array[4] +
              15 * this.array[6] +
              this.array[7]) %
            10;
          var outcome = String(front) + back;
          console.log(outcome);
          break;

        default:
          break;
      }
    },

    
  },
  watch: {
    //4글자 치면 아예 안쳐지게 하고싶음
    name(next, prev) {
      if (next.length >= 5) {
        prev = "";
        this.name = prev;
      }
    }
  }
};
</script>

<style>
</style>
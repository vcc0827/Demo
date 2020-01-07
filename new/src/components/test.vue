<template>
  <div class="loading">
    <div class="loading-anim">
      <div class="border out"></div>
      <div class="border in"></div>
      <div class="border in2"></div>
      <div class="border mid"></div>
      <div class="titles">123</div>
    </div>
    <div class="loading-hex">
      <div id="hex" class="hexBox">
        <span class="hex"
          ><span class="hexIn"
            ><img src="../assets/logo.png" width="50px" height="auto"/></span
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      nameList: [
        { name: 'jojo' },
        { name: 'ko' },
        { name: 'no' },
        { name: 'dio' },
        { name: 'da!' },
        { name: 'ola' },
        { name: 'ola' },
        { name: 'ola' },
        { name: 'ola' },
        { name: 'ola' },
        { name: 'ola' },
        { name: 'ola' }
      ],
     count:0
    }
  },
  methods: {
    addHex() {
      setInterval(()=>{
        $('.loading-hex').prepend(
          '<div class="hexBox"><span class="hex"><span class="hexIn">' +
            this.nameList[this.count++].name +
            '</span></span></div>'
        )
      },1000)
     
    },
  },
  mounted() {
    this.addHex()
  }
}
</script>
<style>
.loading-hex {
  width: 1000px;
  height: 550px;
  border: 1px red solid;
  /* text-align: center; */
  margin: auto;
  /* display: flex; */
}
.hexBox {
  width: 100px;
  height: 116px;
  margin: 10px 10px 10px 10px;
  display: inline-block;
}
.hex {
  overflow: hidden;
  display: block;
  width: 100px;
  height: 116px;
  transform: rotate(-60deg) skewY(30deg);
}
.hexIn {
  background-color: #ccc;
  display: block;
  width: 100px;
  height: 116px;
  line-height: 116px;
  text-align: center;
  transform: skewY(-30deg) rotate(60deg);
}

button,
input,
select,
textarea {
  /* I want my default button style back */
  font-size: 90%;
}

* {
  box-sizing: border-box;
}

body {
  background: url(https://www.toptal.com/designers/subtlepatterns/patterns/furley_bg_@2X.png);
  background-size: 600px 600px;
}

.container {
  margin: 20px;
  width: calc(100% - 40px);
  height: auto;
}

button {
  position: absolute;
  top: 20px;
  left: 20px;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.2s ease-out;
}

.loading-anim {
  position: relative;
  width: 200px;
  height: 200px;
  margin: auto;
  perspective: 800px;
  transform-style: preserve-3d;
  transform: translateZ(-100px) rotateY(-90deg) rotateX(90deg) rotateZ(90deg)
    scale(0.5);
  opacity: 0;
  transition: all 0.2s ease-out;
}
.loading-anim .circle {
  width: 100%;
  height: 100%;
  animation: spin 5s linear infinite;
}
.loading-anim .border {
  position: absolute;
  border-radius: 50%;
  border: 3px solid #25f2f4;
}
.loading-anim .out {
  top: 18%;
  left: 18%;
  width: 65%;
  height: 65%;
  background-color: rgb(3, 23, 73, 0.5);
  border: 8px solid #25f2f4;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: spin 2s linear infinite;
}
.loading-anim .in {
  top: 24%;
  left: 24%;
  width: 50%;
  height: 50%;
  border: 2px solid #25f2f4;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: spin 2s linear infinite;
}
.loading-anim .in2 {
  top: 24%;
  left: 24%;
  width: 50%;
  height: 50%;
  border: 2px solid #25f2f4;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
  animation: spin 2s linear infinite;
}
.loading-anim .mid {
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  border: 1px solid #25f2f4;
  border-left-color: transparent;
  border-bottom-color: transparent;
  animation: spin 1s linear infinite;
}

.loading .loading-anim {
  transform: translateZ(0) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1);
  opacity: 1;
}

.loading .loading-overlay {
  background: rgba(255, 255, 255, 0.5);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes spin2 {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes jitter {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.7, 0.7);
  }
  50% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(1.3, 1.3);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes fade-in-out {
  0% {
    opacity: 0.8;
  }
  25% {
    opacity: 0.2;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
}
</style>

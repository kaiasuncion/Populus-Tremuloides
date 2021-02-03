<template>
  <div class="banner-container">
    <div class="slider slider-1">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed illo
      repellendus est perferendis voluptatem quibusdam illum rem, officiis
      corporis, facilis consequatur quam a hic inventore ut eaque minima
      cupiditate praesentium!
    </div>
    <div class="slider slider-2">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed illo
      repellendus est perferendis voluptatem quibusdam illum rem, officiis
      corporis, facilis consequatur quam a hic inventore ut eaque minima
      cupiditate praesentium!
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  margin-bottom: 2rem;
  padding: 2rem 0;
  display: flex;
  flex-flow: row nowrap;
  background-color: #000;
  color: #fff;
  overflow: hidden;
  .slider {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow: hidden;
    flex-shrink: 0;
    font-size: 2rem;
  }
  .slider-1 {
    position: relative;
    animation: build-slider-1 50s linear infinite;
  }
  .slider-2 {
    position: relative;
    animation: build-slider-2 50s linear infinite;
  }
}
@keyframes build-slider-1 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes build-slider-2 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>

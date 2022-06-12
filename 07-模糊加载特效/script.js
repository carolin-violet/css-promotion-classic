bg = document.querySelector('.bg')
loadingText = document.querySelector('.loading-text')

let load = 0

let loadInterval = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(loadInterval)
  }

  loadingText.innerText = `${load}%`
  loadingText.style.opacity = 1 - normalize(load, 0, 100, 0, 1)
  bg.style.filter = `blur(${30 - normalize(load, 0, 100, 0, 30)}px)`
}

// 标准化：将val值从[in_min, in_max] 区间映射到 [out_min, out_max] 区间，主要由于高斯模糊最大值为30px
function normalize(val, in_min, in_max, out_min, out_max) {
  return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
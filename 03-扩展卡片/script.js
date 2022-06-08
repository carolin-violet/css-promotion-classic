// 获取所有卡片的dom元素
const panels = document.querySelectorAll('.panel')

//为每一张卡片添加点击事件的监听
panels.forEach(panel => {
  panel.addEventListener('mouseover', () => {
    removeActive()
    panel.classList.add('active')
  })
})

// 清除所有卡片的active属性
function removeActive() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
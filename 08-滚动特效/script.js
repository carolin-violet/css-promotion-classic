const boxList = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBox)

checkBox()

function checkBox() {
  // window.innerHeight为浏览器内容区域高度
  const showTop = window.innerHeight * 4 / 5
  
  boxList.forEach(box => {
    // box.getBoundingClientRect().top为box元素距离顶部的距离
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < showTop) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
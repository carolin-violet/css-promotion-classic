const progress = document.querySelector('#progress')
const circleList = document.querySelectorAll('.circle')
const pre = document.querySelector('#pre')
const next = document.querySelector('#next')


let activeCount = 1

next.addEventListener('click', () => {
  activeCount++

  if (activeCount > circleList.length) {
    activeCount = circleList.length
  }

  update()
})

pre.addEventListener('click', () => {
  activeCount--

  if (activeCount < 1) {
    activeCount = 1
  }

  update()
})


function update () {
  circleList.forEach((circle, index) => {
    if (index < activeCount) {
      circle.classList.add('active')
    } else{
      circle.classList.remove('active')
    }
  })

  progress.style.width = (activeCount - 1) / (circleList.length - 1) * 100 + '%'

  if (activeCount === 1) {
    pre.disabled = true
  } else if (activeCount === circleList.length) {
    next.disabled = true
  } else {
    pre.disabled = false
    next.disabled = false
  }
}
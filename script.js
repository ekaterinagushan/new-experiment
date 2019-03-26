function generateRectangles(quantity) {
  const element = "<div></div>"
  let elements = ""
  let step

  for (step = 0; step < quantity; step++) {
    elements += element
  }

  $("#artwork").append(elements)
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}


function generatePercent(limit) {
  let number = Math.round(Math.random() * limit)
  return number
}

function generateSize() {
  return generatePercent(95)
}

function generateShift(size) {
  let limit = 100 - size
  return generatePercent(limit)
}

function generateColorChannel() {
  return getRandomArbitrary(100, 256)
}

function generateColor() {
  const r = generateColorChannel()
  const g = generateColorChannel()
  const b = generateColorChannel()
}

function changeRectangleCSS(element) {
  const width  = generateSize()
  const height = generateSize()
  const x = generateShift(width) + "%"
  const y = generateShift(height) + "%"
  const translate = [x, y].join()
  const scale = Math.random() * (1.5 - 0.2) + 0.2
  const rotate = 0
  const skewX = 0
  const skewY = 0

  element.css({
    "transform":        "translate(" + translate + ") translateZ(0) scale(" + scale + ")" + "rotate(" + rotate + "deg)" + "skewX(" + skewX + "deg)" + "skewY(" + skewY + "deg)",
    "width":            width + "%",
    "height":           height + "%",
    "background-color": generateColor()
  })
}

function changeRectanglesCSS() {
  $("div").each(function() {
    changeRectangleCSS($(this))
  })
}

function changeRectangleOnTime() {
  setTimeout(function() {
    changeRectanglesCSS()
    changeRectangleOnTime()
  }, 1000)
}

$(function() {
  generateRectangles(10)
  changeRectangleOnTime()
})

$(function() {
  $("div").each(function(index) {
    let width  = 500
    let height = 400
    let x      = 150
    let y      = 150
    $(this).css({
      "top": y + "px",
      "left": x + "px",
      "width":  width + "px",
      "height": height + "px",
    })
    $(this).on("mouseenter", function() {
      let width  = Math.floor(Math.random() * 1000) + 500
      let height = Math.floor(Math.random() * 1000) +500
      let x      = Math.floor(Math.random() * 800) +200
      let y      = Math.floor(Math.random() * 300) +200
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
    })
  })
})

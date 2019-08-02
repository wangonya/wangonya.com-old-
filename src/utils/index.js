import mojs from "@mojs/core"

// group items array based on the
// value returned by calling fn with the current iterated item
export const groupBy = (items, fn) =>
  Object.entries(
    items.reduce(
      (result, item) => ({
        ...result,
        [fn(item)]: [...(result[fn(item)] || []), item],
      }),
      {}
    )
  ).reduce((acc, curr) => {
    return [...acc, { year: curr[0], posts: curr[1] }]
  }, [])

// get the Year of a specified date
export const getDateYear = ({ node }) =>
  new Date(node.frontmatter.date).getFullYear()

export const postClaps = () => {
  const clap = document.getElementById("clap")
  const clapIcon = document.getElementById("clapIcon")
  const clapCount = document.getElementById("clapCount")
  const clapTotalCount = document.getElementById("clapCountTotal")
  const initialNumberOfClaps = 0 //generateRandomNumber(500, 10000)
  const tlDuration = 300
  let numberOfClaps = 0
  let clapHold

  const triangleBurst = new mojs.Burst({
    parent: clap,
    radius: { 50: 95 },
    count: 5,
    angle: 30,
    children: {
      shape: "polygon",
      radius: { 6: 0 },
      scale: 1,
      stroke: "rgba(211,84,0 ,0.5)",
      strokeWidth: 2,
      angle: 210,
      delay: 30,
      speed: 0.2,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
      duration: tlDuration,
    },
  })
  const circleBurst = new mojs.Burst({
    parent: clap,
    radius: { 50: 75 },
    angle: 25,
    duration: tlDuration,
    children: {
      shape: "circle",
      fill: "rgba(149,165,166 ,0.5)",
      delay: 30,
      speed: 0.2,
      radius: { 3: 0 },
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
    },
  })
  const countAnimation = new mojs.Html({
    el: "#clapCount",
    isShowStart: false,
    isShowEnd: true,
    y: { 0: -30 },
    opacity: { 0: 1 },
    duration: tlDuration,
  }).then({
    opacity: { 1: 0 },
    y: -80,
    delay: tlDuration / 2,
  })
  const countTotalAnimation = new mojs.Html({
    el: "#clapCountTotal",
    isShowStart: false,
    isShowEnd: true,
    opacity: { 0: 1 },
    delay: (3 * tlDuration) / 2,
    duration: tlDuration,
    y: { 0: -3 },
  })
  const scaleButton = new mojs.Html({
    el: "#clap",
    duration: tlDuration,
    scale: { 1.3: 1 },
    easing: mojs.easing.out,
  })
  clap.style.transform = "scale(1, 1)" /*Bug1 fix*/

  const animationTimeline = new mojs.Timeline()
  animationTimeline.add([
    triangleBurst,
    circleBurst,
    countAnimation,
    countTotalAnimation,
    scaleButton,
  ])

  clap.addEventListener("click", function() {
    repeatClapping()
  })

  clap.addEventListener("mousedown", function() {
    clapHold = setInterval(function() {
      repeatClapping()
    }, 400)
  })

  clap.addEventListener("mouseup", function() {
    clearInterval(clapHold)
  })

  function repeatClapping() {
    updateNumberOfClaps()
    animationTimeline.replay()
    clapIcon.classList.add("checked")
  }

  function updateNumberOfClaps() {
    numberOfClaps < 10 ? numberOfClaps++ : null
    clapCount.innerHTML = "+" + numberOfClaps
    clapTotalCount.innerHTML = initialNumberOfClaps + numberOfClaps
  }

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}

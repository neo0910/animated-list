const COLORS = [
  "aqua",
  "black",
  "blue",
  "green",
  "grey",
  "orange",
  "pink",
  "red",
  "violet",
  "yellow",
]

export const getRandomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)]

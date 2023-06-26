export const colorsType = {
  normal: "#54543C",
  fighting: "#90241E",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#BF2727",
  water: "#4E6CB4",
  grass: "#3FB59C",
  electric: "#FFCE4B",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

const getColorByType = (type) => colorsType[type];

export default getColorByType;
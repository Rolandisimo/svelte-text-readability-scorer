function interpolate(value, min, max) {
  var delta = max - min;
  var stepValue = delta / 100;
  return min + stepValue * Math.floor(value * 100);
}

/**
 * Create an RGB value located between 3 colors
 *
 * @param {number} value - Value between 0 and 1
 * @param {{ red: number; green: number; blue: number; }[]} colors - Array of rgb colors
 */
export function createRGBValue(value, colors) {
  let red;
  let green;
  let blue;

  const [
    startColor,
    midColor,
    endColor,
  ] = colors;

  if (value > 0.5) {
    red = interpolate((value - 0.5) / 0.5, midColor.red, endColor.red);
  } else {
    red = interpolate(value / 0.5, startColor.red, midColor.red);
  }

  if (value > 0.5) {
    green = interpolate((value - 0.5) / 0.5, midColor.green, endColor.green);
  } else {
    green = interpolate(value / 0.5, startColor.green, midColor.green);
  }

  if (value > 0.5) {
    blue = interpolate((value - 0.5) / 0.5, midColor.blue, endColor.blue);
  } else {
    blue = interpolate(value / 0.5, startColor.blue, midColor.blue);
  }

  return {
    red,
    green,
    blue,
  };
}

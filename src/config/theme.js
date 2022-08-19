const palettes = {
  day: new Map([
    [0, "#fdfaf5"],
    [50, "#fff5df"],
    [100, "#fee5b2"],
    [200, "#fed481"],
    [300, "#fec24d"],
    [400, "#feb422"],
    [500, "#ffa700"],
    [600, "#fc9b00"],
    [700, "#f78b00"],
    [800, "#f17b00"],
    [900, "#e96100"],
  ]),
  night: new Map([
    [50, "#f7f7f7"],
    [100, "#eeeeee"],
    [200, "#e2e2e2"],
    [300, "#d0d0d0"],
    [400, "#ababab"],
    [500, "#8a8a8a"],
    [600, "#636363"],
    [700, "#505050"],
    [800, "#323232"],
    [900, "#121212"],
  ]),
};

export const THEME_MODE = Object.freeze({
  LIGHT: "Light",
  DARK: "Dark",
});

function getRGB(hex = "", opacity = 1) {
  if (hex.length !== 7) return;

  const R = parseInt(hex.slice(1, 3), 16);
  const G = parseInt(hex.slice(3, 5), 16);
  const B = parseInt(hex.slice(5), 16);

  return `rgba(${R}, ${G}, ${B}, ${opacity})`;
}

const themePrototype = {
  getRGB,
  getPrimary(swatch = 50) {
    return this.PRIMARY.swatches.get(swatch);
  },
  getSecondary(swatch = 100) {
    return this.SECONDARY.swatches.get(swatch);
  },
};

export const LIGHT = Object.freeze(
  Object.assign(
    {
      type: THEME_MODE.LIGHT,
      FONT: "Roboto, sans-serif",
      BACKGROUND: palettes.day.get(50),
      ON_BACKGROUND: palettes.night.get(800),

      BOX_SHADOW: getRGB(palettes.night.get(400), 0.7),
      BOX_SHADOW_CUSTOM: palettes.night.get(900),

      TEXT_SHADOW: palettes.night.get(500),

      BACK_DROP: palettes.night.get(900),

      BORDER_COLOR: palettes.night.get(300),

      SCROLLBAR: getRGB(palettes.night.get(300), 0.7),

      PRIMARY: {
        main: palettes.day.get(50),
        variant: palettes.day.get(200),
        on: palettes.night.get(800),
      },

      SECONDARY: {
        main: palettes.night.get(800),
        variant: palettes.night.get(700),
        on: palettes.day.get(100),
      },

      SURFACE: {
        main: palettes.day.get(0),
        active: palettes.day.get(100),
        on: palettes.night.get(800),
      },

      SURFACE2: {
        main: palettes.day.get(300),
        variant: palettes.day.get(50),
        on: palettes.night.get(800),
      },

      TOOLBAR_SURFACE: {
        main: palettes.day.get(100),
        on: palettes.night.get(800),
      },
      INPUT_SURFACE: {
        default: palettes.night.get(400),
        on_default: palettes.day.get(100),
        active: palettes.night.get(700),
      },
    },
    themePrototype
  )
);

export const DARK = Object.freeze(
  Object.assign(
    {
      type: THEME_MODE.DARK,
      FONT: "Roboto, sans-serif",
      BACKGROUND: palettes.night.get(900),
      ON_BACKGROUND: getRGB(palettes.day.get(50), 0.8),

      BOX_SHADOW: getRGB(palettes.night.get(900), 1),
      BOX_SHADOW_CUSTOM: palettes.night.get(900),

      TEXT_SHADOW: getRGB(palettes.night.get(700), 1),

      BACK_DROP: palettes.night.get(900),

      BORDER_COLOR: getRGB(palettes.day.get(50), 0.17),

      SCROLLBAR: palettes.night.get(800),

      PRIMARY: {
        main: palettes.night.get(900),
        variant: palettes.night.get(700),
        on: getRGB(palettes.day.get(50), 0.8),
        swatches: palettes.night,
      },

      SECONDARY: {
        main: palettes.day.get(200),
        variant: palettes.day.get(100),
        on: palettes.day.get(800),
        swatches: palettes.day,
      },

      SURFACE: {
        main: getRGB(palettes.night.get(800), 0.5),
        active: palettes.night.get(800),
        on: palettes.day.get(50),
      },
      SURFACE2: {
        main: palettes.day.get(300),
        variant: palettes.day.get(50),
        on: palettes.night.get(800),
      },
      TOOLBAR_SURFACE: {
        main: palettes.night.get(800),
        on: palettes.day.get(50),
      },
      INPUT_SURFACE: {
        default: palettes.night.get(400),
        on_default: palettes.night.get(700),
        active: palettes.day.get(200),
      },
    },
    themePrototype
  )
);

const colors = [
  "#fffcf7",
  "#f9dbbc",
  "#63452f",
  "#c1e9ff",
  "#bdf2bb",
  "#f2e7fe",
];

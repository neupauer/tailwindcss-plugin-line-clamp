const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addUtilities, theme, variants, e }) {
    const clamps = theme("lineClamp", []);

    const utilities = (clamps || []).map((clamp) => ({
      [`.${e(`line-clamp-${clamp}`)}`]: {
        display: "-webkit-box",
        "-webkit-line-clamp": `${clamp}`,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
      },
    }));

    addUtilities(utilities, variants("lineClamp", []));
  },
  {
    theme: {
      lineClamp: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    variants: {
      lineClamp: ["responsive"],
    },
  }
);

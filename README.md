# Tailwind CSS Plugin – Line Clamp

## Install

1. Configuring your registry settings

Add `.npmrc` to have `@neupauer:registry=https://npm.pkg.github.com`:

```bash
echo '@neupauer:registry=https://npm.pkg.github.com' >> .npmrc
```

2. Install the plugin:

```bash
# Using npm
npm install @neupauer/tailwindcss-plugin-line-clamp --save-dev

# Using Yarn
yarn add @neupauer/tailwindcss-plugin-line-clamp -D
```

3. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [require("@neupauer/tailwindcss-plugin-line-clamp")],
};
```

## Configuration

By default, some line clamps are provided, but you can override or extend them with the `lineClamp` key in your `tailwind.config.js` file.

```js
// tailwind.config.js
module.exports = {
  theme: {
    // default
    lineClamp: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  variants: {
    // default
    lineClamp: ["responsive"],
  },
};
```

## Usage

```html
<p class="line-clamp-2">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus mi.
  Sed pulvinar lobortis scelerisque. Ut a lectus metus. Morbi quam est,
  dignissim nec egestas quis, lacinia sit amet turpis.
</p>

<p class="line-clamp-3">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus mi.
  Sed pulvinar lobortis scelerisque. Ut a lectus metus. Morbi quam est,
  dignissim nec egestas quis, lacinia sit amet turpis.
</p>

<p class="line-clamp-4">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus mi.
  Sed pulvinar lobortis scelerisque. Ut a lectus metus. Morbi quam est,
  dignissim nec egestas quis, lacinia sit amet turpis.
</p>
```

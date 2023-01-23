const svgr = require("@svgr/core");

const svgrConfig = {
  ref: true,
  typescript: true,
  plugins: ["@svgr/plugin-jsx", "@svgr/plugin-svgo"],
  svgo: true,
  svgoConfig: {
    plugins: [
      { name: "removeViewBox", active: false },
      { name: "cleanupIds", active: false },
      { name: "mergePaths", active: true },
      { name: "collapseGroups", active: false },
      { name: "prefixIds", active: true },
    ],
  },
};

const svgRaw = `<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>`;

async function main() {
  const tsxRaw = await svgr.transform(
    svgRaw,
    {
      ...svgrConfig,
    },
    {
      componentName: "TestComponent",
    }
  );

  console.log(tsxRaw);
}

main();

module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "modules": false,
    }],
    "react-app"
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime", {
      "useESModules": false
    }]
  ]
}
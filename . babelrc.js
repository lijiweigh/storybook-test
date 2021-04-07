// umd
// module.exports = {
//   "presets": [
//     ["@babel/preset-env"],
//     "react-app"
//   ],
//   "plugins": [
//     ["@babel/plugin-transform-runtime"]
//   ]
// }

// cjs
module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/typescript",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/proposal-class-properties"
  ]
}



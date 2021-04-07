(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-app"] = factory();
	else
		root["my-app"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"colorRed":"colorRed_h8vgH"};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ Button_Button; });
__webpack_require__.d(__webpack_exports__, "Header", function() { return /* reexport */ Header_Header; });
__webpack_require__.d(__webpack_exports__, "Page", function() { return /* reexport */ Page_Page; });

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/defineProperty"
var defineProperty_ = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(0);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"
var objectWithoutPropertiesLoose_ = __webpack_require__(3);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose_);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose_default()(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/components/Button/button.less
var Button_button = __webpack_require__(5);

// EXTERNAL MODULE: ./src/components/Button/button.module.less
var button_module = __webpack_require__(4);
var button_module_default = /*#__PURE__*/__webpack_require__.n(button_module);

// CONCATENATED MODULE: ./src/components/Button/Button.tsx
/**
 * Primary UI component for user interaction
 */var Button_Button=function Button(_ref){var _ref$primary=_ref.primary,primary=_ref$primary===void 0?false:_ref$primary,_ref$size=_ref.size,size=_ref$size===void 0?'medium':_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label,props=_objectWithoutProperties(_ref,["primary","size","backgroundColor","label"]);var mode=primary?'storybook-button--primary':'storybook-button--secondary';return/*#__PURE__*/Object(jsx_runtime_["jsx"])("button",_objectSpread2(_objectSpread2({type:"button",className:['storybook-button',"storybook-button--".concat(size),mode,button_module_default.a.colorRed].join(' '),style:{backgroundColor:backgroundColor,border:'2px solid red'}},props),{},{children:label}));};
// EXTERNAL MODULE: ./src/components/header.css
var header = __webpack_require__(6);

// CONCATENATED MODULE: ./src/components/Header.tsx
var Header_Header=function Header(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return/*#__PURE__*/Object(jsx_runtime_["jsx"])("header",{children:/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div",{className:"wrapper",children:[/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g",{fill:"none",fillRule:"evenodd",children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),/*#__PURE__*/Object(jsx_runtime_["jsx"])("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),/*#__PURE__*/Object(jsx_runtime_["jsx"])("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1",{children:"Acme"})]}),/*#__PURE__*/Object(jsx_runtime_["jsx"])("div",{children:user?/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_Button,{size:"small",onClick:onLogout,label:"Log out"}):/*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_Button,{size:"small",onClick:onLogin,label:"Log in"}),/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_Button,{primary:true,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})});};
// EXTERNAL MODULE: ./src/components/page.css
var page = __webpack_require__(7);

// CONCATENATED MODULE: ./src/components/Page.tsx
var Page_Page=function Page(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return/*#__PURE__*/Object(jsx_runtime_["jsxs"])("article",{children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_Header,{user:user,onLogin:onLogin,onLogout:onLogout,onCreateAccount:onCreateAccount}),/*#__PURE__*/Object(jsx_runtime_["jsxs"])("section",{children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2",{children:"Pages in Storybook"}),/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p",{children:["We recommend building UIs with a",' ',/*#__PURE__*/Object(jsx_runtime_["jsx"])("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong",{children:"component-driven"})}),' ',"process starting with atomic components and ending with pages."]}),/*#__PURE__*/Object(jsx_runtime_["jsx"])("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul",{children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])("li",{children:"Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories"}),/*#__PURE__*/Object(jsx_runtime_["jsx"])("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p",{children:["Get a guided tutorial on component-driven development at",' ',/*#__PURE__*/Object(jsx_runtime_["jsx"])("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the",' ',/*#__PURE__*/Object(jsx_runtime_["jsx"])("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div",{className:"tip-wrapper",children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the",' ',/*#__PURE__*/Object(jsx_runtime_["jsx"])("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:/*#__PURE__*/Object(jsx_runtime_["jsx"])("g",{fill:"none",fillRule:"evenodd",children:/*#__PURE__*/Object(jsx_runtime_["jsx"])("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]});};
// CONCATENATED MODULE: ./src/components/index.ts


/***/ })
/******/ ]);
});
//# sourceMappingURL=my-app.js.map
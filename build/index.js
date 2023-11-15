/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");





function Edit({
  attributes,
  setAttributes
}) {
  const {
    columns
  } = attributes;
  const onChangeColumns = newColumns => {
    setAttributes({
      columns: newColumns
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `has-${columns}-columns`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Columns', 'team-members'),
    min: 1,
    max: 6,
    onChange: onChangeColumns,
    value: columns
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['block-course/team-member'],
    orientation: "horizontal",
    template: [['block-course/team-member'], ['block-course/team-member'], ['block-course/team-member']]
  }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _team_member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-member */ "./src/team-member/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('block-course/team-members', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    columns
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `has-${columns}-columns`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/team-member/edit.js":
/*!*********************************!*\
  !*** ./src/team-member/edit.js ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.3_webpack@5.89.0/node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\src\\team-member\\edit.js: JSX attributes must only be assigned a non-empty expression. (93:16)\n\n\u001b[0m \u001b[90m 91 |\u001b[39m \t\t\t\t\t\t\t] }\u001b[0m\n\u001b[0m \u001b[90m 92 |\u001b[39m \t\t\t\t\t\t\t\u001b[90m// value={ attributes.size }\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 93 |\u001b[39m \t\t\t\t\t\t\tonChange\u001b[33m=\u001b[39m{  }\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \t\t\t\t\t\t\t         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 94 |\u001b[39m \t\t\t\t\t\t\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 95 |\u001b[39m \t\t\t\t\t) }\u001b[0m\n\u001b[0m \u001b[90m 96 |\u001b[39m \t\t\t\t\t{ url \u001b[33m&&\u001b[39m \u001b[33m!\u001b[39m isBlobURL( url ) \u001b[33m&&\u001b[39m (\u001b[0m\n    at constructor (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:356:19)\n    at JSXParserMixin.raise (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:3223:19)\n    at JSXParserMixin.jsxParseAttributeValue (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6762:16)\n    at JSXParserMixin.jsxParseAttribute (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6813:38)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6827:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6822:17)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6846:33)\n    at JSXParserMixin.jsxParseElement (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6915:17)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6927:19)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10857:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10840:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10816:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10654:61)\n    at JSXParserMixin.parseExprOps (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10659:23)\n    at JSXParserMixin.parseMaybeConditional (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10636:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10597:21)\n    at C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10567:39\n    at JSXParserMixin.allowInAnd (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:12284:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10567:17)\n    at JSXParserMixin.parseParenAndDistinguishExpression (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:11499:28)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:11137:23)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6932:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10857:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10840:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10816:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10654:61)\n    at JSXParserMixin.parseExprOpBaseRightExpr (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10747:34)\n    at JSXParserMixin.parseExprOpRightExpr (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10742:21)\n    at JSXParserMixin.parseExprOp (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10705:27)\n    at JSXParserMixin.parseExprOps (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10663:17)\n    at JSXParserMixin.parseMaybeConditional (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10636:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10597:21)\n    at JSXParserMixin.parseExpressionBase (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10551:23)\n    at C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10547:39\n    at JSXParserMixin.allowInAnd (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:12284:12)\n    at JSXParserMixin.parseExpression (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10547:17)\n    at JSXParserMixin.jsxParseExpressionContainer (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6792:31)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6871:36)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6858:32)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6858:32)\n    at JSXParserMixin.jsxParseElement (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6915:17)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:6927:19)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10857:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10840:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10816:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10654:61)\n    at JSXParserMixin.parseExprOps (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10659:23)\n    at JSXParserMixin.parseMaybeConditional (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10636:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10597:21)\n    at C:\\Users\\Hazim-PC\\Local Sites\\tempheir\\app\\public\\wp-content\\plugins\\team-members-block\\node_modules\\.pnpm\\@babel+parser@7.23.3\\node_modules\\@babel\\parser\\lib\\index.js:10567:39");

/***/ }),

/***/ "./src/team-member/index.js":
/*!**********************************!*\
  !*** ./src/team-member/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/team-member/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/team-member/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('block-course/team-member', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Team Member', 'team-members'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A team member item', 'team-members'),
  icon: 'admin-users',
  parent: ['block-course/team-members'],
  supports: {
    reusable: false,
    html: false
  },
  attributes: {
    name: {
      type: 'string',
      source: 'html',
      selector: 'h3'
    },
    bio: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    id: {
      type: 'number'
    },
    alt: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'alt',
      default: ''
    },
    url: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/team-member/save.js":
/*!*********************************!*\
  !*** ./src/team-member/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function Save({
  attributes
}) {
  const {
    name,
    bio,
    url,
    alt,
    id
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt,
    className: id ? `wp-image-${id}` : null
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h3",
    value: name
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: bio
  }));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkteam_members"] = globalThis["webpackChunkteam_members"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
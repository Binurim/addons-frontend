(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 3532:
/***/ (function(module, exports) {

module.exports = function(hljs){
  return {
    contains: [
      // Attribute
      {
        className: 'attribute',
        begin: /</, end: />/
      },
      // Specific
      {
        begin: /::=/,
        starts: {
          end: /$/,
          contains: [
            {
              begin: /</, end: />/
            },
            // Common
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
          ]
        }
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_bnf.5db56f4d6d298f4294ec.bundle.js.map
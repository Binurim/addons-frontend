(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 3518:
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var NUMBER = {className: 'number', begin: '[\\$%]\\d+'};
  return {
    aliases: ['apacheconf'],
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      {className: 'section', begin: '</?', end: '>'},
      {
        className: 'attribute',
        begin: /\w+/,
        relevance: 0,
        // keywords aren’t needed for highlighting per se, they only boost relevance
        // for a very generally defined mode (starts with a word, ends with line-end
        keywords: {
          nomarkup:
            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' +
            'sethandler errordocument loadmodule options header listen serverroot ' +
            'servername'
        },
        starts: {
          end: /$/,
          relevance: 0,
          keywords: {
            literal: 'on off all'
          },
          contains: [
            {
              className: 'meta',
              begin: '\\s\\[', end: '\\]$'
            },
            {
              className: 'variable',
              begin: '[\\$%]\\{', end: '\\}',
              contains: ['self', NUMBER]
            },
            NUMBER,
            hljs.QUOTE_STRING_MODE
          ]
        }
      }
    ],
    illegal: /\S/
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_apache.5db56f4d6d298f4294ec.bundle.js.map
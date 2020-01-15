(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 3514:
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    contains: [
      // IP
      {
        className: 'number',
        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
      },
      // Other numbers
      {
        className: 'number',
        begin: '\\b\\d+\\b',
        relevance: 0
      },
      // Requests
      {
        className: 'string',
        begin: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)', end: '"',
        keywords: 'GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE',
        illegal: '\\n',
        relevance: 10
      },
      // Dates
      {
        className: 'string',
        begin: /\[/, end: /\]/,
        illegal: '\\n'
      },
      // Strings
      {
        className: 'string',
        begin: '"', end: '"',
        illegal: '\\n'
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_accesslog.5db56f4d6d298f4294ec.bundle.js.map
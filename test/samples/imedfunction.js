// 正确
(function() {
    doSomething();
})();

// 错误
void function() {
    doSomething();
}();

// 错误
(function() {
    doSomething();
}());

// 错误
function() {
    doSomething();
}();
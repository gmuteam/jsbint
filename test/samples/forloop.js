(function() {
    'use strict';

    var i,
        len;

    // 正确
    for ( i = 0, len = 10; i < len; i++ ) {

    }

    for ( i = 0, len = 10 ; i < len ; i++) {

    }

    for ( ; i < len; ) {
        // bla bla bla
    }

})();
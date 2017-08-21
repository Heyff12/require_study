'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            var speed = 50;
            var ul = document.getElementById('note');
            var ul1 = document.getElementById('note1');
            var ul2 = document.getElementById('note2');
            ul2.innerHTML = ul1.innerHTML;
            var end_top = ul1.offsetHeight * 2 - ul.offsetHeight;

            function Marquee_ul() {
                if (ul.scrollTop > end_top) ul.scrollTop -= ul1.offsetHeight;else {
                    ul.scrollTop++;
                }
            }
            var MyMar_ul = setInterval(Marquee_ul, speed);
        });
    });
});
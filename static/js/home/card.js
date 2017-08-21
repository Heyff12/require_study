"use strict";

require(['../require-config'], function () {
    require(["zepto", "iosselect", "area"], function ($, iosselect, area) {
        $(function () {
            var bank_ajax = [{ 'id': '10001', 'value': '工商银行' }, { 'id': '10002', 'value': '农业银行' }, { 'id': '10003', 'value': '建设银行' }, { 'id': '10004', 'value': '中国银行' }, { 'id': '10005', 'value': '交通银行' }, { 'id': '10006', 'value': '浦发银行' }, { 'id': '10007', 'value': '上海银行' }, { 'id': '10008', 'value': '汇丰银行' }, { 'id': '10009', 'value': '光大银行' }, { 'id': '10010', 'value': '招商银行' }, { 'id': '10011', 'value': '中信银行' }, { 'id': '10012', 'value': '民生银行' }, { 'id': '10013', 'value': '平安银行' }, { 'id': '10014', 'value': '华夏银行' }, { 'id': '10015', 'value': '广发银行' }, { 'id': '10016', 'value': '北京银行' }];

            var iosProvinces_ajax = area.iosProvinces;

            var iosCitys_ajax = area.iosCitys;

            var net_ajax = area.iosCitys;

            $('.js_bank').on('click', function () {
                var showDom = document.querySelector('.js_bank');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [bank_ajax], {
                    container: '.ios_select_container',
                    title: '选择所属银行',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function callback(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_bank').val(bank_data.value);
                    }
                });
            });
            var selectContactDom = $('#select_pc');
            var contactProvinceCodeDom = $('.js_province');
            var contactCityCodeDom = $('.js_city');
            selectContactDom.bind('click', function () {
                var sccode = contactCityCodeDom.attr('data-bank');
                var scname = contactCityCodeDom.val();

                var oneLevelId = contactProvinceCodeDom.attr('data-bank');
                var twoLevelId = contactCityCodeDom.attr('data-bank');
                var iosSelect = new iosselect(2, [iosProvinces_ajax, iosCitys_ajax], {
                    title: '请选择开户行所在省市',
                    itemHeight: 35,
                    relation: [1, 0, 0, 0],
                    oneLevelId: oneLevelId,
                    twoLevelId: twoLevelId,
                    callback: function callback(selectOneObj, selectTwoObj) {
                        contactProvinceCodeDom.val(selectOneObj.value);
                        contactProvinceCodeDom.attr('data-bank', selectOneObj.id);
                        contactCityCodeDom.val(selectTwoObj.value);
                        contactCityCodeDom.attr('data-bank', selectTwoObj.id);
                    }
                });
            });

            $('.js_net').on('click', function () {
                var showDom = document.querySelector('.js_net');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [net_ajax], {
                    container: '.ios_select_container_net',
                    title: '选择开户行网点',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function callback(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_net').val(bank_data.value);
                    }
                });
            });
        });
    });
});
(function ($) {
    $.ezdate = function (options) {

        var settings = $.extend({
            persianNumber: false,
            attrName: 'data-datetime',
            dateFormat: 'D/M/YYYY',
            complete: function () {
            }
        }, options);

        return $('[' + settings['attrName'] + ']').each(function () {

            var object = $(this);

            if (object.attr('data-exclude-datetime') == 'true') {
                return true;
            }

            var timeAttr = object.attr(settings['attrName']);
            if (typeof timeAttr !== typeof undefined && timeAttr !== false) {

                var gDate = new Date(object.attr(settings.attrName));
                var day = gDate.getDate();
                var month = gDate.getMonth();
                var year = gDate.getFullYear();
                var hour = gDate.getHours();
                var minute = gDate.getMinutes();
                var converted = toJalaali(year, month + 1, day, false);

                var mm = converted.jm < 10 ? "0" + converted.jm : converted.jm;
                var dd = converted.jd < 10 ? "0" + converted.jd : converted.jd;

                var final_text = settings['dateFormat'];
                final_text = final_text
                    .replace(eval("/YYYY/g"), converted.jy)
                    .replace(eval("/MMM/g"), monthToName(converted.jm))
                    .replace(eval("/MM/g"), mm)
                    .replace(eval("/M/g"), converted.jm)
                    .replace(eval("/DD/g"), dd)
                    .replace(eval("/D/g"), converted.jd);

                if (settings['persianNumber']) {
                    var persian = Array('۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹');
                    for (i = 0; i < 10; i++) {
                        final_text = final_text.replace(eval("/" + i + "/g"), persian[i]);
                    }
                }
                object.text(final_text);
            }

            if ($.isFunction(settings.complete)) {
                settings.complete.call(this);
            }
        });
    };

    function toJalaali(gy, gm, gd, stringDate) {
        if (Object.prototype.toString.call(gy) === '[object Date]') {
            gd = gy.getDate();
            gm = gy.getMonth() + 1;
            gy = gy.getFullYear()
        }
        return d2j(g2d(gy, gm, gd), stringDate)
    }

    function jalCal(jy) {
        var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210
            , 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178
        ]
            , bl = breaks.length
            , gy = jy + 621
            , leapJ = -14
            , jp = breaks[0]
            , jm
            , jump
            , leap
            , leapG
            , march
            , n
            , i;

        if (jy < jp || jy >= breaks[bl - 1])
            throw new Error('error');

        for (i = 1; i < bl; i += 1) {
            jm = breaks[i];
            jump = jm - jp;
            if (jy < jm)
                break;
            leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
            jp = jm
        }
        n = jy - jp;

        leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
        if (mod(jump, 33) === 4 && jump - n === 4)
            leapJ += 1;
        leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
        march = 20 + leapJ - leapG;
        if (jump - n < 6)
            n = n - jump + div(jump + 4, 33) * 33;
        leap = mod(mod(n + 1, 33) - 1, 4);
        if (leap === -1) {
            leap = 4
        }
        return {
            leap: leap
            , gy: gy
            , march: march
        }
    }

    function monthToName($month) {
        switch ($month) {
            case 1:
                return "فروردین";
                break;
            case 2:
                return "اردیبهشت";
                break;
            case 3:
                return "خرداد";
                break;
            case 4:
                return "تیر";
                break;
            case 5:
                return "مرداد";
                break;
            case 6:
                return "شهریور";
                break;
            case 7:
                return "مهر";
                break;
            case 8:
                return "آبان";
                break;
            case 9:
                return "آذر";
                break;
            case 10:
                return "دی";
                break;
            case 11:
                return "بهمن";
                break;
            case 12:
                return "اسفند";
                break;
        }
    }

    function d2j(jdn, stringDate) {

        var gy = d2g(jdn).gy
            , jy = gy - 621
            , r = jalCal(jy)
            , jdn1f = g2d(gy, 3, r.march)
            , jd
            , jm
            , k;

        k = jdn - jdn1f;
        if (k >= 0) {
            if (k <= 185) {
                jm = 1 + div(k, 31);
                jd = mod(k, 31) + 1;
                return {
                    jy: jy
                    , jm: stringDate == true ? monthToName(jm) : jm
                    , jd: jd
                }
            } else {
                k -= 186
            }
        } else {
            jy -= 1;
            k += 179;
            if (r.leap === 1)
                k += 1
        }
        jm = 7 + div(k, 30);
        jd = mod(k, 30) + 1;

        return {
            jy: jy
            , jm: stringDate == true ? monthToName(jm) : jm
            , jd: jd
        }
    }

    function g2d(gy, gm, gd) {
        var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4)
            + div(153 * mod(gm + 9, 12) + 2, 5)
            + gd - 34840408;
        d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
        return d
    }

    function d2g(jdn) {
        var j
            , i
            , gd
            , gm
            , gy;
        j = 4 * jdn + 139361631;
        j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
        i = div(mod(j, 1461), 4) * 5 + 308;
        gd = div(mod(i, 153), 5) + 1;
        gm = mod(div(i, 153), 12) + 1;
        gy = div(j, 1461) - 100100 + div(8 - gm, 6);
        return {
            gy: gy
            , gm: gm
            , gd: gd
        }
    }

    function div(a, b) {
        return ~~(a / b)
    }

    function mod(a, b) {
        return a - ~~(a / b) * b
    }
})(jQuery);
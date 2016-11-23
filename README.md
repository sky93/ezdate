# ezdate: a jQuery plugin
[![NPM](https://img.shields.io/npm/v/ezdate.svg)](https://www.npmjs.com/package/ezdate)
[![Bower](https://img.shields.io/bower/v/ezdate.svg)](http://bower.io/search/?q=ezdate)
[![npm](https://img.shields.io/npm/l/ezdate.svg)](https://github.com/sky93/ezdate/blob/master/License.md)
[![Github All Releases](https://img.shields.io/npm/dt/ezdate.svg)](https://github.com/sky93/ezdate)

The easiest and the best way to convert dates to persian date.

---
ezdate is a **1 KB** (gzipped, minfied) jquery function that converts dates in your website automatically to persian date.

###Example:

```html
<div data-datetime="9/24/2016">9/24/2016</div>


<script src="jquery-3.1.1.min.js"></script>
<script src="ezdate.jquey.min.js"></script>
<script>
    $.ezdate({
        persianNumber: false,
        attrName: 'data-datetime'
    });
</script>
```

That's it! ezdate autmatically finds elements with `data-datetime` attribute and converts content of the attribute to persian date format.

Enjoy using ezdate!

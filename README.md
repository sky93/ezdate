# ezdate: a jQuery plugin
[![NPM](https://img.shields.io/npm/v/ezdate.svg)](https://www.npmjs.com/package/ezdate)
[![Bower](https://img.shields.io/bower/v/ezdate.svg)](http://bower.io/search/?q=ezdate)
[![npm](https://img.shields.io/npm/l/ezdate.svg)](https://github.com/sky93/ezdate/blob/master/License.md)
[![Github All Releases](https://img.shields.io/npm/dt/ezdate.svg)](https://github.com/sky93/ezdate)

The easiest and the best way to convert dates to persian date.

---
ezdate is a **1 KB** (gzipped, minfied) jquery function that converts dates in your website automatically to persian date.

---
## Usage

First, load jQuery and the plugin:

```html
<script src="jquery.min.js" type="text/javascript"></script>
<script src="jquery.ezdate.js" type="text/javascript"></script>
```

Now, let's attach it to your timestamps on DOM ready - put this in the head
section:

```html
<script type="text/javascript">
   jQuery(document).ready(function() {
     $("time.ezdate").ezdate();
   });
</script>
```

This will turn all `<time>` elements with a class of `ezdate` and a
`datetime` attribute:

```html
<time class="ezdate" datetime="10/18/1993">October 18, 1993</time>
```

into something like this:

```html
<time class="ezdate" datetime="10/18/1993">26/7/1372</time>
```

##Options
####`persianNumber` (_default: `false`_)

```javascript
$("time.ezdate").ezdate({
    persianNumber: true
});
````
Turns:
```html
<time class="ezdate" datetime="10/18/1993">October 18, 1993</time>
```
into
```html
<time class="ezdate" datetime="10/18/1993">۲۶/۷/۱۳۷۲</time>
```

---
####`attrName` (_default: `'data-datetime'`_)
Date source attribute. It's recommended to use `data-datetime` for ezdate as it's HTML5 friendly too.

---
####`dateFormat` (_default: `D/M/YYYY`_)
You can use your custom date format to show.

*Some examples:*

| Value         | Meaning      |
|---------------|--------------|
| `D/M/YYYY`    | 26/7/1372    |
| `D/MM/YYYY`   | 26/07/1372   |
| `DD/MMM/YYYY` | 26/مهر/1372  |

---
ezdate also calls `complete` function when finished its job as callback.

Enjoy using ezdate!

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


Enjoy using ezdate!

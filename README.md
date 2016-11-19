# ezdate
The easiest and the best way to convert dates to persian date.

ezdate is a **1 KB** (gzipped, minfied) jquery function that converts dates in your website automatically to persian date.

##Example:

```
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

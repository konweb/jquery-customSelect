jquery-customSelect
===================

## How to use
read the JS and CSS files

```
<link rel="stylesheet" href="./css/select.css">

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="./js/customSelect.js"></script>
```

run the plug -in

```
$(function(){
	$(".js-selectCustom").eq(0).customSelect({});
});
```

## Options
| Name | Type | Desc |
|:-----------|:-----------|:------------:|
| target | selector | This |
| trigger | selector | column |
| valueClass | selector | will |
| listClass | selector | be |
| selectDesc | selector | center |
| opLabel | string |   aligned |
| isActive | string |   aligned |
| display | string |   aligned |
| speed | number |   aligned |

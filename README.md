jquery-customSelect
===================

[example](http://konweb.github.io/jquery.customSelect/)

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
|:-----------|:-----------|:------------|
| target | selector | [.js-selectCustomTarget] ターゲットとなるselect要素 |
| trigger | selector | [.js-selectCustomTigger] リスト表示トリガー |
| valueClass | selector | [.select-value] 値格納要素のclass |
| listClass | selector | [.select-list] リスト格納要素のclass |
| selectDesc | selector | [.select-desc] ラベルを設定したい場合にoption要素に付与するclass |
| opLabel | string | [option-label] optgroup要素が存在する場合のラベルclass名 |
| isActive | string | [select-active] 選択状態のclass |
| display | string | [show] リスト表示方法 show/slide/fade |
| speed | number | [500] オプションdisplayでslide/fadeを指定した場合のアニメーションスピード |

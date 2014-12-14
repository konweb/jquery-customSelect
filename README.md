jquery-customSelect
===================

MIT license. [example](http://konweb.github.io/jquery-customSelect/)

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
	$(".js-selectCustom").customSelect({});
});
```

Simple HTML
```
<div class="select js-selectCustom">
	<select name="select1" class="js-selectCustomTarget">
		<option value="りんご" selected>りんご</option>
		<option value="ばなな">ばなな</option>
		<option value="オレンジ">オレンジ</option>
		<option value="みかん">みかん</option>
		<option value="ピーチ">ピーチ</option>
	</select>
	<i class="fa fa-angle-down js-selectCustomTigger"></i>
</div><!-- select -->
```


Simple HTML
```
<div class="select js-selectCustom">
	<select name="select1" class="js-selectCustomTarget">
		<option value="" selected>りんご</option>
		<option value="りんご">りんご</option>
		<option value="ばなな">ばなな</option>
		<option value="オレンジ">オレンジ</option>
		<option value="みかん">みかん</option>
		<option value="ピーチ">ピーチ</option>
	</select>
	<i class="fa fa-angle-down js-selectCustomTigger"></i>
</div><!-- select -->
```

HTML if you put a descriptive label
```
<div class="select js-selectCustom">
	<select name="select1" class="js-selectCustomTarget">
		<option value="" class="select-list">選択してください</option>
		<option value="りんご">りんご</option>
		<option value="ばなな">ばなな</option>
		<option value="オレンジ">オレンジ</option>
		<option value="みかん">みかん</option>
		<option value="ピーチ">ピーチ</option>
	</select>
	<i class="fa fa-angle-down js-selectCustomTigger"></i>
</div><!-- select -->
```

Also supports optgroup
```
<div class="section">
	<div class="select js-selectCustom">
		<select name="select2" class="js-selectCustomTarget">
			<optgroup label="Fruit">
				<option label="さくらんぼ" value="sakura" selcted="selcted">さくらんぼ</option>
				<option label="ぶどう" value="budou">ぶどう</option>
				<option label="みかん" value="mikan">みかん</option>
			</optgroup>
			<optgroup label="Animal">
				<option value="ウサギ">ウサギ</option>
				<option value="カメ">カメ</option>
				<option value="カバ">カバ</option>
			</optgroup>
		</select>
		<i class="fa fa-angle-down"></i>
	</div><!-- select -->
</div><!-- select -->
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

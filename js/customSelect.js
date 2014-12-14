/*!
* jQuery custom select Library v1.0
* https://github.com/konweb/jquery-customSelect/tree/master
*
* Author Naoto Kondo
* MIT license
*
* Date: 2014-012-14 T4:00Z
*/

(function(){
/**
 * selectをカスタマイズするプラグイン
 * @param op {object} オプション
*/
$.fn.customSelect = function(op){
	/**
	 @property target
	 @property trigger
	 @property valueClass
	 @property listClass
	 @property display
	 @property speed
	*/
	op = $.extend({
		target: ".js-selectCustomTarget",
		trigger: ".js-selectCustomTigger",
		valueClass : ".select-value",
		listClass : ".select-list",
		selectDesc : ".select-desc",
		opLabel : "option-label",
		isActive : "select-active",
		display: "show",
		speed: 500
	},op);

	return this.each(function(){
		var $this = $(this);

		({
			init: function(){
				this.setList();
				$this.on("click", op.valueClass, this.listToggle);
				$this.on("click", op.trigger, this.listToggle);
				$this.on("click", op.listClass + " li", this.listToggle);
				$this.on("click", op.listClass + " li", this.changeList);
			},
			/**
			 * リストと値エリアの生成
			*/
			setList: function(){
				var setVal;
				/*
				 * すでに選択されているかの判定
				 * selectDescが存在する場合、selectDescのテキストを取得
				 * selectDescが存在しない場合、選択されているテキストを取得
				*/
				if($this.find(op.target + " " + op.selectDesc).length > 0){
					setVal = $this.find(op.target + " " + op.selectDesc).text();
					$this.find(op.target + " " + op.selectDesc).remove();
				}else if($this.find(op.target + " option:selected").text()){
					setVal = $this.find(op.target + " option:selected").text();
				}else{
					setVal = $this.find(op.target + " option:eq(0)").text();
				}
				/*
				 * select要素の後に、リストと値エリアの生成
				*/
				$this.find(op.target).after('\
					<div class="' + op.valueClass.replace(".", "") + '">'+setVal+'</div>\
					<div class="' + op.listClass.replace(".","") + '"></div>\
				');
				/*
				 * リストの中身を生成
				 * optgroupがある場合とない場合で処理を切り分け
				*/
				var opGroupNum = $this.find(op.target + " optgroup").length,
						selectIndex = $this.find(op.target).prop('selectedIndex'),
						selected,opNum,label,i,listLabel,count,list = "",attr = "";

				if(opGroupNum > 0){
					$this.find(op.target + " optgroup").each(function(index){
						count = 0;
						opNum = $(this).find("option").length;
						label = $(this).attr("label");
						list = "";
						listLabel = "<p class='" + op.opLabel + " " + attr + "' disabled='disabled'>" + label + "</p>";

						for(i = 0;i < opNum;i++){
							attr = $(this).find("option").eq(count).attr("class") ? $(this).find("option").eq(count).attr("class") : "";
							selected = $(this).find("option").eq(count).attr("selected");
							if(selected == "selected"){
								list += "<li class='" + op.isActive + " " + attr + "'>" + $(this).find("option:eq(" + count + ")").text() + "</li>";
							}else{
								list += "<li class='" + attr + "'>" + $(this).find("option:eq(" + count + ")").text() + "</li>";
							}
							count++;
						}
						$this.find(op.listClass).append(listLabel + "<ul>" + list + "</ul>");
					});
				}else{
					var $target;
					opNum = $this.find(op.target + " option").length;
					for(i = 0;i < opNum;i++){
						$target = $this.find(op.target + " option").eq(i);
						attr = $target.attr("class") ? $target.attr("class") : "";
						if(i == selectIndex){
							list += "<li class='" + op.isActive + " " + attr + "'>"+$target.text()+"</li>";
						}else{
							list += "<li class='"+attr+"'>"+$target.text()+"</li>";
						}
					}
					$this.find(op.listClass).append("<ul>" + list + "</ul>");
				}
				/*
				 * select要素とリストを非表示
				*/
				$this.find(op.target).hide();
				$this.find(op.listClass).hide();
			},
			/**
			 * clickイベント
			 * リストの表示/非表示
			 * @return false
			*/
			listToggle: function(){
				if(op.display == "slide"){
					$this.find(op.listClass).stop().slideToggle(op.speed);
				}else if(op.display == "fade"){
					$this.find(op.listClass).stop().fadeToggle(op.speed);
				}else{
					$this.find(op.listClass).toggle();
				}
				return false;
			},
			/**
			 * clickイベント
			 * 値とclassの切り替え
			 * @return false
			*/
			changeList: function(e){
				var index = $this.find(op.listClass + " li").index(e.target);
				$this.find(op.listClass + " li").removeClass(op.isActive);
				$(e.target).addClass(op.isActive);
				$this.find(op.target + " option").prop("selected", false);
				$this.find(op.target + " option:eq("+index+")").prop("selected", true);
				$this.find(op.valueClass).text($(e.target).text());
				return false;
			}
		}).init();
	});
}
})();
function LoadingBox(selector) {
	this.selector = selector;

	this.show = function (){
	    $(this.selector).show();	
	}

	this.hide = function (){
		$(this.selector).hide();
	}

}
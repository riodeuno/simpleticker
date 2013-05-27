$.fn.tick = function(options){
	var list = this;
	var settings = $.extend({
		element: $('.ticker'),
		fadein : 1000,
		fadeout : 1000,
		stay : 2000,
	}, options);
	(function call_ticker(){
		$(list).each(function(){
			ticker(this, settings.element, settings.fadein, settings.fadeout, settings.stay);
		});
		var interval = ($(list).length)*(settings.fadein + settings.fadeout + settings.stay);
		setTimeout(call_ticker, interval);
	})();
};

function ticker(el, ticker_el, fadein, fadeout, stay){
	setTimeout(function(){
		$(ticker_el).fadeOut(fadeout, function(){
			$(ticker_el).html($(el).html());
		});
		$(ticker_el).fadeIn(fadein).delay(stay);
	}, (stay + fadein + fadeout));
}

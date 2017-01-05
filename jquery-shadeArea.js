(function($) {
	$.fn.shadeArea = function(options) { 
		return this.each(function() {
		
			// Set some defaults up...
			var settings = {
				opacity: 0.7,
				color: "black"
			}
			
			// Merge user specified options into the settings
			$.extend(settings, options);
		
			// Grab the element we want to shade the background for
			var thingToShade = $(this);
			
			// Create a new div and apply it before the original content
			var shader = $("<div></div>").css({
				"width": thingToShade.width(),
				"height": thingToShade.height(),
				"backgroundColor": settings.color,
				"opacity": settings.opacity
			});
			
			$(this).before(shader);
			
			// Move original content up
			var newTop = 0 - thingToShade.height();
			
			$(this).css({
				"position": "relative",
				"top": newTop
			});
		}); 
	};
})(jQuery);
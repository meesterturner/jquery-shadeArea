(function($) {
	$.fn.shadeArea = function(options) { 
		return this.each(function() {
		
			// Set some defaults up...
			var settings = {
				opacity: 0.7,
				color: "black",
				id: null
			}
			
			// Merge user specified options into the settings
			$.extend(settings, options);
		
			// Grab the element we want to shade the background for
			// and some other details related to it...
			var thingToShade = $(this);
			var origZ = thingToShade.zIndex;
			if(origZ == null) {
				origZ = 1;
			}
			
			var origTop  = thingToShade.offset().top;
			var origLeft = thingToShade.offset().left;
			
			// Generate a new ID, hopefully unique
			var newId = settings.id;
			var idPrefix = "shadeArea_";
			
			if(newId == null  || newId == "") {
				if(thingToShade.id == null || thingToShade.id == "") {
					newId = idPrefix + origTop.toString() + origLeft.toString() + origZ.toString();
				} else {
					newId = idPrefix + thingToShade.id;
				} 
			}

			// Create a new div and apply it before the original content
			var newDiv = "<div id=\"" + newId + "\"></div>";
			
			var shader = $(newDiv).css({
				"position": "absolute",
				"width": thingToShade.width(),
				"height": thingToShade.height(),
				"borderTopWidth": thingToShade.css("borderTopWidth"),
				"borderLeftWidth": thingToShade.css("borderLeftWidth"),
				"borderBottomWidth": thingToShade.css("borderBottomWidth"),
				"borderRightWidth": thingToShade.css("borderRightWidth"),
				"borderStyle": "solid",
				"top": origTop,
				"left": origLeft,
				"zIndex": origZ,
				"backgroundColor": settings.color,
				"opacity": settings.opacity
			});
			
			if(thingToShade.is(":visible") === false) {
				shader.css("display", "none");
			}
			
			$("body").append(shader);
			
			thingToShade.css({
				"position": "absolute",
				"width": thingToShade.width(),
				"height": thingToShade.height(),
				"top": origTop,
				"left": origLeft,
				"zIndex": origZ + 1
			});
		}); 
	};
})(jQuery);
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
			
			// Use the ID given in the options, otherwise
			// generate a new ID, hopefully unique. If the
			// element we're shading has an ID (e.g. "origElement")
			// the shader will have a prefix added so the shader
			// would be "shadeArea_origElement"
			var newId = settings.id;
			var idPrefix = "shadeArea_";
			var thisId = thingToShade.attr("id");
			
			if(newId == null  || newId == "") {
				if(thisId == null || thisId == undefined || thisId == "") {
					newId = idPrefix + origTop.toString() + origLeft.toString() + origZ.toString();
				} else {
					newId = idPrefix + thisId;
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
				"borderStyle": thingToShade.css("borderStyle"),
				"borderRadius": thingToShade.css("borderRadius"),
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
			
			// In CSS, move the original item to the same position
			// but using absolute positioning so that it appears
			// above the shader
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
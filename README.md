# jquery-shadeArea

This is a small and simple jQuery plugin I wrote just so I could darken an area of the browser window behind the selected elements, usually DIVs but can probably be used with other elements. 

## Usage
```javascript
$(selector).shadeArea({
	color: black,
	opacity: 0.7
	id: "idOfShadeDiv"
});
```

### Parameters
`selector` is your jQuery selector.

`color` parameter specifies the color for the shader and can be any valid color used in CSS. Default is "black".
`opacity` parameter specifies how dark the shader would be. Should be a decimal between 0.0 (not visible) and 1.0 (solid color). Default is 0.7
`id` parameter specifies the id for the newly created shader div. If omitted, an id of "shader_", suffixed by a number, is generated
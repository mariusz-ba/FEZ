// Returns all elements that are under object on y axis
// @param axis(0 - x, other - z) specifies from which axis camera is looking at object (default is x)

// Po polacku cebulacku
// Funkcja zwraca wszystkie meshe(które z założenia są BoxGeometry), które znajdują się pod podanym @object(niżej w osi y)
// w zależności od punktu patrzenia, ustalony w @axis
function GetElementsUnder(scene, object, axis)
{
	var ElementsUnder = [];

	var object_data = {
		x: object.position.x,
		y: object.position.y,
		z: object.position.z,
		w: object.children[0].geometry.parameters.width,
		h: object.children[0].geometry.parameters.depth
	};

	// Get all elements from scene
	for(var i = 0; i < scene.children.length; ++i)
	{
		var element = scene.children[i]; // element musi być obiektem3d
		var element_data = {
				x: element.position.x,
				y: element.position.y,
				z: element.position.z,
				w: element.children[0].geometry.parameters.width,
				h: element.children[0].geometry.parameters.depth
			};

		if(element_data.y >= object_data.y) // Element is not under @object - skip this iteration
			continue;

		if(axis == 0) // x
		{
			if((object_data.x > element_data.x - (element_data.w / 2) - (object_data.w / 2)) && (object_data.x < element_data.x + (element_data.w / 2) + (object_data.w / 2)))
			{
				ElementsUnder.push(element);
			}
		}
		else // z
		{
			if((object_data.z > element_data.z - (element_data.w / 2) - (object_data.w / 2)) && (object_data.z < element_data.z + (element_data.w / 2) + (object_data.w / 2)))
			{
				ElementsUnder.push(element);
			}
		}
	}

	return ElementsUnder;
}
function filterCards() {
	var genderValue = document.filterForm.gender.value;

	if (genderValue === "male") {
		AddClassInContainer("female", ' hidden');
		RemoveHiddenInContainer("male");
		
	} else if (genderValue === "female") {
		AddClassInContainer("male", ' hidden');
		RemoveHiddenInContainer("female");
		
	} else {
		RemoveHiddenInContainer("male");
		RemoveHiddenInContainer("female");
	}
}

function AddClassInContainer(matchClass, content) {
	var elems = document.getElementsByTagName('*'), i;
	for (i in elems) {
		if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
			elems[i].className += content;
		}
	}
}

function RemoveHiddenInContainer(matchClass) {
	var elems = document.getElementsByTagName('*'), i;
	for (i in elems) {
		if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
			elems[i].className = elems[i].className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
		}
	}
}
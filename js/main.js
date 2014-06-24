function filterCards() {
	var genderValue = document.filterForm.gender.value;
	var concealedValue = document.filterForm.concealed.value;

	RemoveHiddenInContainer("male");
	RemoveHiddenInContainer("female");
	RemoveHiddenInContainer("open");
	RemoveHiddenInContainer("concealed");

	if (genderValue === "male") {
		AddClassInContainer("female", ' hidden');
	}
	if (genderValue === "female") {
		AddClassInContainer("male", ' hidden');
	}
	if (concealedValue === "open") {
		AddClassInContainer("concealed", ' hidden');
	}
	if (concealedValue === "concealed") {
		AddClassInContainer("open", ' hidden');
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
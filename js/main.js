function filterCards() {

	var maleValue = document.getElementById('maleCheckBox').checked;
	var femaleValue = document.getElementById('femaleCheckBox').checked;
	var openValue = document.getElementById('openCheckBox').checked;
	var concealedValue = document.getElementById('concealedCheckBox').checked;

	RemoveHiddenInContainer("male");
	RemoveHiddenInContainer("female");
	RemoveHiddenInContainer("open");
	RemoveHiddenInContainer("concealed");

	if (femaleValue === false) {
		AddClassInContainer("female", ' hidden');
	}
	if (maleValue === false) {
		AddClassInContainer("male", ' hidden');
	}
	if (concealedValue === false) {
		AddClassInContainer("concealed", ' hidden');
	}
	if (openValue === false) {
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
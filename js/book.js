function toggleOptions() {
	const packageOptions = document.getElementById('package-options');
	const destinationOptions = document.getElementById('destination-options');
	const selectedValue = document.getElementById('packages').value;

	if (selectedValue === 'packages') {
		packageOptions.style.display = 'block';
		destinationOptions.style.display = 'none';
	} else if (selectedValue === 'destinations') {
		packageOptions.style.display = 'none';
		destinationOptions.style.display = 'block';
	} else {
		packageOptions.style.display = 'none';
		destinationOptions.style.display = 'none';
	}
}

function showPopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
}

function hidePopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
}

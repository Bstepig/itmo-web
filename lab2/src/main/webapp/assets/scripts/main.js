'use strict';

const submitEl = document.getElementById('submit');
const coordinateXInputEl = document.getElementById('coordinateX');
const coordinateYInputEl = document.getElementById('coordinateY');
const radiusInputEl = document.getElementById('radius');

const coordinateXCheckboxEls = [];
const coordinateXCheckboxesContainerEl = document.getElementById('x-checkboxes');

const coordinateXErrorEl = document.getElementById('coordinateXError');
const coordinateYErrorEl = document.getElementById('coordinateYError');
const radiusErrorEl = document.getElementById('radiusError');

const coordinateXOptions = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const radiusOptions = [1, 2, 3, 4, 5];

const errors = {
	coordinateX: false,
	coordinateY: true,
	radius: false
}

let isError = false;

function radiusValueChanged(value) {
	validateRadius(value);

	if (RADIUS) {
        radiusInputEl.value = RADIUS.toFixed(2);
	}
}

function coordinateXValueChange(value, checked) {
    if (checked) {
        validateCoordinateX(value);
    } else {
        validateCoordinateX(null);
    }

    coordinateXCheckboxEls.forEach(optionEl => {
        if (optionEl.value !== value) {
            optionEl.checked = false;
        }
    })
}

//coordinateXInputEl.onchange = (event) => validateCoordinateX(event.target.value);
coordinateYInputEl.onkeydown = (event) => validateCoordinateY(event.target.value);
coordinateYInputEl.onchange = (event) => validateCoordinateY(event.target.value);
coordinateYInputEl.oninput = (event) => validateCoordinateY(event.target.value);
radiusInputEl.onchange = (event) => validateRadius(event.target.value);
radiusInputEl.oninput = (event) => validateRadius(event.target.value);

function hasOnlyDigits(value) {
	return value.match(/^([0-9\-]*|[0-9\-]*\.[0-9\-]*)$/);
}

function makesSense(value) {
	if (value === '0') return true;
	return value.match(/^\-?([1-9][0-9]*|0)(\.[0-9\-]*)?$/);
}

function validateInt(value, min = null, max = null) {
    if (value === null) return 'Введите не нул';
	if (!hasOnlyDigits(value)) {
		return 'Введите число';
	}
	if (!makesSense(value)) {
		return 'Нет, введите число';
	}
	const floatValue = parseFloat(value);
	if (min !== null) {
		if (floatValue <= min) return `Число должно быть больше, чем ${min}`
	}
	if (max !== null) {
		if (floatValue >= max) return `Число должно быть меньше, чем ${max}`
	}
	return null;
}

let crx = null;
let cry = null;

function initCoordinateXOptions() {
	coordinateXOptions.forEach(option => {
		const labelEl = document.createElement("label");
		const optionEl = document.createElement("input");
		const spanEl = document.createElement("span");
		optionEl.type = 'checkbox';
		optionEl.value = option;
		optionEl.name = 'coordinateX';
		optionEl.onclick = (event) => {
		    coordinateXValueChange(event.target.value, event.target.checked);
		}
		spanEl.innerText = option;
		coordinateXCheckboxesContainerEl.appendChild(labelEl);
		labelEl.appendChild(optionEl);
		labelEl.appendChild(spanEl);
		coordinateXCheckboxEls.push(optionEl);
		// optionEl.addEventListener('change', (event) => radiusValueChanged(event.target.value))
		console.log(optionEl.checked, optionEl.value, optionEl);
	})

}

function initRadiusOptions() {
	radiusOptions.forEach(option => {
		const optionEl = document.createElement("option");
		optionEl.innerText = option;
		optionEl.value = option;
		radiusInputEl.appendChild(optionEl);
	})
	const pickId = radiusOptions.length % 2 ? (radiusOptions.length - 1) / 2 : radiusOptions.length / 2;
	radiusInputEl.value = radiusOptions[pickId];
}

function validateCoordinateX(value) {
	console.log(`CoordinateX: ${value}`);
    coordinateXErrorEl.innerText = validateInt(value);
	errors.coordinateX = !!coordinateXErrorEl.innerText;
	checkIsError();

	crx = value;

	if (RADIUS && !errors.coordinateX) {
	    currentX = value;
	} else {
	    currentX = null;
	}
	draw();
}

function validateCoordinateY(value) {
	console.log(`CoordinateY: ${value}`);
    coordinateYErrorEl.innerText = validateInt(value, -5, 5);
	errors.coordinateY = !!coordinateYErrorEl.innerText;
	checkIsError();

    cry = value;

	if (RADIUS && !errors.coordinateY) {
	    currentY = value;
	} else {
	    currentY = null;
	}
	draw();
}

function validateRadius(value) {
	console.log(`Radius: ${value}`);
	radiusErrorEl.innerText = validateInt(value, 0, 500);
	errors.radius = !!radiusErrorEl.innerText;
	if (errors.radius) {
		RADIUS = null;
		draw();
	} else {
	    RADIUS = parseFloat(value);
	}

	validateCoordinateX(crx);
	validateCoordinateY(cry);

	checkIsError();
	draw();
}

function checkIsError() {
	isError = errors.coordinateX || errors.coordinateY || errors.radius;
	submitEl.disabled = isError;
	console.log(isError);
}

function newShot({x, y}) {
	if (!RADIUS) {
	    alert('Определите радиус сперва.');
	    return;
	}

    currentX = x;
    currentY = y;

	coordinateXInputEl.value = x.toFixed(2);
	validateCoordinateX(x.toFixed(2).toString());
	coordinateYInputEl.value = y.toFixed(2);
	validateCoordinateY(y.toFixed(2).toString());
}

initCoordinateXOptions();
initRadiusOptions();

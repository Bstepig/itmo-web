'use strict'

class Field {
  containerEl;
  errorEl;
  value;
  name;
  min;
  max;
  valid = false;

  constructor(name, min, max, containerId) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.containerEl = document.getElementById(containerId);
    this.errorEl = document.createElement('div');
    this.errorEl.classList.add('error');
    this.containerEl.appendChild(this.errorEl);
  }

  validate(newValue) {
    const error = validateFloat(newValue, this.min, this.max);
    this.errorEl.innerText = error;
    this.value = newValue;
    this.valid = error === null;
  }

  prepareValue(value) {
    return parseFloat(value).toFixed(2);
  }

  onChange(newValue) {
    this.validate(newValue);
    const floatValue = parseFloat(newValue);
    if (!isNaN(floatValue)) {
      this.value = this.prepareValue(this.value);
    }
    draw();
    this.changed();
  }

  changed = () => {};
}

class TextField extends Field {
  inputEl;

  constructor(name, min, max, inputId, containerId) {
    super(name, min, max, containerId);
    this.inputEl = document.getElementById(inputId);
    this.inputEl.name = name;
    this.inputEl.onkeydown = (event) => this.onChange(event.target.value);
    this.inputEl.onchange = (event) => this.onChange(event.target.value);
    this.inputEl.oninput = (event) => this.onChange(event.target.value);
    setTimeout(() =>
        { this.onChange(this.inputEl.value); }, 100
    );
  }

  prepareValue(newValue) {
    if (this.min !== null) {
        newValue = Math.max(this.min, newValue);
    }
    if (this.max !== null) {
        newValue = Math.min(this.max, newValue);
    }
    return super.prepareValue(newValue);
  }

  onChange(newValue) {
    super.onChange(newValue);
    this.inputEl.value = this.value;
  }
  
}

class SliderField extends Field {
  sliderEl;

  constructor(name, min, max, sliderId, containerId) {
    super(name, min, max, containerId);
    this.sliderEl = document.getElementById(sliderId);
    this.sliderEl.name = name;
    this.sliderEl.onkeydown = (event) => this.onChange(event.target.value);
    this.sliderEl.onchange = (event) => this.onChange(event.target.value);
    this.sliderEl.oninput = (event) => this.onChange(event.target.value);
    setTimeout(() =>
        { this.onChange(this.sliderEl.value); }, 100
    );
  }

  onChange(newValue) {
    super.onChange(newValue);
    this.sliderEl.value = this.value;
  }
  
}

class SelectField extends Field {
  selectEl;
  options;
  optionEls;

  constructor(name, min, max, options, selectId, containerId) {
    super(name, min, max, containerId);
    this.options = options;
    this.selectEl = document.getElementById(selectId);
    this.selectEl.name = name;
    this.selectEl.onkeydown = (event) => this.onChange(event.target.value);
    this.selectEl.onchange = (event) => this.onChange(event.target.value);
    this.selectEl.oninput = (event) => this.onChange(event.target.value);
    this.initOptions();
  }

  initOptions() {
    this.optionEls = [];
    this.options.forEach(option => {
      const optionEl = document.createElement("option");
      optionEl.value = option;
      optionEl.innerText = option;
      this.selectEl.appendChild(optionEl);
      this.optionEls.push(optionEl);
    })
  }

//  onClick(target) {
//    const {checked, value} = target;
//    if (checked) {
//      this.onChange(value);
//    } else {
//      this.onChange(null);
//    }
//  }
  onChange(newValue) {
    this.selectEl.value = newValue;
    super.onChange(newValue);
  }
}

class CheckboxField extends Field {
  containerEl;
  options;
  checkboxEls;

  constructor(name, min, max, options, checkboxContainerId, containerId) {
    super(name, min, max, containerId);
    this.options = options;
    this.containerEl = document.getElementById(checkboxContainerId);
    this.containerEl.onkeydown = (event) => this.onChange(event.target.value);
    this.containerEl.onchange = (event) => this.onChange(event.target.value);
    this.initOptions();
  }
  
  initOptions() {
    this.checkboxEls = [];
    this.options.forEach(option => {
      const labelEl = document.createElement("label");
      const optionEl = document.createElement("input");
      const spanEl = document.createElement("span");
      optionEl.type = 'checkbox';
      optionEl.value = option;
      optionEl.name = this.name;
      optionEl.onclick = (event) => {
        this.onClick(event.target);
      }
      spanEl.innerText = option;
      this.containerEl.appendChild(labelEl);
      labelEl.appendChild(optionEl);
      labelEl.appendChild(spanEl);
      this.checkboxEls.push(optionEl);
    })
  }

  onClick(target) {
    const {checked, value} = target;
    if (checked) {
      this.onChange(value);
    } else {
      this.onChange(null);
    }
  }

  prepareValue(newValue) {
    let current = 999999999;
    let min = 999999999;
    let minCheckbox = null;
    this.checkboxEls.forEach(checkboxEl => {
    checkboxEl.checked = false;
      const diff = Math.abs(checkboxEl.value - newValue);
      if (diff < min) {min = diff; current = checkboxEl.value; minCheckbox = checkboxEl; }
    });
    minCheckbox.checked = true;
    return current;
  }

//  onChange(newValue) {
//    super.onChange(current);
//    let current = 999999999;
//    let min = 999999999;
//    let minCheckbox = null;
//    this.checkboxEls.forEach(checkboxEl => {
//    checkboxEl.checked = false;
//      const diff = Math.abs(checkboxEl.value - newValue);
//      if (diff < min) {min = diff; current = checkboxEl.value; minCheckbox = checkboxEl; }
//    });
//    minCheckbox.checked = true;
//  }

}
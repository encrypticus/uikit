export default class Slider {

  constructor() {
    this.labelSliders = document.querySelectorAll(".slider__range_label");
    this.progressSliders = document.querySelectorAll(".slider__range_progress")
    this.labels = document.querySelectorAll(".slider__label");
    this.progresses = document.querySelectorAll(".slider__progress");
  }

  isSetLabel() {
    return this.labels.length > 0;
  }

  isSetProgress() {
    return this.progresses.length > 0;
  }

  getElementWidth(element) {
    return parseInt(getComputedStyle(element).getPropertyValue('width'));
  }

  getLabelPosition(value, min, max, rangeWidth, labelWidth) {
    return +value * (rangeWidth / max) - labelWidth / 2 + this.scale(+value, min, +max, 10, -10);
  }

  setLabelWidth(sliderValue, currentLabel) {
    if (sliderValue < 1000) {
      this.labels[currentLabel].style.width = "35px";
    }

    if (sliderValue > 999) {
      this.labels[currentLabel].style.width = "50px";
    }

    if (sliderValue > 99999) {
      this.labels[currentLabel].style.width = "60px";
    }
  }

  addLabel() {
    Array.prototype.forEach.call(this.labelSliders, (slider, index) => {
        var rangeWidth = this.getElementWidth(slider);

        this.setLabelWidth(+slider.value, index);

        var labelWidth = this.getElementWidth(this.labels[index]),
            left = this.getLabelPosition(slider.value, slider.min, slider.max, rangeWidth, labelWidth);

        this.labels[index].style.left = `${left}px`;
        this.labels[index].innerHTML = slider.value;
    });
  };

  addLabelListeners() {
    Array.prototype.forEach.call(this.labelSliders, (slider, index) => {
        slider.addEventListener("input", (event) => {
          var rangeWidth = this.getElementWidth(slider);

          this.setLabelWidth(+slider.value, index);

          var labelWidth = this.getElementWidth(this.labels[index]),
              left = this.getLabelPosition(slider.value, slider.min, slider.max, rangeWidth, labelWidth);

          this.labels[index].style.left = `${left}px`;
          this.labels[index].innerHTML = slider.value;
        }, false);

        window.addEventListener("resize", (event) => {
          var rangeWidth = this.getElementWidth(slider);

          this.setLabelWidth(+slider.value, index);

          var labelWidth = this.getElementWidth(this.labels[index]),
              left = this.getLabelPosition(slider.value, slider.min, slider.max, rangeWidth, labelWidth);

          this.labels[index].style.left = `${left}px`;
          this.labels[index].innerHTML = slider.value;
        }, false);
    });
  }

  setLabel() {
    this.addLabel();
    this.addLabelListeners();
  }

  getProgressPosition(value, min, max, rangeWidth) {
    return +value * (rangeWidth / max) + this.scale(+value, min, +max, 10, -10);
  }

  addProgress() {
    Array.prototype.forEach.call(this.progressSliders, (slider, index) => {
        var rangeWidth = this.getElementWidth(slider),
            progressWidth = this.getProgressPosition(slider.value, slider.min, slider.max, rangeWidth);
        this.progresses[index].style.width = `${progressWidth - 8}px`;
    });
  }

  addProgressListeners() {
    Array.prototype.forEach.call(this.progressSliders, (slider, index) => {
        slider.addEventListener("input", (event) => {
          var rangeWidth = this.getElementWidth(slider),
              progressWidth = this.getProgressPosition(slider.value, slider.min, slider.max, rangeWidth);

          this.progresses[index].style.width = `${progressWidth - 8}px`;
        }, false);

        window.addEventListener("resize", (event) => {
          var rangeWidth = this.getElementWidth(slider),
              progressWidth = this.getProgressPosition(slider.value, slider.min, slider.max, rangeWidth);

          this.progresses[index].style.width = `${progressWidth - 8}px`;
        }, false);
    });
  }

  setProgress() {
    this.addProgress();
    this.addProgressListeners();
  }

  scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
}
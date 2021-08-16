const inputs = document.querySelectorAll("input");

function updateInputs() {
  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", updateInputs));
inputs.forEach((input) => input.addEventListener("mousemove", updateInputs));

class BoxShadowGenerator {
  constructor(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    color,
    colorRef,
    opacity,
    opacityRef,
    inset,
    previewBox,
    rule,
    webkitRule,
    mozRule
  ) {
    this.horizontal = horizontal;
    this.horizontalRef = horizontalRef;
    this.vertical = vertical;
    this.verticalRef = verticalRef;
    this.blur = blur;
    this.blurRef = blurRef;
    this.spread = spread;
    this.spreadRef = spreadRef;
    this.color = color;
    this.colorRef = colorRef;
    this.opacity = opacity;
    this.opacityRef = opacityRef;
    this.inset = inset;
    this.previewBox = previewBox;
    this.rule = rule;
    this.webkitRule = webkitRule;
    this.mozRule = mozRule;
  }

  initialize() {
    this.horizontalRef.value = this.horizontal.value;
    this.verticalRef.value = this.vertical.value;
    this.blurRef.value = this.blur.value;
    this.spreadRef.value = this.spread.value;
    this.colorRef.value = this.color.value;
    this.opacityRef.value = this.opacity.value;

    this.applyBoxShadow();
    this.showRule();
  }

  applyBoxShadow() {
    const rgbValue = this.hexToRgb(this.colorRef.value);
    const shadowRule = `${this.horizontal.value}px ${this.vertical.value}px ${
      this.blur.value
    }px ${this.spread.value}px rgba(${rgbValue},${this.opacity.value}) ${
      this.inset.checked ? "inset" : ""
    }`;

    this.previewBox.style.boxShadow = shadowRule;
    this.currentRule = shadowRule;
  }

  showRule() {
    this.rule.innerHTML = this.currentRule;
    this.webkitRule.innerHTML = this.currentRule;
    this.mozRule.innerHTML = this.currentRule;
  }

  updateValues(type, value) {
    switch (type) {
      case "horizontal":
        this.horizontalRef.value = value;
        this.horizontal.value = value;
        break;
      case "vertical":
        this.verticalRef.value = value;
        this.vertical.value = value;
        break;
      case "blur":
        this.blurRef.value = value;
        this.blur.value = value;
        break;
      case "spread":
        this.spreadRef.value = value;
        this.spread.value = value;
        break;
      case "color":
        this.colorRef.value = value;
        this.color.value = value;
        break;
      case "opacity":
        this.opacityRef.value = value;
        this.opacity.value = value;
        break;
      case "inset":
        this.inset.checked = value;
        break;
    }
    this.applyBoxShadow();
    this.showRule();
  }

  hexToRgb(hex) {
    return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${
      ("0x" + hex[5] + hex[6]) | 0
    }`;
  }
}

// Element selection
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");
const color = document.querySelector("#color");
const colorRef = document.querySelector("#color-value");
const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacity-value");
const inset = document.querySelector("#inset");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const boxShadow = new BoxShadowGenerator(
  horizontal,
  horizontalRef,
  vertical,
  verticalRef,
  blur,
  blurRef,
  spread,
  spreadRef,
  color,
  colorRef,
  opacity,
  opacityRef,
  inset,
  previewBox,
  rule,
  webkitRule,
  mozRule
);

boxShadow.initialize();

// Events
horizontal.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("horizontal", value);
});
horizontalRef.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("horizontal", value);
});
vertical.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("vertical", value);
});
verticalRef.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("vertical", value);
});
blur.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("blur", value);
});
blurRef.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("blur", value);
});
spread.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("spread", value);
});
spreadRef.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("spread", value);
});
color.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("color", value);
});
colorRef.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("color", value);
});
opacity.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("opacity", value);
});
opacityRef.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValues("opacity", value);
});
inset.addEventListener("change", () => {
  const value = inset.checked;
  boxShadow.updateValues("inset", value);
});

// Copy to clipboard
const rulesArea = document.querySelector("#rules-area");
const copyInstructions = document.querySelector("#copy-instructions");

rulesArea.addEventListener("click", () => {
  const rules = rulesArea.innerText.replace(/^\s*\n/gm, "");
  navigator.clipboard.writeText(rules).then(() => {
    copyInstructions.innerText = "Regra copiada!";
    setTimeout(() => {
      copyInstructions.innerText =
        "Clique no quadro acima para copiar as regras";
    }, 1000);
  });
});

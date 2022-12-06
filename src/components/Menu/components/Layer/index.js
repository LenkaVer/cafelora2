import "./style.css";

export const Layer = (props) => {
  const element = document.createElement("div");
  element.classList.add("layer");

  //data structure
  //   {
  //     color: '#feeeca',
  //     label: 'mléčná pěna',
  //   }

  const { color, label } = props;

  element.innerHTML = `
    <div class="layer">
        <div class="layer__color" style="background-color: ${color}"></div>
        <div class="layer__label">${label}</div>
    </div>

  `;

  return element;
};

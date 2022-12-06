import "./style.css";

export const Contact = () => {
  const element = document.createElement("section");

  element.innerHTML = `
  <div class="container">
  <h2>Kde nás najdete</h2>
  <div class="contact">
    <div class="contact__address">
      Na Mýtě 240 <br />
      514 03 Byšky nad Jizerou <br />
      Tel: +420 775 334 427
    </div>
    <table class="contact__hours">
      <tr>
        <td>Pondělí</td>
        <td>ZAVŘENO</td>
      </tr>
      <tr>
        <td>Úterý</td>
        <td>11:00 - 22:00</td>
      </tr>
      <tr>
        <td>Středa</td>
        <td>11:00 - 22:00</td>
      </tr>
      <tr>
        <td>Čtvrtek</td>
        <td>11:00 - 22:00</td>
      </tr>
      <tr>
        <td>Sobota</td>
        <td>9:00 - 02:00</td>
      </tr>
      <tr>
        <td>Neděle</td>
        <td>9:00 - 02:00</td>
      </tr>
    </table>
    <img
      class="contact__map"
      src="https://apps.kodim.cz/daweb/cafelora/assets/map.png"
    />
  </div>
</div>
`;

  return element;
};

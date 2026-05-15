document.addEventListener("DOMContentLoaded", () => {

  console.log("JS LOADED");

  const silentEraCard = document.getElementById("silentEraCard");

  console.log("Silent card:", silentEraCard);

  if (!silentEraCard) return;

  silentEraCard.addEventListener("click", () => {

    console.log("CLICKED SILENT ERA");

    const panel = silentEraCard.querySelector(".panel");

    if (!panel) {
      console.log("NO PANEL FOUND");
      return;
    }

    panel.classList.toggle("hidden");

  });

});

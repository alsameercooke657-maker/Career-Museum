window.onload = () => {

  console.log("PAGE FULLY LOADED");

  const silentEraCard = document.getElementById("silentEraCard");

  console.log("Silent card:", silentEraCard);

  if (!silentEraCard) {
    console.log("Silent Era card STILL not found");
    return;
  }

  silentEraCard.addEventListener("click", () => {

    console.log("CLICK WORKS");

    const panel = silentEraCard.querySelector(".panel");

    if (!panel) {
      console.log("NO PANEL FOUND");
      return;
    }

    panel.classList.toggle("hidden");

  });

};

document.addEventListener("DOMContentLoaded", () => {

  console.log("JS IS RUNNING");

  const silentEraCard = document.querySelector("#silentEraCard");

  console.log("Silent card found:", silentEraCard);

  if (!silentEraCard) {
    console.log("ERROR: Silent Era card not found. Check ID.");
    return;
  }

  silentEraCard.addEventListener("click", () => {

    const panel = silentEraCard.querySelector(".panel");

    panel.classList.toggle("hidden");

  });

});

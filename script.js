window.onload = function () {

  const silentEraCard = document.getElementById("silentEraCard");

  if (!silentEraCard) return;

  silentEraCard.addEventListener("click", () => {

    const panel = silentEraCard.querySelector(".panel");

    if (!panel) {
      console.log("Panel not found");
      return;
    }

    console.log("Toggling panel");

    // FORCE visibility instead of relying on class toggle
    if (panel.style.display === "none" || panel.style.display === "") {
      panel.style.display = "flex";
    } else {
      panel.style.display = "none";
    }

  });

};

window.onload = function () {
  console.log("LOADED");

  const el = document.getElementById("silentEraCard");

  console.log("FOUND ELEMENT:", el);

  if (!el) return;

  el.onclick = function () {
    alert("CLICK WORKS");
  };
};

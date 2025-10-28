document.addEventListener("DOMContentLoaded", () => {
  const markers = Array.from(document.querySelectorAll(".map__marker"));
  const locationEl = document.querySelector(".projects__location");
  const descriptionEl = document.querySelector(".projects__description");
  const cta = document.querySelector(".projects__cta");

  if (!markers.length || !locationEl || !descriptionEl || !cta) {
    return;
  }

  const updateHighlight = (marker) => {
    markers.forEach((item) => item.classList.toggle("is-active", item === marker));
    locationEl.textContent = marker.dataset.label || "";
    descriptionEl.textContent = marker.dataset.project || "";
  };

  markers.forEach((marker) => {
    marker.setAttribute("aria-pressed", "false");

    const handleInteraction = () => {
      updateHighlight(marker);
      markers.forEach((item) => item.setAttribute("aria-pressed", item === marker ? "true" : "false"));
    };

    marker.addEventListener("mouseenter", handleInteraction);
    marker.addEventListener("focus", handleInteraction);
    marker.addEventListener("click", handleInteraction);
  });

  cta.addEventListener("click", () => {
    const active = document.querySelector(".map__marker.is-active") || markers[0];
    active.focus();
  });

  updateHighlight(markers[0]);
});

// Enlarge publication videos while keeping playback in sync with the teaser.
(() => {
  const triggers = document.querySelectorAll("[data-video-zoom]");
  if (!triggers.length || !window.HTMLDialogElement || !HTMLDialogElement.prototype.showModal) return;

  const dialog = document.createElement("dialog");
  dialog.className = "publication-video-dialog";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "publication-video-close";
  closeButton.setAttribute("aria-label", "Close video");
  closeButton.autofocus = true;
  closeButton.textContent = "×";

  const player = document.createElement("video");
  player.controls = true;
  player.muted = true;
  player.loop = true;
  player.playsInline = true;
  player.preload = "metadata";

  dialog.append(closeButton, player);
  document.body.appendChild(dialog);
  let activeTrigger = null;
  let activePreview = null;
  let previewWasPlaying = false;
  let playbackReady = false;

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    const resume = playbackReady ? !player.paused && !player.ended : previewWasPlaying;
    if (activePreview) {
      if (playbackReady) activePreview.currentTime = player.currentTime;
      if (resume) activePreview.play().catch(() => {});
    }
    player.pause();
    player.onloadedmetadata = null;
    player.removeAttribute("src");
    player.load();
    document.documentElement.classList.remove("publication-video-open");
    activeTrigger?.focus({ preventScroll: true });
    activeTrigger = null;
    activePreview = null;
  });

  triggers.forEach((trigger) => {
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.addEventListener("click", (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const preview = trigger.querySelector("video");
      if (!preview) return;
      event.preventDefault();
      if (dialog.open || activePreview) return;

      playbackReady = false;
      activeTrigger = trigger;
      activePreview = preview;
      const startTime = preview.currentTime;
      previewWasPlaying = !preview.paused;
      preview.pause();
      player.muted = preview.muted;
      player.playbackRate = preview.playbackRate;
      player.poster = preview.poster;
      dialog.setAttribute("aria-label", trigger.getAttribute("aria-label"));
      player.onloadedmetadata = () => {
        if (!dialog.open || activePreview !== preview) return;
        player.currentTime = startTime;
        playbackReady = true;
        player.play().catch(() => {});
      };
      player.src = preview.currentSrc || preview.src;
      dialog.showModal();
      document.documentElement.classList.add("publication-video-open");
    });
  });
})();

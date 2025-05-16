const boostDisplay = document.getElementById("boost-count");

// Load initial boost count
fetch('/api/boosts')
  .then(res => res.json())
  .then(data => {
    boostDisplay.textContent = data.count;
  });

function share(platform) {
  const url = encodeURIComponent(window.location.href);
  let shareUrl = "";

  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      break;
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=Check%20this%20out!`;
      break;
    case "whatsapp":
      shareUrl = `https://wa.me/?text=${url}`;
      break;
  }

  // Open social share link
  window.open(shareUrl, "_blank");

  // Call custom API
  fetch(`/api/share?type=${platform}`)
    .then(res => res.json())
    .then(data => {
      boostDisplay.textContent = data.count;
    });
}

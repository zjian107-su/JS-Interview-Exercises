let currentContent = "A";

function toggleContent() {
  const contentA = document.getElementById("contentA");
  const contentB = document.getElementById("contentB");

  if (currentContent === "A") {
    contentA.style.display = "none";
    contentB.style.display = "block";
    currentContent = "B";
  } else {
    contentA.style.display = "block";
    contentB.style.display = "none";
    currentContent = "A";
  }
}

function programmaticToggle() {
  toggleContent();
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("favorite");
  const btn = document.getElementById("saveBtn");
  const display = document.getElementById("displayFavorite");
  const flag = document.getElementById("flag");

  // Load from localStorage if exists
  const savedFavorite = localStorage.getItem("kenyaFavorite");
  if (savedFavorite) {
    display.textContent = "Your favorite thing about Kenya: " + savedFavorite;
    flag.classList.add("fade-in");
  }

  btn.addEventListener("click", () => {
    const value = input.value.trim();
    if (value === "") {
      alert("Please enter something!");
      return;
    }

    // Save to localStorage
    localStorage.setItem("kenyaFavorite", value);
    display.textContent = "Your favorite thing about Kenya: " + value;

    // Trigger animation
    flag.classList.remove("fade-in"); // restart animation
    void flag.offsetWidth; // force reflow
    flag.classList.add("fade-in");
  });
});

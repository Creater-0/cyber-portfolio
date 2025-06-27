function toggleSection(id) {
  const el = document.getElementById(id);
  const toggleBtn = el.previousElementSibling.querySelector('.toggle');
  if (el.classList.contains("closed")) {
    el.classList.remove("closed");
    toggleBtn.textContent = "[−]";
  } else {
    el.classList.add("closed");
    toggleBtn.textContent = "[+]";
  }
}

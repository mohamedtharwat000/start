///////////////////////////////////////////////////////////////////////////////
const themeStored = localStorage.getItem("theme");
const themeSwitch = document.getElementById("theme-switcher");
const themeDark = window.matchMedia("(prefers-color-scheme: dark)");
const rootDataset = document.documentElement.dataset;
///////////////////////////////////////////////////////////////////////////////
if (themeStored) {
  rootDataset.theme = themeStored;
} else {
  if (themeDark.matches) {
    rootDataset.theme = "dark";
  } else {
    rootDataset.theme = "light";
  }
}
///////////////////////////////////////////////////////////////////////////////
themeDark.onchange = function () {
  themeDark.matches
    ? (rootDataset.theme = "dark")
    : (rootDataset.theme = "light");
};
///////////////////////////////////////////////////////////////////////////////
themeSwitch.onclick = function () {
  rootDataset.theme === "light"
    ? (rootDataset.theme = "dark")
    : (rootDataset.theme = "light");
  localStorage.setItem("theme", rootDataset.theme);
};
///////////////////////////////////////////////////////////////////////////////

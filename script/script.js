function show(id_show, id_hide) {
  document.getElementById(id_hide).style.display = "none";

  setTimeout(function () {
    document.getElementById(id_hide).style.opacity = 0;
  }, 50);

  document.getElementById(id_show).style.display = "flex";

  setTimeout(function () {
    document.getElementById(id_show).style.opacity = 1;
  }, 50);
}
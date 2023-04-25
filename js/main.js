window.addEventListener("load", function() {
  const menu = document.querySelector(".toggle");
  const menuToggle = document.querySelector(".menu");
  menu && menu.addEventListener("click", handleToggle);
  function handleToggle(e) {
    menuToggle && menuToggle.classList.add("is-active");
  }
  document.addEventListener("click", handleClickOutSide);
  function handleClickOutSide(e) {
    if(e.target.matches(".toggle") || e.target.matches(".menu, .menu *")) {
      return;
    } 
      menuToggle && menuToggle.classList.remove("is-active"); 
  }
});


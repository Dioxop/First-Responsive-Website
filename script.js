"strict";
const sidebarMenu = document.querySelector(".sidebar-menu");

const manageSideMenu = function () {
  const opacityBackground = document.querySelector(".opacity-background");

  const openSideBar = document.querySelector(".open-sidebar");
  const closeSidebar = document.querySelector(".close-sidebar");

  const showSideMenu = function (show) {
    opacityBackground.style.display = show ? "block" : "none";
    sidebarMenu.style.display = show ? "block" : "none";
  }

  openSideBar.addEventListener("click", function () {
    showSideMenu(true);
  });

  closeSidebar.addEventListener("click", function () {
    showSideMenu(false);
  });
}

const changedropdownState = function () {
  const navLinks = document.querySelectorAll(".nav-link");

  for (let i = 0; i < navLinks.length; i++) {
    const dropdownState = navLinks[i].querySelector(".dropdown-state");

    if (!dropdownState) return;

    else if (window.matchMedia("(max-width: 1040px)").matches) {
      navLinks[i].addEventListener("click", () => {
        const isMenuClosed = (dropdownState.getAttribute("src") == "images/icon-arrow-down.svg") ? true : false;
        const dropdown = navLinks[i].parentNode.querySelector(".dropdown");

        dropdown.style.display = (isMenuClosed) ? "block" : "none";
        dropdownState.src = (isMenuClosed) ? "images/icon-arrow-up.svg" : "images/icon-arrow-down.svg";
      });
    }

    else {
      navLinks[i].addEventListener("mouseover", () => {
        dropdownState.src = "images/icon-arrow-up.svg";
      });

      navLinks[i].addEventListener("mouseout", () => {
        dropdownState.src = "images/icon-arrow-down.svg";
      });
    }
  }
}

changedropdownState();
manageSideMenu();

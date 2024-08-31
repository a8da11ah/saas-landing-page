document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHead = e.target.closest(".faq-group-head");

    if (!groupHead) return;

    const group = groupHead.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHead.querySelector("i");

    // TOGGLE ICON

    icon.classList.toggle("fa-add");
    icon.classList.toggle("fa-minus");

    //TOOGLE VISIBLITY

    groupBody.classList.toggle("active");

    // HIDE OTHER GROUP BODIES

    const otherGroup = faqContainer.querySelectorAll(".faq-group");

    otherGroup.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const groupBody = otherGroup.querySelector(".faq-group-body");
        const icon = otherGroup.querySelector(".faq-group-head i");

        groupBody.classList.remove("active");
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-add");
      }
    });
  });
});

// MOBILE MENU

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-btn");
  const mobilMenu = document.querySelector(".mobile-menu");
  hamburgerMenu.addEventListener("click", () =>
    mobilMenu.classList.toggle("active")
  );
});

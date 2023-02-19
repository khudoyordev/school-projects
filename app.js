const iconMoon = document.querySelector("#icon-moon");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const iconBurger = document.querySelector("#icon-burger");
const sideBar = document.querySelector(".sidebar");
const rightside = document.querySelector(".rightside");
const cards = document.querySelector("#cards");
const selected = document.querySelector(".title-card");
const cardColor = document.querySelectorAll(".card");
const linkItems = document.querySelector(".link-items");

iconMoon.addEventListener("click", () => {
  if (header.classList.contains("day")) {
    header.classList.remove("day");
    main.classList.remove("day");
    iconMoon.style.color = "#000";
    iconBurger.style.color = "#000";
  } else {
    iconMoon.style.color = "#fff";
    iconBurger.style.color = "#fff";
    header.classList.add("day");
    main.classList.add("day");
  }
});

iconBurger.addEventListener("click", () => {
  if (sideBar.classList.contains("hide")) {
    sideBar.classList.remove("hide");
    rightside.style.width = "calc(100vw - 350px)";
  } else {
    sideBar.classList.add("hide");
    rightside.style.width = "100vw";
  }
});

const keyUp = (e) => {
  if (e.key == "Escape") {
    sideBar.classList.add("hide");
    rightside.style.width = "100vw";
  }
};

for (const card of cards.children) {
  card.children[0].onclick = () => {
    selected.innerHTML = card.children[0].children[0].innerHTML;
  };
}

if (cardColor.length) {
  cardColor.forEach((link) => {
    link.addEventListener("click", (e) => {
      cardColor.forEach((link) => {
        link.classList.remove("active");
      });
      e.preventDefault();
      link.classList.add("active");
    });
  });
}

const sideLinks = [
  {
    sideTitle: "O'qituvchilar",
    sideLink: "./blogs/teacher/teacher.html",
  },

  {
    sideTitle: "O'quvchilar",
    sideLink: "./blogs/pupil/pupil.html",
  },
  {
    sideTitle: "Xonalar",
    sideLink: "./blogs/rooms/room.html",
  },
  {
    sideTitle: "Sinflar",
    sideLink: "./blogs/classes/class.html",
  },
  {
    sideTitle: "Fanlar",
    sideLink: "./blogs/subjects/subject.html",
  },
];

sideLinks.map((e) => {
  const link = document.createElement("a");
  link.className = "link-item";
  link.innerHTML = e.sideTitle;
  link.href = e.sideLink;
  linkItems.appendChild(link);
});

const cardLinks = [
  {
    sideTitle: "O'qituvchilar",
    sideLink: "./blogs/teacher/teacher.html",
  },

  {
    sideTitle: "O'quvchilar",
    sideLink: "./blogs/pupil/pupil.html",
  },
  {
    sideTitle: "Xonalar",
    sideLink: "./blogs/rooms/room.html",
  },
  {
    sideTitle: "Sinflar",
    sideLink: "./blogs/classes/class.html",
  },
  {
    sideTitle: "Fanlar",
    sideLink: "./blogs/subjects/subject.html",
  },
];

const setCards = () => {
  cards.innerHTML = "";

  cardLinks.map((e) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    const cardLink = document.createElement("a");
    cardLink.innerHTML = e.sideTitle;
    cardLink.href = e.sideLink;
    cardLink.className = "card shadow rounded p-5 card-title";

    col.appendChild(cardLink);
    cards.appendChild(col);
  });
};

const loaded = () => setCards();

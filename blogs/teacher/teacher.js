const tableBody = document.querySelector(".table-body");
const searchInput = document.querySelector(".input");
const searchBtn = document.querySelector(".search-btn");

// Xonalar; Xodimlar; Fanlar

const teachersData = [
  {
    names: "Khudoyor",
    surname: "Quronboyev",
    subject: "Programer",
  },

  {
    names: "Abror",
    surname: "Bog'ibekov",
    subject: "Programer",
  },
  {
    names: "Munis",
    surname: "Quronboyev",
    subject: "Programer",
  },
];

const createTable = (filters) => {
  tableBody.innerHTML = "";

  const data = teachersData.filter(
    (e) =>
      e.names.includes(filters?.names || "") ||
      e.surname.includes(filters?.names || "")
  );

  data.forEach((e, i) => {
    let tr = document.createElement("tr");

    tr.className = "table-row";
    tr.innerHTML = `
  <td class="table-head">
 ${i + 1}
</td>
  <td class="table-head">
 ${e.names}
</td>
<td class="table-head">
${e.surname}
</td>
<td class="table-head">
${e.subject}
</td>
<td class="table-head">
<button class="btn-delete">O'chirish</button>
</td>
  `;

    tableBody.appendChild(tr);
  });
};

createTable();

const btn = document.querySelectorAll(".btn-delete");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    btn[i].parentNode.parentNode.parentNode.removeChild(
      btn[i].parentNode.parentNode
    );
  });
}

searchInput.addEventListener("change", (e) => {
  createTable({ names: e.target.value }, { surname: e.target.value });
});

const allDelete = document.querySelector(".all-delete");

allDelete.addEventListener("click", () => {
  tableBody.innerHTML = "";
});

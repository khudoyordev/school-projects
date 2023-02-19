const subjData = [
  {
    title: "Informatika",
  },

  {
    title: "Ona-tili",
  },
  {
    title: "O'qish",
  },
  {
    title: "Ingliz tili",
  },
];

const tBody = document.querySelector(".table-body");
const input = document.querySelector(".input");

const allDelete = document.querySelector(".all-delete");

allDelete.addEventListener("click", () => {
  tBody.innerHTML = "";
});

const createTable = (filters) => {
  tBody.innerHTML = "";

  const datas = subjData.filter((e) => {
    return e.title.includes(filters?.title || "");
  });

  datas.map((e, i) => {
    const tr = document.createElement("tr");
    tr.className = "table-row";
    tr.innerHTML = `
                    <td class="table-data">${i + 1}</td>
                    <td class="table-data">${e.title}</td>
                    <td class="table-data">
                        <button class="btn-delete">O'chirish</button>
                    </td>
  `;
    tBody.appendChild(tr);
  });
};

createTable();

input.addEventListener("change", (e) => {
  createTable({ title: e.target.value });
});

const btn = document.querySelectorAll(".btn-delete");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    btn[i].parentNode.parentNode.parentNode.removeChild(
      btn[i].parentNode.parentNode
    );
  });
}

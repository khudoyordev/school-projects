const roomTable = [
  {
    number: 15,
    data: "Sinfxonalar",
  },
  {
    number: 2,
    data: "O'qituchilar xonalar",
  },
  {
    number: 1,
    data: "Rahbar xonasi",
  },
  {
    number: 1,
    data: "Security room",
  },
];

const TableBody = document.querySelector(".table-body");

const createTable = (filters) => {
  TableBody.innerHTML = "";

  const datas = roomTable.filter((e) => {
    return e.data.includes(filters?.data || "");
  });

  datas.map((e) => {
    const tr = document.createElement("tr");
    tr.className = "table-row";
    tr.innerHTML = `
                    <td class="table-data">${e.number}</td>
                    <td class="table-data">${e.data}</td>
                    <td class="table-data">
                        <button class="btn-delete">O'chirish</button>
                    </td>
  `;
    TableBody.appendChild(tr);
  });
};

createTable();

const input = document.querySelector(".input");

input.addEventListener("change", (e) => {
  createTable({ data: e.target.value });
});

const btn = document.querySelectorAll(".btn-delete");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    btn[i].parentNode.parentNode.parentNode.removeChild(
      btn[i].parentNode.parentNode
    );
  });
}

const allDelete = document.querySelector(".all-delete");

allDelete.addEventListener("click", () => {
  TableBody.innerHTML = "";
});

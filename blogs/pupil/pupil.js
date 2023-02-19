const students = [
  {
    firstName: "Khudoyor",
    lastName: "Quronboyev",
    job: "Programmer",
  },
  {
    firstName: "Abror",
    lastName: "Bog'ibekov",
    job: "Logistik",
  },
  {
    firstName: "Abror",
    lastName: "Bekturdiyev",
    job: "Trader",
  },
];

const tbody = document.querySelector(".tbody");
const input = document.querySelector(".input");

const createTabl = (filters) => {
  tbody.innerHTML = "";

  const data = students.filter(
    (e) =>
      e.firstName.includes(filters?.firstName || "") ||
      e.lastName.includes(filters?.firstName || "")
  );

  data.map((e, i) => {
    let row = document.createElement("tr");
    row.className = "row";
    row.innerHTML += `
    <td class="table-title">${i + 1}</td>
    <td class="table-title">${e.firstName}</td>
    <td class="table-title">${e.lastName}</td>
    <td class="table-title">${e.job}</td>
    <td class="table-title"><button class="btn">Delete</button></td>

    `;
    tbody.appendChild(row);
  });
};
createTabl();

input.addEventListener("change", (e) => {
  return createTabl(
    { firstName: e.target.value },
    { lastName: e.target.value }
  );
});

const btn = document.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    btn[i].parentNode.parentNode.parentNode.removeChild(
      btn[i].parentNode.parentNode
    );
  });
}

const allDelete = document.querySelector(".all-delete");

allDelete.addEventListener("click", () => {
  tbody.innerHTML = "";
});

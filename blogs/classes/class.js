const classData = [
  {
    different: 2,
    class: "1A va 1B",
  },
  {
    different: 2,
    class: "2A va 2B",
  },
  {
    different: 2,
    class: "3A va 3B",
  },
  {
    different: 2,
    class: "4A va 4B",
  },
];

const Tbody = document.querySelector(".tbody");
const input = document.querySelector(".input");

const createTable = (filters) => {
  Tbody.innerHTML = "";
  const data = classData.filter((e) => e.class.includes(filters?.class || ""));

  data.map((obj, i) => {
    const tr = document.createElement("tr");
    tr.className = "table-row";
    tr.innerHTML = `
  
                      <td>
                          ${i + 1}
                      </td>
    
                      <td>
                          ${obj.different}
                      </td>
                      
                      <td>
                          ${obj.class}
                      </td>
                      
                      <td>
                          <button class="btn">Delete</button>
                      </td>
  `;
    Tbody.appendChild(tr);
  });
};

createTable();

input.addEventListener("change", (e) => {
  createTable({ class: e.target.value });
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
  Tbody.innerHTML = "";
});

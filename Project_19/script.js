const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const listEl = document.getElementById("list");
const form = document.getElementById("form");
const desc = document.getElementById("desc");
const amount = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI() {
  listEl.innerHTML = "";
  let income = 0, expense = 0;

  transactions.forEach((t, index) => {
    const li = document.createElement("li");
    li.classList.add(t.amount > 0 ? "income" : "expense");
    li.innerHTML = `
      ${t.desc} <span>₹${t.amount}</span> 
      <span class="delete-btn" onclick="deleteTransaction(${index})">✖</span>
    `;
    listEl.appendChild(li);

    if (t.amount > 0) income += t.amount;
    else expense += Math.abs(t.amount);
  });

  balanceEl.innerText = income - expense;
  incomeEl.innerText = income;
  expenseEl.innerText = expense;
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateUI();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const transaction = { desc: desc.value, amount: +amount.value };
  transactions.push(transaction);
  desc.value = "";
  amount.value = "";
  updateUI();
});

updateUI();

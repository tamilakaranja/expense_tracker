const amount= document.getElementById ("amount");
const addexpensebtn= document.getElementById ("add-expense-btn");
const inputexpense= document.getElementById ("expense-description");
const categoryoptions = document.getElementById("Select-category");
const totalamount= document.getElementById ("total-amount");
const expenselist = document.getElementById("expense-list");

let expenses=[];


function addExpense() {
    console.log ("Button clicked")
   const description = inputexpense.value;
const expenseAmount = Number(amount.value);
const category = categoryoptions.value;
const expense = {
    description: description,
    amount: expenseAmount,
    category: category
   
};
expenses.push(expense);
const li = document.createElement("li");
li.textContent = `${description} - KSh ${expenseAmount} - ${category}`;
expenselist.appendChild(li);
console.log(expenses);
};

addexpensebtn.addEventListener("click",addExpense);


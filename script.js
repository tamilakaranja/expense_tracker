const amount= document.getElementById ("amount");
const addexpensebtn= document.getElementById ("add-expense-btn");
const inputexpense= document.getElementById ("expense-description");
const categoryoptions = document.getElementById("Select-category");
const totalamount= document.getElementById ("total-amount");
const expenselist = document.getElementById("expense-list");
const filterCategory = document.getElementById("filter-category");

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

// total amount 
const total = expenses.reduce((sum,item) => { return sum + item.amount;},0);
totalamount.textContent=total;
const li = document.createElement("li");
const deleteBtn = document.createElement("button");
deleteBtn. textContent = "Delete";
deleteBtn.addEventListener("click",function(){
   const index= expenses.indexOf(expense);
   expenses.splice(index,1);
   console.log (index)
   li.remove();
   const total = expenses.reduce((sum, item) => {
    return sum + item.amount;
}, 0);

totalamount.textContent = total;
});
li.textContent = `${description} - KSh ${expenseAmount} - ${category}`;
li.appendChild (deleteBtn);
expenselist.appendChild(li);
console.log(expenses);
};

addexpensebtn.addEventListener("click",addExpense);

// filter Category

filterCategory.addEventListener("change", function() {

    const selectedCategory = filterCategory.value;

    const filteredExpenses = expenses.filter((expense) => {
        return expense.category === selectedCategory;
    });

    expenselist.innerHTML = "";

    filteredExpenses.forEach((expense) => {
        const li = document.createElement("li");

        li.textContent = `${expense.description} - KSh ${expense.amount} - ${expense.category}`;

        expenselist.appendChild(li);
    });

});

let expenses = [];

function addExpense() {

    let description = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    if (description === "" || amount === "") {
        alert("Please enter description and amount");
        return;
    }

    let expense = {
        description: description,
        amount: Number(amount),
        category: category
    };

    expenses.push(expense);

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

    showExpenses();
}


function showExpenses() {

    let list = document.getElementById("expenseList");
    let filter = document.getElementById("filter").value;

    list.innerHTML = "";

    let total = 0;
    let count = 0;

    expenses.forEach(function(expense) {

        if (filter === "All" || expense.category === filter) {

            let div = document.createElement("div");

            div.className = "expense";

            div.innerHTML = `
                <span>
                    ${expense.description} 
                    <small>(${expense.category})</small>
                </span>

                <b>$${expense.amount.toFixed(2)}</b>
            `;

            list.appendChild(div);

            total += expense.amount;
            count++;
        }
    });

    if (count === 0) {
        list.innerHTML =
            '<p class="empty">📝 Nothing yet. Add your first expense above!</p>';
    }

    document.getElementById("total").innerText = total.toFixed(2);

    document.getElementById("count").innerText =
        count + (count === 1 ? " expense" : " expenses");
}
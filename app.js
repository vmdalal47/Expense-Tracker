const expense_name_element = document.getElementById("expense-name");
const date_element = document.getElementById("date");
const amount_element = document.getElementById("amount");
const submit_button = document.querySelector("input[type='submit']");
const expenses_table = document.getElementById("expenses-table");

const add_expense = function(event) {
    event.preventDefault();

    const expense_name = expense_name_element.value;
    const date = date_element.value;
    const amount = amount_element.value;
    
    let new_row = document.createElement("tr");

    let new_expense_name_cell = document.createElement("td");
    new_expense_name_cell.innerHTML = expense_name;

    let new_date_cell = document.createElement("td");
    new_date_cell.innerHTML = date;

    let new_amount_cell = document.createElement("td");
    new_amount_cell.innerHTML = amount;

    new_row.appendChild(new_expense_name_cell);
    new_row.appendChild(new_date_cell);
    new_row.appendChild(new_amount_cell);

    expenses_table.appendChild(new_row);
}

submit_button.addEventListener("click", add_expense);
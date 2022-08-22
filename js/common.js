function getInputFieldValueByID(inputId) {
    const inputField = document.getElementById(inputId);
    const perPlayerBudgetString = inputField.value;
    const perPlayerBudget = parseInt(perPlayerBudgetString);
    return perPlayerBudget;
}

function getTextValueByID(elementId) {
    const textElementValue = document.getElementById(elementId);
    const totalPlayerExpenseString = textElementValue.innerText;
    const totalPlayerExpense = parseInt(totalPlayerExpenseString);
    return totalPlayerExpense;
}

function setvalueById(elementId, newValue) {
    const totalCost = document.getElementById(elementId);
    totalCost.innerText = newValue;
    return totalCost;
}
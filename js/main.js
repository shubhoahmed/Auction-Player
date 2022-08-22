const playersArray = [];

function displayPlayersName(selectedName) {
    const tableBody = document.getElementById('player-name');

    if (selectedName.length > 5) {
        alert('You cannot select more than 5 player. Please reload and select again less then 5 or equal five player for get total player expense calculation');
        return;
    }

    tableBody.innerHTML = '';

    for (let i = 0; i <= 5; i++) {

        const name = playersArray[i].Name;

        const tr = document.createElement('tr');

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `
        tableBody.appendChild(tr);

    }
}

function addFavouritePlayer(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObject = {
        Name: playerName
    }

    playersArray.push(playerObject);

    displayPlayersName(playersArray);
};

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerValue = getInputFieldValueByID('input-field');

    const totalExpense = perPlayerValue * playersArray.length;

    const totalPlayerExpense = getTextValueByID('player-expense');

    const expenseTotal = setvalueById('player-expense', totalExpense);
    expenseTotal.innerText = totalExpense;


})

document.getElementById('btn-total-calculate').addEventListener('click', function () {

    const managerInputField = getInputFieldValueByID('manager-field');
    const coachInputField = getInputFieldValueByID('coach-field');
    const totalCost = getTextValueByID('total-cost');

    const totalPlayerExpense = getTextValueByID('player-expense');

    const total = managerInputField + coachInputField + totalPlayerExpense;

    const finalTotal = setvalueById('total-cost', total);
    finalTotal.innerText = total;

})
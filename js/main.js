const playersArray = [];

function displayPlayersName(selectedName) {
    const tableBody = document.getElementById('player-name');

    if (selectedName.length > 5) {
        alert('You cannot select more than 5 player. Please reload and select again less then 5 or equal five player for get total player expense calculation');
        return;
    }

    tableBody.innerHTML = '';

    for (let i = 0; i <= 5; i++) {

        const name = playersArray[i].name;

        const tr = document.createElement('tr');

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `
        tableBody.appendChild(tr);

    }
}


function addFavouritePlayer(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerObject = {
        name: playerName,
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

document.getElementById('btn1').addEventListener('click', function () {
    const button1 = document.getElementById('btn1');
    button1.disabled = true;

})
document.getElementById('btn2').addEventListener('click', function () {
    const button2 = document.getElementById('btn2');
    button2.disabled = true;

})
document.getElementById('btn3').addEventListener('click', function () {
    const button3 = document.getElementById('btn3');
    button3.disabled = true;

})

document.getElementById('btn4').addEventListener('click', function () {
    const button4 = document.getElementById('btn4');
    button4.disabled = true;

})
document.getElementById('btn5').addEventListener('click', function () {
    const button5 = document.getElementById('btn5');
    button5.disabled = true;

})
document.getElementById('btn6').addEventListener('click', function () {
    const button6 = document.getElementById('btn6');
    button6.disabled = true;

})
document.getElementById('btn7').addEventListener('click', function () {
    const button7 = document.getElementById('btn7');
    button7.disabled = true;

})
document.getElementById('btn8').addEventListener('click', function () {
    const button8 = document.getElementById('btn8');
    button8.disabled = true;

})
document.getElementById('btn9').addEventListener('click', function () {
    const button9 = document.getElementById('btn9');
    button9.disabled = true;

})

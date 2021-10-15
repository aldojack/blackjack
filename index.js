//Doms
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let dealerEl = document.getElementById("dealer-el");

//Bools
let hasBlackJack = false;
let isBust = false;

//Ints
let playerSum = 0;
let blackJack = 21;
let playerCards = [];
let playerCardCount = playerCards.length;
let dealerCards = [];
let dealerCardCount = dealerCards.length;

//Strings
let message = "";

function getCard(){
    return Math.floor(Math.random() * 10) + 2;
}



function startGame(){
    playerCards.push(getCard());
    playerCards.push(getCard());
    dealerCards.push(getCard());

    playerSum = playerCards.reduce(GetSum);
    sumEl.textContent = `Sum: ${playerSum}`;

    checkCards(playerSum,0);
    ShowCards(playerCards);
    dealerEl.textContent = `Dealer: `
}

function reset(){
    messageEl.textContent = "Want to play a round?";
    sumEl.textContent = `Sum: `;
    cardsEl.textContent = `Cards: `
    playerCards =[];
    playerSum = 0;
    hasBlackJack = false;
    isBust = false;  
}

function hit(){
    playerCards.push(getCard());
    playerSum = playerCards.reduce(GetSum);
    sumEl.textContent = `Sum: ${playerSum}`;
    checkCards(playerSum,0);
    ShowCards(playerCards);
}

function ShowCards(cards){
    cardsEl.textContent = `Cards: `;

    for(let i = 0;i<cards.length;i++)
    {
        cardsEl.textContent += ` ${cards[i]}`;
    }
}

function GetSum(cards, a){

    return cards + a;
}

function checkCards(cardsTotal){
    if(cardsTotal < blackJack){
        message = "Do you want another card? 🙂";
    }
    else if(cardsTotal >blackJack){
        message = "You bust 😭";
        isBust = true;
    }
    else{
        message = "Winner winner chicken dinner 🥳";
        hasBlackJack = true;
    }
    messageEl.textContent = message;
}

































/*
Testing stage



*/
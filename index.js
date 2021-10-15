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
    //Player is dealt 2 cards and displayed on UI
    playerCards.push(getCard());
    playerCards.push(getCard());
    ShowCards(playerCards);

    //Dealer is dealt 1 card and displayed
    dealerCards.push(getCard());
    dealerEl.textContent += ` ${dealerCards[0]}`;

    //Returns total sum of player cards then displays on UI
    playerSum = playerCards.reduce(GetSum);
    sumEl.textContent = `Sum: ${playerSum}`;
    checkCards(playerSum,0);
}

function reset(){
    messageEl.textContent = "Want to play a round?";
    dealerEl.textContent = `Dealer: `;
    sumEl.textContent = `Sum: `;
    cardsEl.textContent = `Cards: `;
    playerCards =[];
    dealerCards = [];
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
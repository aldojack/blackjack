//Doms
let messageEl = document.getElementById('message-el');
let playerSumEl = document.getElementById("playerSum-el");
let dealerSumEl = document.getElementById("dealerSum-el");

let cardsEl = document.getElementById("cards-el");
let dealerEl = document.getElementById("dealer-el");

//Bools
let hasBlackJack = false;
let isBust = false;
let gameActive = false;

//Ints
let playerSum = 0;
let dealerSum = 0;
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

    if(!gameActive)
    {
        //Player is dealt 2 cards and displayed on UI
        playerCards.push(getCard());
        playerCards.push(getCard());
        ShowPlayerCards(playerCards);
    
        //Dealer is dealt 1 card and displayed
        dealerCards.push(getCard());
        dealerSum = dealerCards.reduce(GetSum);
        dealerEl.textContent += ` ${dealerCards[0]}`;
        dealerSumEl.textContent = `Total: ${dealerSum}`;
    
        //Returns total sum of player cards then displays on UI
        playerSum = playerCards.reduce(GetSum);
        playerSumEl.textContent = `Total: ${playerSum}`;
        checkCards(playerSum,0);
        gameActive = true;
    }
    else{
        reset();
    }
}

function reset(){
    messageEl.textContent = "Want to play a round?";
    dealerEl.textContent = `Dealer: `;
    playerSumEl.textContent = `Total: `;
    dealerSumEl.textContent = `Total: `;
    cardsEl.textContent = `Cards: `;
    playerCards =[];
    dealerCards = [];
    playerSum = 0;
    hasBlackJack = false;
    isBust = false;  
    gameActive = false;
    clearInterval(dealer);
}

function hit(){
    if(gameActive)
    {
        if((!isBust) && (!hasBlackJack))
        {
            playerCards.push(getCard());
            playerSum = playerCards.reduce(GetSum);
            playerSumEl.textContent = `Total: ${playerSum}`;
            checkCards(playerSum,0);
            ShowPlayerCards(playerCards);
        }
    }
}

function stand(){
    /*
    If dealer has 16 or less then they must draw a card
    */
   if(gameActive){
       if(dealerSum <=16){
           dealerCards.push(getCard());
           ShowDealerCards(dealerCards);
           dealerSum = dealerCards.reduce(GetSum);
           dealerSumEl.textContent = `Total: ${dealerSum}`;
       }
       else{
        checkWinner(playerSum, dealerSum);
        clearInterval(dealer);
       }
   }
}

function ShowPlayerCards(cards){
    cardsEl.textContent = `Cards: `;

    for(let i = 0;i<cards.length;i++)
    {
        cardsEl.textContent += ` ${cards[i]}`;
    }
}

function ShowDealerCards(cards){
    dealerEl.textContent = `Cards: `;

    for(let i = 0;i<cards.length;i++)
    {
        dealerEl.textContent += ` ${cards[i]}`;
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
        gameActive = false;

    }
    else{
        message = "Winner winner chicken dinner 🥳";
        hasBlackJack = true;
        gameActive = false;
    }
    messageEl.textContent = message;
}

function checkWinner(player, dealer){
    
    if((dealer > player) && (dealer <= blackJack)){
        message = "Dealer Wins!";
    }
    else if(player === dealer){
        message = "Draw";
    }
    else{
        message = "Player Wins!";
    }
    gameActive = false;
    messageEl.textContent = message;
}

































/*
Testing stage



*/
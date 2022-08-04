// DOM Elements

const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 18;

// Link DOM text

playerLivesCount.textContent = playerLives;

// GENERATE THE DATA

const getData = () => [
    {imgSrc :"./images/cold.png",name:"cold"},
    {imgSrc :"./images/develgrinning.png",name:"develgrinning"},
    {imgSrc :"./images/disappointment.png",name:"disappoitment"},
    {imgSrc :"./images/ghost.png",name:"ghost"},
    {imgSrc :"./images/grinning.png",name:"grinning"},
    {imgSrc :"./images/sleeping.png",name:"sleeping"},
    {imgSrc :"./images/smile.png",name:"smile"},
    {imgSrc :"./images/smilewithlove.png",name:"smile with love"},
    {imgSrc :"./images/cold.png",name:"cold"},
    {imgSrc :"./images/develgrinning.png",name:"develgrinning"},
    {imgSrc :"./images/disappointment.png",name:"disappoitment"},
    {imgSrc :"./images/ghost.png",name:"ghost"},
    {imgSrc :"./images/grinning.png",name:"grinning"},
    {imgSrc :"./images/sleeping.png",name:"sleeping"},
    {imgSrc :"./images/smile.png",name:"smile"},
    {imgSrc :"./images/smilewithlove.png",name:"smile with love"},
];

//Randomize

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//Card genration

const cardGenerator = () =>{
    const cardData = randomize();
    //Genrate the Html
    const cards = document.querySelectorAll(".card");

    cardData.forEach((item) =>{
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        //Attach info to card
        face.src = item.imgSrc;
        card.setAttribute('name',item.name);
        //Attach the card to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click',(e) =>{
            card.classList.toggle("toggleCrad");
            checkCards(e);
        })

    });
};

//Check crads
const checkCards = (e) => {
    const clickCrad = e.target;
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCrad = document.querySelectorAll(".toggleCrad");
    clickCrad.classList.add("flipped");
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        }else {
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
              card.classList.remove("toggleCrad");
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0){
                restart("Tryy Again !!!!");
            }
        }
    }

    //Check of win

    if(toggleCrad.length===16){
        restart("You Winnn !!!")
    }
};

//Restart

const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item,index)=> {
        cards[index].classList.remove('toggleCrad');
        //Randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name",item.name);
            section.style.pointerEvents = "all";
        }, 1000); 
    });
    playerLives = 6 ; 
    playerLivesCount.textContent = playerLives;
    setTimeout(()=> window.alert(text),1000)
}

cardGenerator();


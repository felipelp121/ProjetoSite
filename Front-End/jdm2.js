let game = {
    techs : ['bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo', 
    'node',
    'react'],
cards : null,

createCardsFromTechs: function(){

    this.cards = [];
    
    this.techs.forEach((tech) => {
        this.cards.push(this.createPairFromTech(tech));
    })
    this.card = this.cards.flatMap(pair => pair);
    this.shuffleCards()
    return this.cards;
},
    
createPairFromTech: function(tech){
    return [{
        id: this.createIdWithTech(tech),
        icon:tech,
        flipped:false,
    },{
        id: this.createIdWithTech(tech),
        icon:tech,
        flipped:false,
    }]
},
createIdWithTech: function(tech){
    return tech + parseInt(Math.random() * 1000);
},

shuffleCards: function(cards){
    let currentIndex = this.cards.length;
   
    let randomIndex = 0;
    while (currentIndex != 0){
        console.log(currentIndex)
        randomIndex = Math.floor(Math.random() * currentIndex);
        
        currentIndex--;
        
        x = this.cards[randomIndex]
        z = this.cards[currentIndex]
        this.cards[randomIndex] = z
        this.cards[currentIndex] = x
        // [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
    
    }
    
}

}
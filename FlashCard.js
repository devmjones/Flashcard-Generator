//var basicCard = require("BasicCard.js");
var inquirer = require('inquirer');
var clozeCards =[];
var basicCards = [];

var ClozeCard = function(text, cloze){
  this.fullText = text;
  this.cloze = cloze;
  this.partial = this.fullText.replace(this.cloze , "...");

  if(!this.fullText.includes(this.cloze)){
    console.log("This doesn't work")
  };
};

var BasicCard = function(front, back){
  this.front = front;
  this.back = back;
};

var start=function(){
  inquirer.prompt([
    {
      name: "playOrCard",
      type: "rawlist",
      message: "Would you like to [PLAY] or make a new flash [CARD]?",
      choices: ["PLAY", "CARD"]
    }
])
  .then(function(answer){
    if(answer.playOrCard.toUpperCase() === "PLAY"){
      console.log("We're sorry, that feature has not yet been implemented")
    }
    else{
      inquirer.prompt([
        {
          name: "basicOrCloze",
          type: "rawlist",
          message: "Would you like to make a [BASIC] or [CLOZE] card??",
          choices: ["BASIC", "CLOZE"]
        }
      ])
      .then(function(cardType){
        if(cardType.basicOrCloze.toUpperCase === "BASIC"){
          makeNewBasicCard();
        }
        else{
          makeNewClozeCard();
        }
      })
    }
  })
}

var makeNewClozeCard = function(){
  inquirer.prompt([
    {
      name: "textInput",
      message:"Enter full text of question"
    },
    {
      name:"clozeInput",
      message: "Enter the section you'd like removed (the cloze portion)"
    }
  ]).then(function(answers){
    var newClozeCard = new ClozeCard(answers.textInput, answers.clozeInput);
    clozeCards.push(newClozeCard);
  })
};

var makeNewBasicCard = function(){
  inquirer.prompt([
    {
      name: "frontInput",
      message:"Enter the question (front of card)"
    },
    {
      name:"backInput",
      message: "Enter the answer (back of card)"
    }
  ]).then(function(answers){
    var newBasicCard = new BasicCard(answers.frontInput, answers.backInput);
    basicCards.push(newBasicCard);
  })
};


var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;

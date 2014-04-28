// ------------------Constructors----------------------
// definition is a function that programs the effect of the ability
var Ability = function (name,definition) {
	this.name = name;
	this. definition = definition;
};
//character job deterimes starting health and ability 
var Job = function (name, ability, health) {
	this.name = name;
	this.ability = ability;
	this.health = health;
};
var Character = function (name, job) {
	this.name = name;
	this.job = job;
	// job.ability = ability;
	// job.health = health;
	this.items = [];
	// implement hit point system
};

// wrong should an array of three wrong answers that are randomized with correct
var Trivia = function (str, difficulty, correct, wrong){
	this.str = str;
	this.difficulty= difficulty;
	this.correct = correct;
	this.wrong= wrong;

};
// array of Trivia
var Category = function (name, questions) {
	this.name = name;
	this.questions = questions;
};
// defines the rank of a monster
var Rank = function(name,health) {
	this.name = name;
	this.health = health;
}
// array holds the categories that the monster can access questions from
// difficulty is the maximum level of difficulty that they can acess
// rank can be Mook, Elite, Mid-Boss, Boss, End-Boss
var Monsters = function(name, array, difficulty, rank) {
	this.name = name;
	this.array = array;
	this.difficulty = difficulty;
	this.rank = rank;
};

var Locations = function (name) {

};
// constructor for collectible items and treasure
var Item = function (name,effect){
	this.name = name;
	this.effect = effect;
}
// -----------------Functions-----------------------------


			//      -Class Ability Definitions-

// Knights can negate a point of damage from an incorrect guess
var block = function (){
	return false;
};
// Rogues use their cunning to sometimes deal a critical hit
// to a monster when they get a question right
var cunning = function(){
	return false;
};
// Wizards can use their high wisdom and intuition to eliminate two wrong answers 
// when the round  begins
var intuition = function(){ 
	return false;
};

// Sorceress use their intelligence and cleverness to access the monsters
//list of available categories and choose the one that she wants
var cleverness = function(){
	return false;

};

// Bard can dazzle their opponent, stupefying them  and bring the difficulty
// of a question down by a tier
var dazzle = function() {
	return false;

};

// Monk learns wisdom from defeat more rapidly,healing double the amount of HP
//  and is blessed to find items at a greater rate
var blessed = function() {
	return false;

};

// 						-Category Functions-
// create a function to loop through a category, pick a Trivia Item
 // and display the string in the Trivia object
// the 
Category.prototype.categorySearch = function() {
	for (var i = 0; i < this.questions.length; i++) {
		console.log(this.questions[i]);
		
	};
	
};
// uses underscore js sample function to randomly grab a
// an item from the array and output it's string
Category.prototype.triviaOutput = function() {
	// var selectedTrivia = _.sample(this.array);
	// selectedTrivia;
	return _.sample(this.questions).str;
}

// goes through each question in the array and filters by difficulty
Category.prototype.triviaDifficulty = function() {

}
// 					-Trivia Functions-
// merges the two choice arrays together and randomizes them
// FUNCTION TO FIX - correctChoice is added multiple times
Trivia.prototype.choiceRandomizer = function() {
	var wrongChoices = this.wrong;
	var correctChoice = this.correct[0];
	console.log(correctChoice);
	var choices = wrongChoices.push(correctChoice);
	return _.shuffle(this.wrong);
	
}
Trivia.prototype.difficultPull = function() {
	return this.difficulty;
}



// 					-Monsters Functions-

// takes a given monster, searches their available source of categories and
// outputs a random question of the randomly chosen category
Monsters.prototype.monsterGenerator = function() {
	var monster = this;
	var arrayofCategories = this.array;
	var category = _.sample(arrayofCategories);
	var questions = category.questions;
		// run function to filter by difficulty
		// category = _.filter(category,function(){
		// 	return this.difficulty <= trivia.
		// })
	var triviaObj= _.sample(questions);
	var trivia = category.triviaOutput();
	// if (triviaObj.difficulty <= this.difficulty) {
	// 	return trivia;
	// }
	// else{

	// }
	// var monsterTrivia = trivia.choiceRandomizer()
	return "You are being attacked by "+monster.name+"! <br>"
	+trivia;
};


// 					-Global Functions-
var availableMonsters = function(pool){
			return _.sample(pool);
} 


// 					-Monster Ranks-	

//Mooks are the lowest level of Encounter, should be warm-ups
// var mook = function(){
// 	return false;
// } 

// ----------------------Variables-----------------------
	// 					-Ability Definition-
	var knightBlock = new Ability('Block',block());
    //                  -Character Job Definition-

var knight = new Job('Knight',knightBlock,10);
var rogue = new Job('Rogue',cunning,8);
var wizard = new Job('Wizard',intuition,6);
var sorceress = new Job('Sorceress',cleverness,6);
var bard = new Job('Bard',dazzle,8);
var monk = new Job('Monk',blessed,8);

	// 					-Character Definition-
var kanir = new Character('Kanir',knight);


	// 					-Trivia Definition-
var donaldDuckName = new Trivia("What is Donald Duck's middle name?", 2,['Fauntleroy'],['Lavender','Huey','Howard']);

var aladdinTiger = new Trivia("What is the name of Jasmine's pet tiger",1,['Rajah'],['Abu','Iago','Tigger']);
var pacmanScore = new Trivia("What is the maximum achieveable score in one game of 'Pac-Man'?", 3,['3,333,360'],['999,999','424,242,420','3,000,000']);

var marioOrigin = new Trivia("What was Mario's name in the original Donkey Kong arcade game?",2,['Jumpman'],['Luigi','Toad','He had no name']);

var gameFIFA2001 = new Trivia("What unusual feature did the game 'FIFA 2001' implement?",5,['A Scratch and Sniff CD'],['You could use other CD-ROMs to generate players','It had a mode to play as the coaches and referees','It would lock the player out during half-time and encourage them to go outside']);


	// 					-Categories Definition-
var disney = new Category('Disney Trivia',[donaldDuckName,aladdinTiger]);
var videoGames = new Category('Video Game Odd Facts',[pacmanScore,marioOrigin,gameFIFA2001]);
	
	// 					-Monster Ranks-
var mook = new Rank('Mook',1);
	// 					-Monster Definition-
var goblin = new Monsters('Goblin',[disney],2,mook);
var troll = new Monsters('Troll',[videoGames,disney],5,mook);

	// 					-Monster Pool-
	var firstLevel = [goblin,troll];
// -------------------------DOM Creation------------------
$(document).on('ready', function() {  
	// On click, generates a random question for the given monster
	$('.button-layout').on('click','.btn', function () {
		$('.placement').empty();
		$('.placement').append(availableMonsters(firstLevel).monsterGenerator());

	})


});
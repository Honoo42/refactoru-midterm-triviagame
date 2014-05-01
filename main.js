if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

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
	// var currentHealth = this.health;
};
var Character = function (name, job) {
	this.name = name;
	this.job = job;
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
var Rank = function(name) {
	this.name = name;
	// this.health = health;
}
// array holds the categories that the monster can access questions from
// difficulty is the maximum level of difficulty that they can acess
// rank can be Mook, Elite, Mid-Boss, Boss, End-Boss
var Monsters = function(name, array, difficulty, rank, health) {
	this.name = name;
	this.array = array;
	this.difficulty = difficulty;
	this.rank = rank;
	this.health = health;
	// var currentHealth = this.health;
	
};

var Locations = function (name) {

};
// constructor for collectible items and treasure
var Item = function (name,effect){
	this.name = name;
	this.effect = effect;
}

var Answers = function(Array) {
	this.Array = Array;
	var answerChoice1 = Array[0];
	var answerChoice2 = Array[1];
	var answerChoice3 = Array[2];
	var answerChoice4 = Array[3];
	

}

// -----------------Prototype Methods---------------------
Ability.prototype.create =  function(){
		return $('<div class="ability">{name}</div>'.supplant(this));
};

Job.prototype.create =  function(){
		return $('<div class="job">{name}</div>'.supplant(this));
};

Character.prototype.create =  function(){
		return $('<div class="character">{name}</div>'.supplant(this));
};

Trivia.prototype.create =  function(){
		// console.log($(this.correct).addClass('correct'));
		$(this.correct).addClass('correct');
		$(this.wrong).addClass('wrong');
		// console.log($(this.wrong).addClass('wrong'));

		return $('<div class="trivia">{str}</div>'.supplant(this));
};

Category.prototype.create =  function(){
		return $('<div class="category">{name}</div>'.supplant(this));
};

Rank.prototype.create =  function(){
		return $('<div class="rank">{name}</div>'.supplant(this));
};

Monsters.prototype.create =  function(){
		return $('<div class="monsters">{name} with a maximum difficulty of {difficulty}</div>'.supplant(this));
};

Locations.prototype.create =  function(){
		return $('<div class="locations">{name}</div>'.supplant(this));
};

Item.prototype.create =  function(){
		return $('<div class="item">{name}</div>'.supplant(this));
};
// Using supplant to generate the answer choices and data-attribute to assign the 'correct' class to the 
// right answer after all the answers are suffled
Answers.prototype.create1 =  function(){
	// console.log(this.Array[0][0], this.Array[0][1]);
	
	var answersOnDisplay ={answerChoice1:this.Array[0][0], correctAnswer:this.Array[0][1].toString() };

		return $('<button class="answers answer-btn answer1" data-answer="{correctAnswer}">{answerChoice1}</button>'.supplant(answersOnDisplay));

	};
Answers.prototype.create2 =  function(){
	var answersOnDisplay ={answerChoice2:this.Array[1][0], correctAnswer:this.Array[1][1].toString() };
		return $('<button class="answers answer-btn answer2" data-answer="{correctAnswer}">{answerChoice2}</button>'.supplant(answersOnDisplay));

	};	
Answers.prototype.create3 =  function(){
	var answersOnDisplay ={answerChoice3:this.Array[2][0], correctAnswer:this.Array[2][1].toString() };
		return $('<button class="answers answer-btn answer3" data-answer="{correctAnswer}">{answerChoice3}</button>'.supplant(answersOnDisplay));

	};
Answers.prototype.create4 =  function(){
	var answersOnDisplay ={answerChoice4:this.Array[3][0], correctAnswer:this.Array[3][1].toString() };
		return $('<button class="answers answer-btn answer4" data-answer="{correctAnswer}">{answerChoice4}</button>'.supplant(answersOnDisplay));

	};
// };
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
	var correctChoice = this.correct;
	// console.log(correctChoice);
	var choices = wrongChoices.push(correctChoice);
	console.log(wrongChoices);
	// correctChoice.addClass(correct);
	// shuffles the array of answer choices
	var shuffledChoices = _.shuffle(this.wrong);
	// makes sure that the choices displayed to the player are all unique indexes
	var uniqueChoices = _.uniq(shuffledChoices);
	// var displayChoices = new Answers(uniqueChoices);
		
	// gives each possible answer it's own array
	var answerChoice1 = uniqueChoices[0];
	var answerChoice2 = uniqueChoices[1];
	var answerChoice3 = uniqueChoices[2];
	var answerChoice4 = uniqueChoices[3];

	// console.log(answerChoice1);
	// console.log(answerChoice2);
	// console.log(answerChoice3);
	// console.log(answerChoice4);
	return uniqueChoices;
	// return answerChoice1+"<br>"+
	// 		answerChoice2+"<br>"+
	// 		answerChoice3+"<br>"+
	// 		answerChoice4


	
}
Trivia.prototype.difficultPull = function() {
	return this.difficulty;
}



// 					-Monsters Functions-
var fixedQuestions = [];
// takes a given monster, searches their available source of categories and
// outputs a random question of the randomly chosen category
Monsters.prototype.encounterGenerator = function() {
	var monster = this;
	var arrayofCategories = this.array;
	var category = _.sample(arrayofCategories);
	var questions = category.questions;
		// run _.reject to filter by difficulty
		var filteredQuestions = _.reject(questions,function (question){return question.difficulty > monster.difficulty});
	var triviaObj= _.sample(filteredQuestions);
	// fixedQuestions = triviaObj.choiceRandomizer();
	// console.log(fixedQuestions);
	// var trivia = category.triviaOutput();
	// var monsterTrivia = trivia.choiceRandomizer()
	// console.log(monster.difficulty);
	// console.log(filteredQuestions);
	return triviaObj;
	// return triviaObj.str
	// +" <br> "+fixedQuestions;
};



// 					-Global Functions-
var availableMonsters = function(pool){
			return _.sample(pool);
} 

var encounterDisplay = function () {
	return
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
var devaio = new Character('Devaio',wizard);


	// 					-Trivia Definition-
var donaldDuckName = new Trivia("What is Donald Duck's middle name?", 2,['Fauntleroy',true],[['Lavender',false],['Huey',false],['Howard',false]]);

var aladdinTiger = new Trivia("What is the name of Jasmine's pet tiger",1,['Rajah',true],[['Abu',false],['Iago',false],['Tigger',false]]);
var pacmanScore = new Trivia("What is the maximum achieveable score in one game of 'Pac-Man'?", 3,['3,333,360',true],[['999,999',false],['424,242,420',false],['3,000,000',false]]);

var marioOrigin = new Trivia("What was Mario's name in the original Donkey Kong arcade game?",2,['Jumpman',true],[['Luigi',false],['Toad',false],['He had no name',false]]);

var gameFIFA2001 = new Trivia("What unusual feature did the game 'FIFA 2001' implement?",5,['A Scratch and Sniff CD',true],[['You could use other CD-ROMs to generate players',false],['It had a mode to play as the coaches and referees',false],['It would lock the player out during half-time and encourage them to go outside',false]]);


	// 					-Categories Definition-
var disney = new Category('Disney Trivia',[donaldDuckName,aladdinTiger]);
var videoGames = new Category('Video Game Odd Facts',[pacmanScore,marioOrigin,gameFIFA2001]);
	
	// 					-Monster Ranks-
var mook = new Rank('Mook');
var elite = new Rank('Elite');
	// 					-Monster Definition-


var goblin = new Monsters('Goblin',[disney],2,mook,1);
var troll = new Monsters('Troll',[disney,videoGames],5,elite,3);



	// 					-Monster Pool-
	var firstLevel = [goblin,troll];

// -------------------------DOM Creation------------------
$(document).on('ready', function() {  
	$('.generate').hide();
	$('.reset-game').hide();
	$('.character').hide()
	// var currentMonster = true;
	var theKnight = kanir.create();
	var theWizard = devaio.create();
// 				-----------DOM Variables---------------
	var placeArea = $('.placement');
	var characterDisplay = $('.character-display');
	
	var monsterDisplay = $('.encounter-string');
	var buttonLayout = $('.button-layout');
	

// 			----------------DOM FUNCTIONS---------------
	var characterSelect = function () {
		$('.start-game').hide();
		$('.btn-kanir').show();
		$('.btn-devaio').show();

	};

	var startGame = function () {
		characterSelect();
		// $('.generate').show();
		// $('.reset-game').show();
		$('.start-game').hide();
	};
	var characterInfo = function (currentCharacter) {
			characterDisplay.append(
			currentCharacter.name+"<br>",
			"Character Job: "+currentCharacter.job.name+"<br>",
			"Current Health: "+currentCharacter.job.health)
	};
	var monsterInfo = function (currentMonster) {
		monsterDisplay.empty();
		monsterDisplay.append(
			currentMonster.name+"<br>",
			"Max Trivia Diificulty: "+currentMonster.difficulty+"<br>",
			"Monster Rank: "+currentMonster.rank.name+"<br>",
			"Current Health: "+currentMonster.health
			);
	};
	var characterChoice = function () {
		$('.character').hide();
		$('.generate').show();
		$('.reset-game').show();
	}
	// the function to generate a new encounter
	var postAnEncounter = function () {
		console.log("Test");
		// On click, randomly selects a monster from the pool of monsters given
		currentMonster = availableMonsters(firstLevel)
		// Choose a question from that monsters pool
		var activeEncounter = currentMonster.encounterGenerator();
		// Of the question choosen, randomizes the answer choices
		var possibleChoices = activeEncounter.choiceRandomizer();
		// Constructs the answers into objects
		var displayChoices = new Answers(possibleChoices);
		var monsterHealth = currentMonster.health;
		console.log(currentMonster);
		placeArea.empty();
		// placeArea.append(
		// 	"You are being questioned by a ", 
		// 	currentMonster.create()
		// 	);
		
		// if (monsterHealth === 0) {
		// 	console.log ("Victory!")
		// 	placeArea.empty ();
		// 	placeArea.append("PREPARE FOR THE NEXT BATTLE!");
		// 	_.delay(postAnEncounter,3000);
		// }
		// else{
		// 	placeArea.empty ();
		// 	placeArea.append(
		// 	"You are being questioned by a ", 
		// 	currentMonster.create(),
		// 	activeEncounter.create(),
		// 	displayChoices.create1(),
		// 	displayChoices.create2(),
		// 	displayChoices.create3(),
		// 	displayChoices.create4()
		// );
		// 	console.log("This is just a bite!");
		// }
		
		placeArea.append(
			"You are being questioned by a ", 
			currentMonster.create(),
			activeEncounter.create(),
			displayChoices.create1(),
			displayChoices.create2(),
			displayChoices.create3(),
			displayChoices.create4()
		);
		monsterInfo(currentMonster);
		answerAddClass();
		console.log(monsterHealth);
		



	};
	// var generateQuestions = function () {
	// 			placeArea.append(
	
	// 		activeEncounter.create(),
	// 		displayChoices.create1(),
	// 		displayChoices.create2(),
	// 		displayChoices.create3(),
	// 		displayChoices.create4()
	// 	);

	// }
	// adds class to answers and automatically creates a new encounter after 3 seconds
	var answerAddClass = function () {
		$('.answer-btn[data-answer="true"]').addClass('correct');
		$('.answer-btn[data-answer="false"]').addClass('wrong');
		// _.delay(postAnEncounter,3000);
	}
	var resetGame = function () {
		characterDisplay.empty();
		monsterDisplay.empty();
		placeArea.empty();

		$('.generate').hide();
		$('.reset-game').hide();
		$('.start-game').show();
	};
	var highlightCorrect = function () {
		$(this).css({
				'border-color':'red',
				'border-width': '5px'
				});
			$('.wrong').css({
				'border-color':'blue',
				'border-width': '5px',
				'opacity': '0.5'
			});
		};
	var highlightWrong = function () {
			$('.correct').css({
				'border-color':'orange',
				'border-width': '5px'
				});
			$('.wrong').css({
				'border-color':'blue',
				'border-width': '5px',
				'opacity': '0.5'
			});

	};

	// 			--------------DOM CREATION AND MANIPULATION--------------

		// Start button starts the game and hides itself
	buttonLayout.on('click','.start-game', function (){
		startGame();
	});

		
		// On a click of The Knight during character select, it loads Kanir's stats
		$('.character-buttons').on('click','.btn-kanir',(function() {
			currentCharacter = kanir;
			characterInfo(kanir);
			characterChoice();
		})
		);
		// On a click of The Wizard during character select, it loads Devaio's stats
		$('.btn-devaio').click(function () {
			currentCharacter = devaio;
			characterInfo(devaio);
			characterChoice();
		});
		
		// characterInfo(this);
	// On click, generates a random question for the given monster
	buttonLayout.on('click','.generate', function () {
		postAnEncounter();
	});
	// $(document).on('click','.test', function (){
	// 	generateQuestions();
	// });
		// If the player chooses the right answer, it subtracts a hit point from the monster
	$(document).on('click','.answer-btn[data-answer="true"]',function(){
			console.log("CORRECT");
			currentMonster.health --
			console.log(currentMonster.health)
			highlightCorrect();
			// if (currentMonster.health === 0) {

			// };
			_.delay(postAnEncounter,3000);


	});
	// If the answer chosen is wrong, it subtracts health from the player
	$(document).on('click','.answer-btn[data-answer="false"]',function(){
			console.log("WRONG");
			currentCharacter.job.health --
			console.log(currentCharacter.job.health)
			highlightWrong();
				_.delay(postAnEncounter,3000);
	});



	// Reset the game
	buttonLayout.on('click','.reset-game', function (){
		resetGame();
	});	

	// // If player clicks on the right choice, display CONGRATULATIONS, if wrong, display WRONG!!
	// $(document).on('click', '.answer-btn', function () {
	// 	var choice = this;
	// 	if (this === $('.answer-btn[data-answer="true"]')) {console.log("RIGHT ON!")} else{console.log("WRONG!")};
	// 	// $('.answer-btn[data-answer="true"]').addClass('correct');
	// 	// $('.answer-btn[data-answer="false"]').addClass('wrong');
	// 	console.log(choice);
	// })



});
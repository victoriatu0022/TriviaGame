$('#start').on('click',function(){
        $('#start').remove();
        game.loadQuestion();
   
})

$(document).on('click','.answer=button',function(e){
    game.clicked(e);
})

var questions = [{
    question: "What does gude mean?",
    answers: ["cute", "happy", "lazy", "hungry"],
    correctAnswer: "lazy",
    images: "assets/images/1.gif",
}, {
    question: "What does tama mean?",
    answers: ["egg", "shell", "emoji", "face"],
    correctAnswer: "egg",
    images: "assets/images/2.gif",
}, {
    question: "What makes gudetama cry?",
    answers: ["egg shell", "pepper", "being eaten", "being jiggled"],
    correctAnswer: "egg shell",
    images: "assets/images/3.gif",
}, {
    question: "How does gudetama transform?",
    answers: ["getting cooked", "getting jiggled", "getting cracked", "no transformation"],
    correctAnswer: "getting jiggled",
    images: "assets/images/4.gif",
}, {
    question: "Could there be more than one gudetama?",
    answers: ["yes", "no", "no clue", "what is this quiz"],
    correctAnswer: "yes",
    images: "assets/images/5.gif",
}, {
    question: "How do you wake gudetama?",
    answers: ["with egg shells", "with chopsticks", "with a plate", "by feeding him"],
    correctAnswer: "with chopsticks",
    images: "assets/images/6.gif",
}, {
    question: "How does gudetama not like?",
    answers: ["soy sauce", "worms", "humans", "birds"],
    correctAnswer: "worms",
    images: "assets/images/7.gif",
}, {
    question: "How does gudetama eat?",
    answers: ["bacon", "tomato", "ketchup", "soy sauce"],
    correctAnswer: "soy sauce",
    images: "assets/images/8.gif",

}, {
    question: "What is gudeatama's blanket?",
    answers: ["soup", "lettuce", "egg shell", "bacon"],
    correctAnswer: "bacon",
    images: "assets/images/9.png",
}, {
    question: "Do you like gudetama?",
    answers: ["yes", "no", "nope", "ew"],
    correctAnswer: "yes",
    images: "assets/images/10.gif",
}];
// }]

var game = {
    questions:questions,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("TIME UP!");
        game.timeUp();
        }
    },
    loadQuestion: function() {
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').html('<h2>'+questions[game.currentQuestion].question + '</h2>');
        for(var i=0;i<questions[game.currentQuestion].answers.length;i++) 
            {$('#subwrapper').append('<button class="answer-button" id="button-'+i+' " data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');

            }
    
    },
    nextQuestion: function() {

    },
    timeUp: function() {

    },
    results: function() {

    },
    clicked: function(e) {
        clearInterval(timer);
        if($(e.target).data("name") == questions[game.currentQuestion].correctAnswer)
        {game.answerCorrectly(); }
        else{
            game.answerinCorrectly();
        }

    },
    answerCorrectly: function() {
        console.log("You got it correct!");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2> You got it correct </h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000)
        } else {
            setTimeout(game.nextQuestion,3*1000)

        }
    },
    answerinCorrectly: function() {
        console.log("You got it incorrect!");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2> You got it incorrect </h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000)
        } else {
            setTimeout(game.nextQuestion,3*1000)

        }
    },
    reset: function () {

    }, 
         
}


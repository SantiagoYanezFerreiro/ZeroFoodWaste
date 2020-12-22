//Score variable defaulta value, set to 0
let score = 0;

$(document).ready(function() {

})

//Backgroudn effect depending on the answer
$('.answer-btn').click(function() {
    if ($(this).hasClass('right')) {
        $(this).addClass('true');
    } else {
        $(this).addClass('false');
    }
});


//Increases Score by two points if answer was correct
$('.right').one('click', function() {
    score += 2;
    //Adds an additional point if bonus question is correct
    if ($(this).hasClass('bonus')) {
        score += 2;
    }
});


//Fades out other possible quiz answers when one has been selected 
$('.quiz-btn').click(function() {
    $(this).siblings().fadeOut('300');
});

//Function to reveal results
$('#display-score').click(function() {
    //Shows the box with user's results
    $('.hide-show').show();
    $('.score-btn').show();

    $('#score').text('Total Score: ' + score + '/9 points');
    if (score === 7) {
        $('.new-try').text(`You're already a master`);
    } else if (score >= 5) {
        $('.new-try').text('Very good job, your knowledge is very advanced');
    } else if (score < 5 && score >= 1) {
        $('.new-try').text('Good try, wanna give it another go?');
    } else {
        $('.new-try').text('Sth went wrong, wanna try again?');
    }
});
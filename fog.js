var quotes = [
    'Do You Want To Play A Game?',
    'Be Afraid, Be Very Afraid.',
    'Whatever You Do, Don’t Fall Asleep.',
    'Out here no one can here you scream',
    'All adventures, especially new territory is scary',
    'What you may encounter is not as bad as you think',
    'When you reached that fork in the road, what do you do',
    'When is the end of the road',
    'We are all driven by something',
    'Are some roads meant to be less traveled?',
    'Missed the last exit'   
];

function newQuote() {
   var randomQuote = Math.floor(Math.random() * (quotes.length)); 
   document.getElementById("quote-display").innerHTML = quotes[randomQuote];   

}

$("h1").fadeOut(5000).fadeIn(8000).slideUp(5000).slideDown(8000);
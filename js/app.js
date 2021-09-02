const button = document.querySelector('button');
const quote = document.querySelector('#quote');
const author = document.querySelector('.quote-author');

const quotes = [
  {
    text: 'I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy',
    writer: 'Ray Kroc'
  },
  {
    text: 'When we have respect for ourselves and others, we gravitate towards connections that encourage that',
    writer: ' Simeon Lindstrom'
  },
  {
    text: 'Anger is the ultimate destroyer of your own peace of mind',
    writer: 'Dalai Lama'
  },
  {
    text: 'A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful ',
    writer: 'L. R. Ellert'
  },
  {
    text: 'Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you do not take the shot',
    writer: 'Wayne Gretzky'
  },
  {
    text: 'Do not be afraid. Be focused. Be determined. Be hopeful. Be empowered',
    writer: 'Michelle Obama'
  },
  {
    text: 'The fact is that grief today is a family matter as much a s it is an individual one',
    writer: 'Barbara Okun'
  }
]

button.addEventListener('click', generateQuote);

function generateQuote(){
 const index = Math.floor(Math.random()*quotes.length)
 quote.innerHTML = quotes[index].text;
 author.innerHTML = quotes[index].writer;
}

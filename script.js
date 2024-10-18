const quotes = [
  {
    quote: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
  },
  {
    quote: 'Innovation distinguishes between a leader and a follower',
    author: 'Steve Jobs',
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
  },
  {
    quote: 'Imagination is more important than knowledge',
    author: 'Albert Einstein',
  },
  {
    quote: 'It always seems impossible until it’s done',
    author: 'Nelson Mandela',
  },
  {
    quote: 'Be the change that you wish to see in the world',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts',
    author: 'Winston Churchill',
  },
  {
    quote: 'No one can make you feel inferior without your consent',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop',
    author: 'Confucius',
  },
];

const quoteElementQuote = document.getElementById('quote');
const quoteElementAuthor = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElementQuote.textContent = quote;
  quoteElementAuthor.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);

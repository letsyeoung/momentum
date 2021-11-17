/* Quotes */

//문장을 'array' 사용해서 입력
const quotes = [
  {quote : `The road to success and the road to failure are almost exactly the same.` ,
   author : `Colin R. Davis`,
  }, 
  
   {quote : `All progress takes place outside the comfort zone.`,
   author : `Michael John Bobak`,
  },
  
   {quote : `Let us always meet each other with smile, for the smile is the beginning of love`,
   author : `Mother Teresa Bojaxhiu`,
  },
  
  {quote : `It is your determination and persistence that will make you a successful person.`,
   author : `Kenneth J Hutchins`,
  },
  
  {quote : `Without continuous personal development, you are now all that you will ever become and hell starts when the person you are meets the person you could have been`,
   author : `Eli cohen`,
  },
  
  {quote : `The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.`,
   author : `Vince Lombardi`,
  },
  
  {quote : `Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.`,
   author : `Dale Carnegie`,
  },
  
  {quote : `Action is the foundational key to all success.`,
   author : `Pablo Picasso`,
  },
  
  {quote : `You can waste your life drawing lines. Or you can live your life crossing them.`,
  author : `Shonda Rhimes`,
  },
  
  {quote : `The way to get started is to quit talking and begin doing.`,
   author : `Walt Disney`,
  },
];

// 도큐먼트에서 'span'불러오기.
const quote = document.querySelector ("#quote span:first-child");
const author = document.querySelector ("#quote span:last-child");

// 'quotes'에 저장된 문장을 랜덤으로 불러오기.
const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

// 불러온 'span' 안에 저장하기.
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

























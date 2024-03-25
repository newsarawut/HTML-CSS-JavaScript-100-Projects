// quoteBtn
const generatorQuoteBtn = document.getElementById("quoteBtn");
// quoteOutput
const quoteOutput = document.getElementById("quoteOutput");
// authorOutput
const authorOutput = document.getElementById("authorOutput");

generatorQuoteBtn.addEventListener("click", () => {
  generatorQuote();
});

// https://www.shopify.com/blog/motivational-quote
const arrayOfQuotes = [
  {
    author: "Alber Einstein",
    quote:
      "We cannit solve problem with the kind of thinking we emplyed when we came up with them.",
  },
  {
    author: "Mahatma Gandhi",
    quote:
      "Learn as if you will live forever, live like you will die tomorrow.",
  },
  {
    author: "Mark Twain",
    quote:
      "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
  },
  {
    author: "Norman Vincent Peale",
    quote: "When you change your thoughts, remember to also change your world.",
  },
  {
    author: "Walter Anderson",
    quote:
      "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.",
  },
  {
    author: "Diane McLaren",
    quote:
      "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
  },
  {
    author: "Winston Churchill",
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  },
  {
    author: "Herman Melville",
    quote: "It is better to fail in originality than to succeed in imitation.",
  },
];

function generatorQuote() {
  let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
  authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
}

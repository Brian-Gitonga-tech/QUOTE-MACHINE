const quoteBank = [
    {
     quote: "The longer you live, the more you realize that the only things that truly exist in this reality are merely pain",
     author: "madara"
    },
    {
      quote: "Without pain, there would be no suffering, without suffering we would never learn from our mistakes.",
      author: "pain"
    },
    {
      quote: "death is what give's life meaning",
      author: "ancient one"
    },
    {
        quote: "THE HARDEST CHOICES REQUIRES THE STRONGEST WILL",
        author: "THANOS"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "A man's gotta make at least one bet a day, else he could be walking around lucky and never know it",
        author: "Jim Jones"
    },
    {
        quote: "Better to live a day as a lion than 100 years as a sheep",
        author: "Benito Mussolini"
    },
    {
        quote: "I am become death, the destroyer of worlds.",
        author: "J.Robert Oppenheimer"
    }, 
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "Steve Jobs"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    }
  ]

  function generatequote() {
    let size = quoteBank.length;
    let index = Math.floor(Math.random() * size);
    let randomquote = quoteBank[index];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;text=";

    let quote = randomquote.quote.replace(/ /g, "%20")
    let author = randomquote.author.replace(/ /g, "%20");

    twitterLink += quote;
    twitterLink += author;

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerHTML = randomquote.quote.toUpperCase();
    document.getElementById("author").innerHTML = " - " + randomquote.author.toUpperCase();

  }
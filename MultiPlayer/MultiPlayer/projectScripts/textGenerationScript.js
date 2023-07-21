// A bag of sentence to use when the api is down or the internet is down.
const offlineSentences = [
"Believe in yourself, and you'll conquer any typing challenge Embrace the keyboard, and let your words flow with precision Every keystroke counts, make each one a masterpiece.",

];

// Feedback text for the typing game.
const typingSpeedCompare = {
  0: "You need to improve your typing",

  10: "Your typing speed is way below average.",

  20: "Your typing speed is way below average.",

  30: "Your typing speed is way below average.",

  40: "You are now an average typist.",

  50: "You’re above average.",

  60: "You can now be a professional typist!",

  70: "You are way above average!",

  80: "You are a good typist!",

  90: "You are an amazing typist!",

  100: "You are in the top 1% of typists!",
};

// Function genterates text based on the condition.
async function textGenerator() {
  let randomIndex = Math.floor(Math.random() * offlineSentences.length); // generating a random number for choosing a text.
  sentenceText = "";

  // Grabbing the text from api.
  if (window.navigator.onLine) {
    sentenceText = await getRandomTextThroughApi();
  }

  // Checking if the text is valid.
  if (sentenceText === undefined || sentenceText.length === 0) {
    sentenceText = offlineSentences[randomIndex];
  } else {
    // making the text easier to type.
    sentenceText = sentenceText.replace(
      /[`~@#$%^&*()_|+\-?;:<>\n\t\r\{\}\[\]\\\/]/gi,
      ""
    );
  }
}

// Return the a string from the api.
function getRandomTextThroughApi() {
  let randomCategory = ["career", "dev", "food", "history", "science"][
    (9 * Math.random()) << 0
  ];
  //  << refers to shifting one means it takes floor.

  const apiUrl = `https://api.chucknorris.io/jokes/random?category=${randomCategory}`;

  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);

  return fetch(apiUrl, {
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then((data) => {
      return data.value;
    })
    .catch((err) => {
      console.error(err.message);
    });
}

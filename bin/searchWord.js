const fetch = require("node-fetch");
const ora = require("ora");

const spinner = ora({
  text: "Loading definition..."
});

function searchWord(word = "love") {
  spinner.start();

  return fetch(`https://owlbot.info/api/v3/dictionary/${word}`, {
    headers: {
      Authorization: "Token 07f42659d3d7051946c054e82d690c93ced5bcd4"
    }
  }).then(response => {
    if (response.ok) return response.json();
    throw new Error();
  }).then(response => {
    spinner.stop();
    console.log(`${word}: ${response.definitions[0].definition}`);
  }).catch(error => {
    spinner.stop();
    console.log("something went wrong, try again.");
    throw error;
  });
}

module.exports = searchWord;
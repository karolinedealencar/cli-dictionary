const fetch = require("node-fetch");

function searchWord(word = "love") {
  return fetch(`https://owlbot.info/api/v3/dictionary/${word}`, {
    headers: {
      Authorization: "Token 07f42659d3d7051946c054e82d690c93ced5bcd4"
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error();
    })
    .then(response => console.log(response.definitions[0].definition))
    .catch(error => {
      console.log("something went wrong, try again.");
      throw error;
    });
}

module.exports = searchWord;

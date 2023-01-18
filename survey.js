const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  const name = answer;
  rl.question(`What's an activity you like doing? `, (answer) => {
    const hobbies = answer.toLowerCase();
    rl.question("What do you listen to while doing that? ", (answer) => {
      const music = answer.toLowerCase();
      rl.question(
        "Which meal is your favourite? (eg: dinner, brunch, etc.) ",
        (answer) => {
          const favMeal = answer.toLowerCase();
          rl.question(
            "What's your favourite thing to eat for that meal?",
            (answer) => {
              const favFood = answer.toLowerCase();
              rl.question("What is your favourite sport? ", (answer) => {
                const favSport = answer.toLowerCase();
                rl.question(
                  "What is your superpower? In a few words, tell us what you are amazing at! ",
                  (answer) => {
                    const superpower = answer.toLowerCase();
                    console.log(
                      `\nMeet ${name}. Who enjoys ${hobbies} while listenig to ${music}. ${name} likes to have ${favFood} for ${favMeal}. ${name} prefers ${favSport} over other sports. This human being has many talents but ${superpower} is definitely a superpower of ${name}.`
                    );
                    rl.close();
                  }
                );
              });
            }
          );
        }
      );
    });
  });
});

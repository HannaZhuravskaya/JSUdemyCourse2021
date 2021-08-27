/*
 LECTURE: Values and Variables
 1.Declare variables called 'country', 'continent'and 'population'and assign their values according to your own country(population in millions)
 2.Log their values to the console
 */

let country = "Belarus";
let continent = "Europe";
let population = 9.8;

console.log("\t1. LECTURE: Values and Variables");
console.log(
  "Country: " +
    country +
    ", Continent: " +
    continent +
    ", Population: " +
    population
);

/*
LECTURE: Data Types
1.Declare a variable called 'isIsland'and set its value according to your country. The variable should hold a Booleanvalue. Also declare a variable'language', but don't assign it any value yet
2.Log the types of 'isIsland', 'population', 'country'and 'language'to the console
*/

console.log("\t2. LECTURE: Data Types");

const isIsland = false;
let language;

console.log("isIsland type: " + typeof isIsland);
console.log("population type: " + typeof population);
console.log("country type: " + typeof country);
console.log("language type: " + typeof language);

/*
LECTURE: let, const and var
1.Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
2.Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
3.Try to change one of the changed variables now, and observe what happens
*/

/*
JavaScript Fundamentals – Part 1
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).

Your tasks:
1.Store Mark's and John's mass and height in variables
2.Calculate both their BMIs using the formula (you can even implement both versions)
3.Create a Boolean variable 'markHigherBMI'containing information about whether Mark has a higher BMI than John.

Test data:
§Data1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.§Data2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀 */

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1.Print a nice output to the console, saying who has the higher BMI. The message iseither "Mark's BMI is higher than John's!"or "John's BMI is higher than Mark's!"
2.Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/elsestatement😉
GOOD LUCK 😀
*/

console.log("\t\tJavaScript Fundamentals – Part 1");
console.log("\tCoding Challenge #1 and #2");

let calculateBMI = (data) => data.mass / data.height ** 2;

// Test data 1
let markData = { mass: 78, height: 1.69 };
let johnData = { mass: 92, height: 1.95 };
markData.BMI = calculateBMI(markData);
johnData.BMI = calculateBMI(johnData);
let markHigherBMI = markData.BMI > johnData.BMI;

console.log(markData, johnData, markHigherBMI);

console.log(
  `Mark's BMI (${markData.BMI}) ${
    markHigherBMI ? "is higher than" : "is lower than"
  } John's (${johnData.BMI})!`
);

// Tests data 2
markData = { mass: 95, height: 1.88 };
johnData = { mass: 85, height: 1.76 };
markData.BMI = calculateBMI(markData);
johnData.BMI = calculateBMI(johnData);
markHigherBMI = calculateBMI(markData) > calculateBMI(johnData);

console.log(markData, johnData, markHigherBMI);

console.log(
  `Mark's BMI (${markData.BMI}) ${
    markHigherBMI ? "is higher than" : "is lower than"
  } John's (${johnData.BMI})!`
);

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1.Calculate the average score for each team, using the test data below
2.Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3.Bonus1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint:Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4.Bonus2:Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
§Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§Data Bonus1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§Data Bonus2: Dolphins score 97, 112 and101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

console.log("\tCoding Challenge #3");

let getAverageScore = (scores) => {
  let sum = 0;
  for (var score of scores) {
    sum += score;
  }
  return sum / scores.length;
};

let printWinnerMessage = (dolphinsAverageScore, koalasAverageScore) => {
  if (koalasAverageScore < 100 && dolphinsAverageScore < 100) {
    console.log(
      `No winner! Dolphins have ${dolphinsAverageScore} score and Koalas have ${koalasAverageScore} score`
    );
  } else {
    if (koalasAverageScore === dolphinsAverageScore) {
      console.log(
        `Draw! Dolphins and Koalas have ${koalasAverageScore} score.`
      );
    } else if (koalasAverageScore > dolphinsAverageScore) {
      console.log(
        `Winner - Koalas! Dolphins have ${dolphinsAverageScore} score and Koalas have ${koalasAverageScore} score`
      );
    } else {
      console.log(
        `Winner - Dolphins! Dolphins have ${dolphinsAverageScore} score and Koalas have ${koalasAverageScore} score`
      );
    }
  }
};

// Test data 1
let dolphinsScores = [96, 108, 89];
let dolphinsAverageScore = getAverageScore(dolphinsScores);

let koalasScores = [88, 91, 110];
let koalasAverageScore = getAverageScore(koalasScores);

printWinnerMessage(dolphinsAverageScore, koalasAverageScore);

// Test data 2
dolphinsScores = [97, 112, 101];
dolphinsAverageScore = getAverageScore(dolphinsScores);

koalasScores = [109, 95, 123];
koalasAverageScore = getAverageScore(koalasScores);

printWinnerMessage(dolphinsAverageScore, koalasAverageScore);

// Test data 3
dolphinsScores = [97, 112, 101];
dolphinsAverageScore = getAverageScore(dolphinsScores);

koalasScores = [109, 95, 106];
koalasAverageScore = getAverageScore(koalasScores);

printWinnerMessage(dolphinsAverageScore, koalasAverageScore);

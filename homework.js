//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
function findWords(inputString, namesList) {
    const string = inputString.toLowerCase();
    let matchesFound = false;

    for (let i = 0; i < namesList.length; i++) {
        const name = namesList[i].toLowerCase();

        if (string.includes(name)) {
            console.log(`Matched ${namesList[i]}`);
            matchesFound = true;
        }
    }

    if (!matchesFound) {
        console.log("No Matches");
    }
}

const dogString = "Hello Max, my name is Dog, and I have purple eyes!";
const dogNames = ["Max", "HAS", "PuRple", "dog"];

findWords(dogString, dogNames);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
      arr.splice(i, 1, "even index");
    }
  }
  
const arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
  
replaceEvens(arr);
  
console.log(arr);


//============Exercise #3 ============//
/*   https://www.codewars.com/kata/5669a5113c8ebf16ed00004c/train/python */

function SubstringTest(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    for (let i = 0; i < s1.length; i++) {
      for (let j = i + 2; j <= s1.length; j++) {
        const substring = s1.slice(i, j);
          if (s2.includes(substring)) {
          return true;
        }
      }
    }
  
    return false;
  }

  //============Exercise #4 ============//
  /* https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript */
  function getCount(str) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++; 
      }
    }
  
    return count; 
  }
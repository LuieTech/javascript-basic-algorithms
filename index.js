// // Iteration 1: Names and Input

const hacker1 = "john"
console.log(hacker1)

const hacker2 = "christian"
console.log(hacker2)

// Iteration 2: Conditionals

  if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// // Iteration 3.1: Loops

let newName = ""

for(let i=0; i < hacker1.length; i++){
  newName += hacker1[i].toUpperCase() + " "    
}
console.log(newName);

// // Iteration 3.2: Loops

let reverseName = ""
for( i = hacker1.length -1; i >= 0; i--){
  reverseName += hacker1[i]
}
console.log(reverseName);

// // Iteration 3.3: Loops

if(hacker1 < hacker2){
  console.log(`The driver's name goes first`)
} else if(hacker1 > hacker2){
  console.log(`Yo, the navigator goes first, definitely`)
} else {
  console.log(`What?! You both have the same name?`)
}

// // BONUS 1: lorem paragraphs
//   //1.1
const longText = `Nisi ea dolore exercitation laborum velit anim aute et mollit laboris consectetur ex cupidatat culpa mollit. Commodo ut cupidatat duis commodo et magna Lorem officia cillum. Ipsum ipsum aliquip incididunt aliqua consectetur exercitation amet consequat. Dolor irure occaecat nostrud commodo dolor id elit commodo ex exercitation eiusmod adipisicing.`

// //1.2
const numberOfWords = longText.trim().split(" ").length
console.log(numberOfWords)

//  //1.3
let counter = 0;
const numberOfLetters = longText.trim().split(" ")

for( i = 0; i < numberOfLetters.length; i++){
  if(numberOfLetters[i] === "et") counter++
}
console.log(counter)

// BONUS 2: 

const phraseToCheck1 = "Amor, Roma!"
function palindromeWordDetector(phrase){
  const onlyWords = phrase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let reverseWords = ""
  for(i = onlyWords.length -1; i >= 0 ; i--){
    reverseWords += onlyWords[i];
  }
  if(onlyWords === reverseWords) console.log("it is a palindrome word")
  else console.log("it is not a palindome word")
}
palindromeWordDetector(phraseToCheck1)






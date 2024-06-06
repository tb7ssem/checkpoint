function analyzeSentence(sentence) {
  let sentenceLength = 0;
  let wordCount = 0;
  let vowelCount = 0;

  // Iterate through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    sentenceLength++;

    // Check if the character is a vowel
    if (/[aeiouAEIOU]/.test(char)) {
      vowelCount++;
    }

    // Check if the character is a space or the last character
    if (char === " " || i === sentence.length - 1) {
      // If the previous character was not a space, increment word count
      if (i > 0 && sentence[i - 1] !== " ") {
        wordCount++;
      }
    }
  }

  return {
    sentenceLength: sentenceLength,
    wordCount: wordCount,
    vowelCount: vowelCount,
  };
}

// Test the function
let sentence = "This is a sample sentence.";
let analysis = analyzeSentence(sentence);
console.log("Length of the sentence:", analysis.sentenceLength);
console.log("Number of words:", analysis.wordCount);
console.log("Number of vowels:", analysis.vowelCount);

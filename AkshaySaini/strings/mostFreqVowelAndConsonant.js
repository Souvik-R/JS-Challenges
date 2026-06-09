
let string = "successes";

let mostFreqVowelAndConsonant = function (s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            ++map[s[i]]
        }
    };

    let vowels = ["a", "e", "i", "o", "u"];
    let keysOnly = Object.keys(map);
    let maxVowel = 0;
    let maxConsonant = 0;
    for (let j = 0; j < keysOnly.length; j++) {
        if (vowels.includes(keysOnly[j])) {
            if (map[keysOnly[j]] > maxVowel) {
                maxVowel = map[keysOnly[j]];
            }
        } else {
            if (map[keysOnly[j]] > maxConsonant) {
                maxConsonant = map[keysOnly[j]];
            }
        }
    }
    return maxVowel + maxConsonant;
};

console.log(mostFreqVowelAndConsonant(string));
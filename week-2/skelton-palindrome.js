//document.getElementById("btnCheckPhrase").onclick = checkPalindrome();

function getTodaysDate() {
    const date = new Date();
    return date.toLocaleDateString("en-US");
}


function getLength(userInput) {
    return userInput.length;
}

/** 
 * Split user input into an array, call array's reverse property, then join
 */
function reverse(userInput) {
    const userInputCopy = userInput.split("");
    userInputCopy.reverse();
    const reverseInputCopy = userInputCopy.join("");
    return reverseInputCopy;
}

/**
 * Returns boolean value stating whether user input is considered a palindrome
 */
function isPalindrome(userInput) {
    const reverseInput = reverse(userInput);
    if (reverseInput === userInput) {
        return true;
    } else {
        return false;
    }
}

/**
 * Constructs result header using above methods and displays result to user
 */
function checkPalindrome() {
    let txtPhrase = (document.getElementById("txtPhrase").value).toLowerCase();
    let assignResults = document.getElementById("assign-results");
    let today = getTodaysDate();
    let len = getLength(txtPhrase);
    let reversedPhrase = reverse(txtPhrase);
    let header = "Date: " + today + 
        "<br>Original Phrase: " + txtPhrase + 
        "<br>Reversed Phrase: " + reversedPhrase + 
        "<br>Phrase Length: " + len;
    document.getElementById("assign-results-header").innerHTML = header;

    if (isPalindrome(txtPhrase)) {
        assignResults.innerHTML = txtPhrase + " <u><b>is</u></b> a palindrome!";
    } else {
        assignResults.innerHTML = txtPhrase + " <u><b>is not</u></b> a palindrome!";
    }
}
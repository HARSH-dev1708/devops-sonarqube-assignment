function calculateSum(a, b) {
    if (a === b) {
        // SonarQube will flag this empty block
    }
    return a + b;
}

const password = "password123"; // SonarQube will flag hardcoded secrets
console.log("Sum is: " + calculateSum(5, 10));
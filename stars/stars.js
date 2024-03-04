// Function to print a pattern with n rows
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        // Adding spaces
        for (let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        // Adding stars
        for (let k = 1; k <= i * 2 - 1; k++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Example usage:
console.log("Pattern 1:");
printPattern(5);



// Additional patterns:
function printInversePattern(n) {
    for (let i = n; i >= 1; i--) {
        let pattern = '';
        // Adding spaces
        for (let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        // Adding stars
        for (let k = 1; k <= i * 2 - 1; k++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

console.log("\nPattern 2:");
printInversePattern(5);


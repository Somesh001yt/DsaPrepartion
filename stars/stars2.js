function printStarPattern(n) {
    // Upper half
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
    

    // Lower half
    for (let i = n - 1; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Example usage:
printStarPattern(5);

function printPyramidPattern(n) {
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
    // for (let i = n - 1; i >= 1; i--) {
    //     let pattern = '';
    //     // Adding spaces
    //     for (let j = 1; j <= n - i; j++) {
    //         pattern += ' ';
    //     }
    //     // Adding stars
    //     for (let k = 1; k <= i * 2 - 1; k++) {
    //         pattern += '*';
    //     }
    //     console.log(pattern);
    // }
}


printPyramidPattern(5);
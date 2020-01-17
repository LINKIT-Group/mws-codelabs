onmessage = (e) => {
    const numbers = e.data;
    const startTime = new Date().getTime();
    const len = numbers;
    let sum = 0;
    let i;

    if (len === 0) {
        return 0;
    }

    for (i = 0; i < len; i++) {
        sum += i;
    }

    let endTime = new Date().getTime();

    // throw Error('Test the error handling');

    postMessage({
        average: sum / len,
        time: ((endTime - startTime) / 1000),
    })
};

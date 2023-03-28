const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolve');
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolve');
    }, 1000);
});
Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
}).catch((error) => {
    console.log(error);
});
// Promise Structure
const promise = new Promise((resolve, reject) => {
// Change the status from 'pending' to 'fulfilled'
    resolve('Hello World');
// Change the status from 'pending' to 'rejected'
    reject();
});
console.log(promise);
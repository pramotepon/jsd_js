/* 
    Promise
    // State => pending => Resolve, Reject
    // State => pending => { Resolve .then .then , Reject .catch } => .finally
*/
// // Promise Structure
// const promise = new Promise((resolve, reject) => {
// // Change the status from 'pending' to 'fulfilled'
// resolve();
// // Change the status from 'pending' to 'rejected'
// reject();
// });

// const promise = new Promise((resolve, reject) => {
//     let sum = 1+1;
//     if(sum == 2){
//         resolve('Success');
//     }else{
//         reject('Failed');
//     }
// });

// promise.then((message) => {
//     console.log('This is success resolve: ' + message);
// }).catch((message) => {
//     console.log('This is failed reject: ' + message);
// });

let stocks = {
  coffee: ["cappuccino", "latte", "mocha"],
  liquid: ["hot", "ice", "milk"],
  cup: ["small", "midium", "large"],
  topping: ["chocolate", "milk"],
};
let is_shop_open = false; //1. is the shop open
let order = (time, work) => {
  // work and time 2. customer order
  return new Promise((resolve, reject) => {
    // 3. we promise customer
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time); //now we have work and time
    } else {
      reject(console.log("the shop is closed"));
    }
  });
};
order(2000, () => console.log(`${stocks.coffee[0]} was selected`)) // 1. place order 2 second
  .then(() => {
    //no ; before then
    return order(0000, () => console.log("started making coffee")); //need to return 2. production started 0 seconds
  })
  .then(() => {
    return order(2000, () => console.log("coffee bean in process")); //need to return 3.
  })
  .then(() => {
    return order(2000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`)
    ); //need to return 4. water and ice was selected
  })
  .then(() => {
    return 1000, () => console.log("coffee mixed");
  })
  .then(() => {
    return order(2000, () => console.log(`${stocks.cup[0]}`));
  })
  .then(() => {
    return order(3000, () => console.log(`${stocks.topping[0]} was selected`));
  })
  .then(() => {
    return order(1000, () => console.log("coffee was served"));
  })
  .catch(() => {
    console.log("customer left");
  })
  .finally(() => {
    console.log("the shop is closed");
  });

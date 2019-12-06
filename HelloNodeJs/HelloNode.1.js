var message = "";




promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    message += " first";
    resolve(message);
  }, 2000)
})

promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    message += " promise";
    resolve(message);
  }, 2500)
})

promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    message += "my";
    resolve(message);
  }, 1500)
})
var printResult = (results) => { console.log("Results = ", results, "message = ", message) }
let start;
async function main() {
  // See the order of promises. Final result will be according to it
  start = Date.now();
  //  Promise.all([promise1, promise2, promise3]).then((results) =>{ console.log("Results = ", results, "message = ", message); let res=Date.now()-start; console.log('time - ' + res)}).catch((e)=>console.log(e));
  let r1 = async (r) => {
    return promise1.then(() => r);
  };
  let r11 = await r1();

  let r2 = async (r) => {
    return promise2.then(() => r);
  };
  let r22 = await r2();
  let r3 = async (r) => {
    return promise3.then(() => r);
  };
  let r33 = await r3();

  // Promise.all([promise2, promise1, promise3]).then(printResult);
  console.log(r11 + r22 + r33);
 
  // Promise.all([promise3, promise2, promise1]).then(printResult);
  console.log("\"\"" + message);

  let res = Date.now() - start;
  console.log('time - ' + res);
}

main();

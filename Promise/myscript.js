

function void1(){
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done1!"), 1000);
  });
}
function void2(){
   return new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done2!"), 2000);
  });
}
function void3(){
   return new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done3!"), 3000);
  });
}

// void1()
//   .then(r=>{console.log(r);return void2();})
//   .then(r=>{console.log(r);return void3();})
//   .then(r=>console.log(r));
void1().then(r=>console.log(r));
void2().then(r=>console.log(r));
void3().then(r=>console.log(r));
Promise.all([
  void3(),
   void1(),
   void2()
   
  
]).then(alert);


function void1(){
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done1!"), 1000);
  });
}
function void2(){
   return new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done2!"), 1000);
  });
}
function void3(){
   return new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done3!"), 1000);
  });
}

void1()
  .then(r=>{console.log(r);return void2();})
  .then(r=>{console.log(r);return void3();})
  .then(r=>console.log(r));

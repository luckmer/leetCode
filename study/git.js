
Promise.resolve().then(()=>{
  console.log(1)
})
setTimeout(()=>console.log(2))

 
console.log(3)
new Promise(()=>console.log(4))

// (()=>console.log(6))()
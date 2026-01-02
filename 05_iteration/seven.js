const nums =[2,3,4,9,5]
//const kuls = nums.map((val) => { return val+10})


const kul = nums
         .map((val)=> val+2)
         .map((val)=>val*3)
         .filter((val)=> val>=18 )

         
 console.log(kul)





let num=12345
let reversed=0
for(;num>0;num=Math.floor(num/10)){
    let digit=num%10
    reversed=reversed*10+digit
}
console.log(reversed)
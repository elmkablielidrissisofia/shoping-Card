
const tot=document.getElementById('total') 

function increase(id,prix,ctn,chek){
    let inp=document.getElementById(id);
    let val=parseInt(inp.value);
    val++;
    inp.value=val;
// inc du prix
let price=document.getElementById(prix);
price.innerHTML=`${ctn*val}$`;
   //on inc, tot increase
let checkitem=document.getElementById(chek);
console.log(checkitem);
if(checkitem.checked){
     tot.innerHTML=`${parseInt(tot.innerHTML)+ctn}$`
}

}
function decrease(id,prix,ctn,chek){
    let inp=document.getElementById(id);
    let val=parseInt(inp.value);
    if(val>0){
        val--;    
    }else val=0;
    inp.value=val;
    // dec du prix
    let price=document.getElementById(prix);
     if(val>0){price.innerHTML=`${ctn*val}$`};
    //on dec,tot decrease 
    let checkitem=document.getElementById(chek);
    
    if(checkitem.checked){

      tot.innerHTML=`${parseInt(tot.innerHTML)-ctn}$`
      }
    }
//total
function total(chek,price,inp){
   let checkitem=document.getElementById(chek);
   if(checkitem.checked){ 
       let prix=document.getElementById(price);
       let input=document.getElementById(inp);
       if(input.value>0){
       let sum=parseInt(tot.innerHTML)+parseInt(prix.innerHTML);
       tot.innerHTML=`${sum}$`;
    }
   }
   else{
    let prix=document.getElementById(price);
    let sum=parseInt(tot.innerHTML)-parseInt(prix.innerHTML);
    tot.innerHTML=`${sum}$`;
   }
}

    
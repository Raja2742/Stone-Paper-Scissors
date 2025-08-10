let pnum=0;
let cnum=0;
let name=["stone","paper","seasor"];
let message=document.querySelector(".para");
let sines=document.querySelectorAll(".sine");
let cscore=document.querySelector(".cscore");
let pscore=document.querySelector(".pscore");
let restart=document.querySelector(".restart");

sines.forEach(sine => {
   
    sine.addEventListener("click",()=>{

        pchoice=sine.getAttribute("id");
        cchoices = Math.floor(Math.random() * name.length);
        cchoice=name[cchoices];
        console.log(pchoice);
        console.log(name[cchoices]);
        if(pchoice==cchoice){
           message.innerHTML=`<p>DRAW! ${pchoice} CANCELED ${cchoice}</p>`
        }
        else{
            if(pchoice=="stone"){
                if(cchoice=="paper"){
                    message.innerHTML=`<p>BETTER LUCK NEXT TIME! ${pchoice} LOSS WITH ${cchoice}</p>`
                    cnum++;
                    cscore.innerHTML=`<p>  ${cnum} </p>`
                }
                else{
                    message.innerHTML=`<p>CONGRATULATIONS! ${pchoice} DEFETED ${cchoice}</p>`
                    pnum++;
                    pscore.innerHTML=`<p>  ${pnum} </p>`

                }
            
            }
            if(pchoice=="paper"){
                if(cchoice=="seasor"){
                    message.innerHTML=`<p>BETTER LUCK NEXT TIME! ${pchoice} LOSS WITH ${cchoice}</p>`
                    cnum++;
                    cscore.innerHTML=`<p>  ${cnum} </p>`
                }
                else{
                    message.innerHTML=`<p>CONGRATULATIONS! ${pchoice} DEFETED ${cchoice}</p>`
                    pnum++;
                    pscore.innerHTML=`<p>  ${pnum} </p>`

                }
            
            }
            if(pchoice=="seasor"){
                if(cchoice=="stone"){
                    message.innerHTML=`<p>BETTER LUCK NEXT TIME! ${pchoice} LOSS WITH ${cchoice}</p>`
                    cnum++;
                    cscore.innerHTML=`<p>  ${cnum} </p>`
                }
                else{
                    message.innerHTML=`<p>CONGRATULATIONS! ${pchoice} DEFETED ${cchoice}</p>`
                    pnum++;
                    pscore.innerHTML=`<p>  ${pnum} </p>`

                }
            
            }
         }

         restart.addEventListener("click",()=>{
        pnum=0;
        cnum=0;
        pscore.innerHTML=`<p>  ${pnum} </p>`;
        cscore.innerHTML=`<p>  ${cnum} </p>`;
        message.innerHTML="<p>WELLCOME</p>"
    
    })
    


    })
    
});

 
const botoesEL = document.querySelectorAll("botoes");

for (let i = 0; i < botoesEL.length; i ++) {
    botoesEL[i].addEventListener("click", ()=>{
        console.log(botoesEL[i]);
    }) 
};
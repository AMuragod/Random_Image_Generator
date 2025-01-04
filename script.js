const  imgContainerEl=document.querySelector(".image-container");

const buttonEl=document.querySelector(".btn");

const Img=document.querySelector("img");

buttonEl.addEventListener("click",()=>
{
    for(index=1;index<=6;index++)
    {
        const creatNewimg=document.createElement("img");
        imgContainerEl.append(creatNewimg);
        const randomnum=Math.floor(Math.random()*100);
        const Images=creatNewimg.src=`https://picsum.photos/300?random=${randomnum}`;

    
     }
    
})






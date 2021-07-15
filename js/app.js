'use strict'
let inpEmail=document.querySelector("input[type=email]")
let btnMail=document.querySelector('button[type=submit]')

// btnMail.addEventListener('click',function(){
//     if(inpEmail.value == '')
//     {
//         inpEmail.value='Please Enter Your Email'
//     }
// })

function addCopun(event){
    event.preventDefault()
    if(inpEmail.value == '')
    {
        inpEmail.value='Please Enter Your Email'
    }
}
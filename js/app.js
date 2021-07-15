'use strict'
let inpEmail=document.querySelector("input[type=email]")
let btnEmail=document.querySelector('button[type=submit]')

btnEmail.addEventListener('click',function(){
    if(inpEmail.value == '')
    {
        inpEmail.value='Please Enter Your Email'
    }
})
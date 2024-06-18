
var buttons=document.getElementsByClassName('qustion1')
var value1
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',()=>{
        value1=buttons[i].value
    console.log(value1);
    })
    
}

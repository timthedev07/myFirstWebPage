//The main js file.

let typePIN = close;
if (!localStorage.getItem('counting')) {
    localStorage.setItem('counting', 0);
} else if (localStorage.getItem('counting')) {
    if (localStorage.getItem('counting') == 30 || localStorage.getItem('counting') == 'You win!'){
        localStorage.setItem('counting', 0);
    }
}
if (!localStorage.getItem('counterWeight')) {
    localStorage.setItem('counterWeight', 'normal');
}
if (!localStorage.getItem('counterColor')) {
    localStorage.setItem('counterColor', 'black');
}

var countingTimer = 0;
var characters = [];
const correctPIN = ['0', '7', '1', '2', '2', '4']
function toLink(x){
    alert('Copy the following link to access more info: '+x);
}
function counter(){
    const cott = document.querySelector("#ctbutton");
    let countingCloud = localStorage.getItem('counting');

    let finishpoint = 29;
    if (countingCloud==finishpoint || countingCloud=='You win!'){
        cott.innerHTML = "You win!"
        countingCloud = 'You win!';

    } else {
        if (countingCloud!=finishpoint){
            countingCloud++;
            cott.innerHTML = countingCloud
            if (countingCloud % 10===0 && countingCloud === 10){
                alert("You've reached ten")
            } else if (countingCloud % 10===0) {
                alert("You've reached another 10")
            }
        }
    }

    localStorage.setItem('counting', countingCloud);
}
function timer(){
    const cott = document.querySelector("#timerdisplay");
    countingTimer++;
    cott.innerHTML = countingTimer;
}
function thankyou() {
    alert ('Thank you for signing up for our website!')
}
//Copy to clipboard
function copyToClipboard() {
    var copyText = document.querySelector("#path");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
//Show content function
function showPage(page) {
    document.querySelectorAll('.recordDisplay').forEach(recordDisplay => {
        recordDisplay.style.display = "none";
    })
    const EWC = document.querySelector(`#${page}`)
    EWC.style.display = "block";
    EWC.animationPlayState = 'running';


}
function reachedBottom(){
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight){
        return true;
    } else {
        return false;
    }
};
//The space belows runs everything, but the space above are defining the functions.





document.addEventListener('DOMContentLoaded', function (){
    window.onscroll = () =>{
        if (reachedBottom()){
            document.querySelector('body').style.backgroundColor = "#F33D4F";
        } else {
            document.querySelector('body').style.backgroundColor = "antiquewhite";
        }
    }

    document.querySelectorAll('.ttINFObutton').forEach(button => {
        button.onclick = function (){
            const content = this.dataset.page;
            showPage(content)
        }
    });
    //Code above is about MLINFO and FZINFO
    document.querySelector('#count').onclick = counter;
    document.querySelector('#resetC').onclick = () =>{
        document.querySelector('#ctbutton').innerHTML = 0
        localStorage.setItem('counting', 0)
    }
    document.querySelector('#cForm').onsubmit = () => {
        fetch('https://api.exchangeratesapi.io/latest?base=EUR')
        .then(response => response.json())
        .then(data => {
            const currency = document.querySelector('#cInput').value.toUpperCase();
            const rate = data.rates[currency];
            if (rate !== undefined){
                document.querySelector('#currencyResult').innerHTML = `One Euro is equal to ${rate.toFixed(3)} ${currency}`;
            } else {
                document.querySelector('#currencyResult').innerHTML = 'Invalid currency.'
            }

        })
        .catch(error => {
            console.log ('Error: ', error);
        });


        return false;
    }

});

document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#copyButton').onclick = copyToClipboard;
})


document.addEventListener('DOMContentLoaded', function (){
    const colorDisplay = document.querySelector('#ctbutton');
    var timerstatus = 'disableFalse';
    document.querySelector('#submittask').disabled = true;

    document.querySelector('#task').onkeyup = function(){
        if (document.querySelector('#task').value.length > 0){
            document.querySelector('#submittask').disabled = false;
        } else {
            document.querySelector('#submittask').disabled = true;
        }

    }

    document.querySelectorAll('.countdisplaychange').forEach(button => {
        button.onclick = function(){
            let counterWeightLocal = localStorage.getItem('counterWeight');

            document.querySelector('#ctbutton').style.fontWeight = button.dataset.weight;
            counterWeightLocal = document.querySelector('#ctbutton').style.fontWeight;
            localStorage.setItem('counterWeight', counterWeightLocal)
        }
    });
    document.querySelector('select').onchange = function (){
        let counterColorLocal = localStorage.getItem('counterColor');
        document.querySelector('div > h1').style.color = this.value;
        counterColorLocal = document.querySelector('div > h1').style.color;
        localStorage.setItem('counterColor', counterColorLocal);
    }
    document.querySelector('#opoo').onmouseover = function (){
        alert ('Congrats, you have found nothing')
    }
    document.querySelector('#divtasksdiv > form').onsubmit = function (){
        const taskvar = document.querySelector('#task').value;
        console.log(taskvar);

        const li = document.createElement('li');
        li.innerHTML = taskvar;
        document.querySelector('#divtasksdiv > ol').append(li);
        document.querySelector('#task').value = '';
        document.querySelector('#submittask').disabled = true;
        return false;
    };
    document.querySelector('#ploloo').onclick = function(){
        console.log (timerstatus)
        if (timerstatus === 'disableFalse'){
            setInterval(timer, 1000);
        }
        timerstatus = 'disableTrue';
    }
});

document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#signinformtag').onsubmit = () => {
        const password = document.querySelector('#typeSignInPassword > input').value;
        if (password === 'MLTD90873' || password === 'qwer3124'){
            let wpstatus = 'admin'
            alert (`Hello dear ${wpstatus}.`);

            if (wpstatus === 'admin'){
                //Show the content under admin mode;
                //Error line below
                document.querySelector('.ai').style.visibility = 'hidden';
                document.querySelector('.av').style.visibility = 'visible';
                console.log ('mode to admin');
            } else {
                document.querySelectorAll('.av').style.visibility = 'hidden';

                console.log ('something is visible');
            }
        } else if (password != 'MLTD90873' && password != 'qwer3124') {
            let wpstatus = 'client'
            alert (`Continue as a ${wpstatus} or try to sign in again.`);
            if (wpstatus === 'admin'){
                console.log ('something is invisivle for client');
            } else {
                document.querySelector('.av').style.visibility = 'hidden';
                document.querySelector('.ai').style.visibility = 'visible';

                console.log ('mode to client');
            }
        }


        return false;
    }
    //just to update the innerHTML value to the getItem('sth') local storage. Which is the value you that was before you refreshed the page
    document.querySelector('#ctbutton').innerHTML = localStorage.getItem('counting');
    document.querySelector('#ctbutton').style.fontWeight = localStorage.getItem('counterWeight');
    document.querySelector('#ctbutton').style.color = localStorage.getItem('counterColor');

});


//another domcontent loaded
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#edxbutton').style.animationPlayState = 'paused';
    document.querySelector('#stopEdx').onclick = () =>{
        const edxButton = document.querySelector('#edxbutton')
        if (edxButton.style.animationPlayState === 'running'){
            edxButton.style.animationPlayState = 'paused';
        } else {
            edxButton.style.animationPlayState = 'running';
        }
    }




    document.addEventListener('click', event => {
        const elementClicked = event.target;
        if (elementClicked.className == 'remove_natrash'){
            elementClicked.parentElement.style.animationPlayState = 'running';
            elementClicked.parentElement.addEventListener('animationend', () => {
                elementClicked.parentElement.remove();
            });
        };
    });

});
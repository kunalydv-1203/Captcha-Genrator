const inputText = document.querySelector(".text input");

const inputEnter = document.querySelector(".enter input");

const refreshbtn = document.querySelector(".refresh");

const submitCap = document.querySelector(".submit");



const  mssg = document.querySelector(".msg");


let captchaText = null;




const getCaptcha = () => {
    const randCap = Math.random().toString(36).substring(3,8);
    
    const randCapArr = randCap.split(" ");
    const changeCap = randCapArr.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));

     captchaText = changeCap.join(" ");

     inputText.value = captchaText;

    
    
}




refreshbtn.addEventListener("click" , () => {
    getCaptcha();
    inputEnter.value= "";
    mssg.classList.add("hide");
} );

submitCap.addEventListener("click" , () => {
    checkCaptcha();
} );

getCaptcha();

const checkCaptcha = () => {
  
    captchaText = captchaText
        .split(" ")
        .filter((char) => char !== " ")
        .join(" ");

    

    if(inputEnter.value === captchaText ){
       
        mssg.innerText = "Captcha matches"
        mssg.style.color = "green";
        getCaptcha();
        inputEnter.value= "";
        console.log('match');
    }else{
       mssg.style.color = "red";
        mssg.innerText = "Captcha doesn't match"
        console.log('not equal');
        getCaptcha();
        inputEnter.value= "";
    }
};




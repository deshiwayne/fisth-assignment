function getInputTaka(id){

    const takaOne = document.getElementById(id).innerText;
    const addMoney = Number(takaOne);

    const takaOne1 = document.getElementById(id).innerText;
    const addMoney1 = Number(takaOne1);

    const takaOne2 = document.getElementById(id).innerText;
    const addMOney2 = Number(takaOne2);

    console.log(addMoney);

    
    return addMoney,addMoney1,addMOney2;

}

function getInputTaka1(id){
    const inputMoney = document.getElementById(id).value;
    const inputMoney1 = Number(inputMoney);
    console.log(inputMoney1);

    const inputMoney2 = document.getElementById(id).value;
    const inputMoney3 = Number(inputMoney2);

    const inputMoney4 = document.getElementById(id).value;
    const inputMoney5 = Number(inputMoney4);
   
   
    return inputMoney1,inputMoney3,inputMoney5;
}

// function for main balance

function getMainMoney(id){
    const mainMoney = document.getElementById(id).innerText;
    const mainMoney1 = Number(mainMoney);

    const mainMoney2 = document.getElementById(id).innerText;
    const mainMoney3 = Number(mainMoney2);

    const mainMoney4 = document.getElementById(id).innerText;
    const mainMoney5 = Number(mainMoney4);
   

    return mainMoney1,mainMoney3,mainMoney5;
}
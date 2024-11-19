    document.getElementById("donate")
    .addEventListener('click', function(event){
        event.preventDefault();

        const poysha = getInputTaka("taka-one");
        const poysha1 = getInputTaka1("input-money");
        const mainPoysha = getMainMoney("main-balance");
        

        
        if(poysha1 >= 0){
            
            const newBalance = poysha + poysha1;
           document.getElementById("taka-one").innerText = newBalance;
        }
        else{
            alert("Invalid");
        }

        // main-balance code

        if(poysha1 < mainPoysha){
            const newBalance2 = mainPoysha - poysha1;
            document.getElementById("main-balance").innerText = newBalance2;
        }
        else{
            alert("Invalid Type");
        }
        
                
    })

    document.getElementById("donate1")
    .addEventListener('click', function(event){
        event.preventDefault();
        const poysha = getInputTaka("taka-one1");
        const poysha1 = getInputTaka1("input-money1");
        const mainPoysha = getMainMoney("main-balance");

        if(poysha1 >= 0){
            
            const newBalance = poysha + poysha1;
           document.getElementById("taka-one1").innerText = newBalance;
        }
        else{
            alert("Invalid");
        }

        // main-balance code

        if(poysha1 < mainPoysha){
            const newBalance2 = mainPoysha - poysha1;
            document.getElementById("main-balance").innerText = newBalance2;
        }
        else{
            alert("Invalid Type");
        }
    
        

    })

    document.getElementById("donate2")
    .addEventListener('click', function(event){
        event.preventDefault();
        const poysha = getInputTaka("taka-one2");
        const poysha1 = getInputTaka1("input-money2");
        const mainPoysha = getMainMoney("main-balance");
        if(poysha1 >= 0){
            
            const newBalance = poysha + poysha1;
           document.getElementById("taka-one1").innerText = newBalance;
        }
        else{
            alert("Invalid");
        }

        // main-balance code

        if(poysha1 < mainPoysha){
            const newBalance2 = mainPoysha - poysha1;
            document.getElementById("main-balance").innerText = newBalance2;
        }
        else{
            alert("Invalid Type");
        }

    })
    
    
    document.getElementById("main-btn1")
    .addEventListener('click',function(){
        
     document.getElementById("content").classList.add('hidden');
        
    })
    document.getElementById("main-btn")
    .addEventListener('click', function(){
        document.getElementById("content").classList.remove('hidden');
    })








// document.getElementById("donate")
// .addEventListener('click', function(event){
//     event.preventDefault();

//     const takaOne = document.getElementById("taka-one").innerText;
//     const addMoney = Number(takaOne);
//     console.log(addMoney);
//     const inputMoney = document.getElementById("input-money").value;
//     const inputMoney1 = Number(inputMoney);
//     console.log(inputMoney1);
//     if(inputMoney1>=0){
//         const newBalance = addMoney + inputMoney1;
//         document.getElementById("taka-one").innerText = newBalance;
    
//     }
//     else{
//         alert("Invalid")
//     }
    
//     // main-balance code

//     const mainBalance = document.getElementById("main-balance").innerText
//     const mainBalance1 = Number(mainBalance);
//      if(mainBalance1 > inputMoney1){
//         const newBalance2 = mainBalance1 - inputMoney1;
//         document.getElementById("main-balance").innerText = newBalance2;

        
//      }
//      else{
//         alert("INVALID");
//      }
    
    
    
// });

    

    document.getElementById("donate")
    .addEventListener('click', function(event){
        event.preventDefault();

        const poysha = getInputTaka("taka-one");
        const poysha1 = getInputTaka1("input-money");
        const mainPoysha = getMainMoney("main-balance");
        

        
        if(poysha1 >= 0){
            
            const newBalance = poysha + poysha1;
           document.getElementById("taka-one").innerText = newBalance;
        
        //    adding transaction history
        const div = document.createElement("div");
        div.classList.add('bg-white');
        
        div.innerHTML = `

        <div class id="first-donation" = "border-2 shadow-lg">
        <P class = "font-semibold ml-8"> ${poysha1} Taka is Donated for famine-2024 at Feni, Bangladesh</P> 
        <p class = "ml-8 font-semibold text-opacity-[100%]"> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time) </p>
        </div>

        `
        document.getElementById('transaction-details').appendChild(div);
        

        }
        else{
            alert("Invalid");
        }

        // main-balance code

        if(poysha1 < mainPoysha)
            {
                if(poysha1 <= 0 ){
                    return 0;
                }
    
            const newBalance2 = mainPoysha - poysha1;
            document.getElementById("main-balance").innerText = newBalance2;

           
            
        }
        else{
            alert("do not have sufficient balance");
        }
        
    // 2nd banner javascript code

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

           const div = document.createElement("div");
           div.classList.add('bg-white');
           div.innerHTML = `
   
           <div id ="first-donation" class = "border-2 shadow-lg">
           <P class = "font-semibold ml-8"> ${poysha1} Taka is Donated for famine-2024 at Feni, Bangladesh</P> 

           </div>
   
           `
           document.getElementById('transaction-details').appendChild(div);
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
            alert("do not have sufficient balance");
        }
    
        

    })

    // 3rd banner javascript code

    document.getElementById("donate2")
    .addEventListener('click', function(event){
        event.preventDefault();
        const poysha = getInputTaka("taka-one2");
        const poysha1 = getInputTaka1("input-money2");
        const mainPoysha = getMainMoney("main-balance");
        if(poysha1 >= 0){
            
            const newBalance = poysha + poysha1;
           document.getElementById("taka-one1").innerText = newBalance;
           const div = document.createElement("div");
           div.classList.add('bg-white');
           div.innerHTML = `
   
           <div class = "border-2 shadow-lg">
           <P class = "font-semibold ml-8"> ${poysha1} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</P> 
           </div>
   
           `
           document.getElementById('transaction-details').appendChild(div);
           
           
        }
        else{
            alert("invalid type");
        }

        // main-balance code

        if(poysha1 < mainPoysha){
            const newBalance2 = mainPoysha - poysha1;
            document.getElementById("main-balance").innerText = newBalance2;
            
        }
        else{
            alert("do not have sufficient balance");
        }

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

    

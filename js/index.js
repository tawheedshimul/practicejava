//step1: create click button add event lister
//step2: get deposit amount from the deposit input field
//2-5 convert strind deposit amount to a number
// step 3: clear the deposit field after the value
//step-4: get the previous deposit total
//step-5 calculate new deposit total and set the value to the deposit total
//get current balance
//step-7 calculate new balance

document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value ;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //step-3: 
    depositField.value  = '';
    //step-4:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    
    depositTotalElement.innerText = newDepositTotal;   


    //mywork

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    //steep -7

    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})
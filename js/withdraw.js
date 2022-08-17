document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value ;
    const newWithdrawAmount = parseFloat(newWithdrawString);

    withdrawField.value ='';

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalString);

    const allAmountTk = newWithdrawAmount + withdrawTotalAmount;
    
    withdrawTotal.innerText = allAmountTk;

    //copycat from index.js

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    //steep -7

    const newBalanceTotal = previousBalanceTotalAmount - allAmountTk;
    balanceTotalElement.innerText = newBalanceTotal;
})
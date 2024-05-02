function checkEvenOrOdd(){
    var num=parseInt(document.getElementById('numberInput').value);
    var result=document.getElementById('result');
    result.textContent=num % 2 ===0 ? "It is an Even Number" :"It is an Odd Number"
}
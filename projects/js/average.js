let txtNumList = document.getElementById("txtNumList");
let sumOutput = document.getElementById("sumOutput");
let avgOutput = document.getElementById("avgOutput");

function splitString(){
    let inputString = txtNumList.value;
    let splitString = inputString.split(",");

    let sumVal = 0;
    let avgVal = 0;

    //console.log(splitString);

    for(let i = 0; i<splitString.length; i++){
        
        splitString[i] = parseInt(splitString[i]);
        sumVal += splitString[i];
    }
    //console.log(sumVal);
    sumOutput.innerHTML = "Sum: " + sumVal;
    avgVal = sumVal/splitString.length;
    //console.log(avgVal);
    avgOutput.innerHTML = "Average: " + avgVal;

    txtNumList.value = "";
}
let detected = document.getElementById("detected");
let txtWords = document.getElementById("txtWords");

function detectWords(){
    let inputString = txtWords.value;
    let splitString = inputString.split(" ");

    let numBadWords = 0;
    let badWordsList = ["clear", "water", "tires"]

    for(let i = 0; i<splitString.length; i++){
        for(let j = 0; j<badWordsList.length; j++){
            if(splitString[i]==badWordsList[j]){
                numBadWords += 1;
            }
        }
    }
    if (numBadWords == 0){
        detected.innerHTML = ("No bad words detected")
    }else{
        detected.innerHTML = ("Bad words detected: " + numBadWords)
    }

    txtWords.value = "";
}
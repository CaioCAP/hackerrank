process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var time = readLine();
    var timeVetor = [];
    timeVetor = time.split(":");
    if(time.includes("PM") && timeVetor[0] !=12 && parseInt(timeVetor[0])+12 < 24){
        time = time.replace("PM","");
        timeVetor = time.split(":");
        timeVetor[0] = parseInt(timeVetor[0])+12;
        timeVetor[0] = timeVetor[0].toString();
        timeVetor = timeVetor.join(":");
        console.log(timeVetor);
    }else if(time.includes("PM") && timeVetor[0] == 12){
        time = time.replace("PM","");
        console.log(time);
    }else if(time.includes("AM") && timeVetor[0] == 12){
        time = time.replace("AM","");
        timeVetor = time.split(":");
        timeVetor[0] = "00";
        timeVetor = timeVetor.join(":");
        console.log(timeVetor);
    }else{
        time = time.replace("AM","");
        console.log(time);
    }
}

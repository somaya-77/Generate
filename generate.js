let serial = document.querySelector(".serial");
let generate = document.querySelector(".generate");

generate.onclick = function(){
let serialNumber = "0123456789abcdefghjklmnopqsrtwvyxzQWERTYUIOPASDFGHJKLMNBVCXZ";
let contSerial = 10;
let newSerialNumber = "";
for(let i = 0; i < contSerial; i++){
    newSerialNumber += serialNumber[Math.floor(Math.random() * serialNumber.length)];
}
serial.innerHTML = newSerialNumber;
}



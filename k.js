var calc = document.createElement('div');
var display = document.createElement('div');
document.body.appendChild(calc);
calc.appendChild(display);
display.className = 'disp'
calc.style.width = '500px';
calc.style.height= '600px';
calc.style.padding = '5px';
display.style.width = '469px';
display.style.height= '60px';
display.style.margin = '5px';

var firstRow=["7","8","9","x",'4','5','6','/','1','2','3','-',',','0','=','+'];

for (var i=0; i<firstRow.length;i++){
var button = document.createElement('div');
button.innerText=firstRow[i];
calc.appendChild(button);
button.classList.add('buttonm');
button.id = "divid_";
button.addEventListener('click', getId, false);
}

function getId() {
    display.innerText= this.innerText;
}
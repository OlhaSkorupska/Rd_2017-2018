function showError (errorMessage) {

    const msgElem = document.getElementById("error");

    msgElem.style = "color: red";
    msgElem.innerHTML = errorMessage;

}

function showCalculateMessage (calculateMessage) {

    const msgElem = document.getElementById("error");

    msgElem.style = "color: green";
    msgElem.innerHTML = calculateMessage;

}

function cleaning () {

    document.getElementById("error").value = "";
    document.getElementById("number").value = "";

}

function getSingleDigit (form) {

    const value = form.elements.value.value;
    let sum = 0;
    let str = value;

    if (Number(value)) {

        while (String(value).length !== 1) {

            str += " -> ";
            for (let i = 0; i < value.length; i++) {

                sum += Number(value[i]);
                str += Number(value[i]);
                if (value.length - 1 !== i) {

                    str += " + ";
                
}
            
}
            value = String(sum);
            sum = 0;
            str = `${str  } = ${  value}`;
        
}
        showCalculateMessage(str);
    
} else {

        showError("The value is not a number");

}

}

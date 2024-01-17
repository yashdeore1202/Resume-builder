
function addNewWEField() {

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField () {

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

//generate CV

function generateCV() {

    let nameField = document.getElementById("nameField").value;
    
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    console.log("hi");
    
    document.getElementById("nameT2").innerHTML = nameField;

    // contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    // important Links
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    // objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    // we
    let wes = document.querySelectorAll(".weField");  //(option this or this) let wes = document.getElementsByClassName(".weField");

    let srt = "";

    for(let e of wes){
        srt += `<li>${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML = srt;

    // Academic qualification
    let aqs = document.querySelectorAll(".eqField");

    let str = "";

    for(let e of aqs){
        str += `<li>${e.value}</li>`;
    }

    document.getElementById("aqT").innerHTML = str;

    //img code
    let file = document.getElementById("imgField").files[0];

    let reader = new FileReader();

    // reader.readAsDataURL(file);

    reader.onloadend =  () => {
        document.getElementById("imgTemplete").src = reader.result;
    }

    document.getElementById("cv-form").style.display="none";
    document.getElementById('cv-templete').style.display="block";
}

function printCV(){
    window.print();
}
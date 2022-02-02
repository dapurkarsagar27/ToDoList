function firstUpdate() {
    title = document.getElementById('todolist').value;
    desc = document.getElementById('description').value;
    console.log("Updating List...");
    if (localStorage.getItem('itemsJson') == null) {
        array1 = [];
        array1.push([title, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(array1));
    }
    else {
        array2 = localStorage.getItem('itemsJson');
        array1 = JSON.parse(array2);
        array1.push([title, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(array1));
    }
    update();
}


function update() {
    title = document.getElementById('todolist').value;
    desc = document.getElementById('description').value;
    console.log("Updating List...");
    if (localStorage.getItem('itemsJson') == null) {
        array1 = [];
        localStorage.setItem('itemsJson', JSON.stringify(array1));
    }
    else {
        array2 = localStorage.getItem('itemsJson');
        array1 = JSON.parse(array2);
    }

    let body = document.getElementById("tablebody");
    let str = "";
    array1.forEach((element, index) => {
        str += `
        <tr>
        <td> ${index + 1} </td>
        <td> ${element[0]} </td>
        <td> ${element[1]} </td>
        <td><button id="donebtn" onclick="deleted(${index})">Done!</button></td>
        </tr>
        `
    });
    body.innerHTML = str;
}


add = document.getElementById('add');
add.addEventListener("click", firstUpdate);
update();

function deleted(indexno) {
    console.log("Deleted", indexno);
    array2 = localStorage.getItem('itemsJson');
    array1 = JSON.parse(array2);
    array1.splice(indexno, 1);
    localStorage.setItem('itemsJson', JSON.stringify(array1));
    update();
    confirmation()
}

function confirmation(){
    if (alert("Are you sure you're done ?")){
        deleted();
    }
}
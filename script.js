var editRow = null;
function onFormSubmit(){
    var formData = readData();

    if(editRow == null){
        var table = document.getElementById("tbdata").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = formData.name;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = formData.age;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = formData.phone;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = formData.gender;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = '<button type="button" onClick="onDelete(this)" class="btn btn-danger">Delete</button> &nbsp   <button type="button" onClick="onEdit(this)" class="btn btn-primary">Edit</button>';
  
    }
    else {
        editRow.cells[0].innerHTML = formData.name;
        editRow.cells[1].innerHTML = formData.age;
        editRow.cells[2].innerHTML = formData.phone;
        editRow.cells[3].innerHTML = formData.gender;
    }
   

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender").value = "";
    editRow = null;
    
};

function readData(){
    var data = {};
    data["name"] = document.getElementById("name").value;
    data["age"] = document.getElementById("age").value;
    data["phone"] = document.getElementById("phone").value;
    data["gender"] = document.getElementById("gender").value;
    return data;
}

function onEdit(cell){
    editRow = cell.parentElement.parentElement;
    document.getElementById("name").value = editRow.cells[0].innerHTML;
    document.getElementById("age").value = editRow.cells[1].innerHTML;
    document.getElementById("phone").value = editRow.cells[2].innerHTML;
    document.getElementById("gender").value = editRow.cells[3].innerHTML;
}

function onDelete(cell){
    delRow = cell.parentElement.parentElement;
    document.getElementById("tbdata").deleteRow(delRow.rowIndex);

}

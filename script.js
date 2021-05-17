var editRow = null;
function onFormSubmit(){
    var formData = readData();

    if(editRow == null){
        var table = document.getElementById("tbdata").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        newRow.insertCell(0).innerHTML = formData.name;
        newRow.insertCell(1).innerHTML = formData.age;
        newRow.insertCell(2).innerHTML = formData.phone;
        newRow.insertCell(3).innerHTML = formData.gender;
        newRow.insertCell(4).innerHTML = '<button type="button" onClick="onDelete(this)" class="btn btn-danger">Delete</button> &nbsp   <button type="button" onClick="onEdit(this)" class="btn btn-primary">Edit</button>';
  
    }
    else {
        editRow.cells[0].innerHTML = formData.name;
        editRow.cells[1].innerHTML = formData.age;
        editRow.cells[2].innerHTML = formData.phone;
        editRow.cells[3].innerHTML = formData.gender;
    }
   

    resetFields();
    
}

function resetFields(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender").value = "";
    editRow = null;
}

function readData(){
    var frmdata = {};
    frmdata["name"] = document.getElementById("name").value;
    frmdata["age"] = document.getElementById("age").value;
    frmdata["phone"] = document.getElementById("phone").value;
    frmdata["gender"] = document.getElementById("gender").value;
    return frmdata;
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

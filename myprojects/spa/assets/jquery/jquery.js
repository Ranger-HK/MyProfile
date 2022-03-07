// customer

// add customer
$("#btnAdd").click(function (){

    let customerId=$("#txtCusID").val();
    let customerName=$("#txtCusName").val();
    let customerAddress=$("#txtCusAddress").val();
    let customerTP=$("#txtCusTP").val();

    var customerOB={
        id:customerId,
        name:customerName,
        address:customerAddress,
        telephoneNumber:customerTP
    };
    customerDB.push(customerOB);
    loadAllCustomer();
    clearFiled();

    // textfiled click set
    $("#tbltBody>tr").click(function (){
        let customerId=$(this).children(":eq(0)").text();
        let customerName=$(this).children(":eq(1)").text();
        let customerAddress=$(this).children(":eq(2)").text();
        let customerTP=$(this).children(":eq(3)").text();

        $("#txtCusID").val(customerId);
        $("#txtCusName").val(customerName);
        $("#txtCusAddress").val(customerAddress);
        $("#txtCusTP").val(customerTP);
    });


});

// table load
function loadAllCustomer(){
    $("#tbltBody").empty();
    for (var i of customerDB){
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.telephoneNumber}</td></tr>`
        $("#tbltBody").append(row);

    }
}
// ClearMethod
function clearFiled(){
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").val("");
}


// searchCustomer
$("#btnSearch").click(function (){
    var searchId = $("#txtSearch").val();
    var response = searchCustomer(searchId);
    if (response){
        $("#txtCusID").val(response.id);
        $("#txtCusName").val(response.name);
        $("#txtCusAddress").val(response.address);
        $("#txtCusTP").val(response.telephoneNumber);
    }else {
        clearFiled();
        alert("Invalid Customer Name");
    }
});

function searchCustomer(id){
    for (let i = 0 ; i < customerDB.length; i++){
        if (customerDB[i].id==id){
            return customerDB[i];
        }
    }
}
//text fields focusing
$("#txtCusID").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusName").focus();
    }
});

$("#txtCusName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusAddress").focus();
    }
});

$("#txtCusAddress").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusTP").focus();
    }
});


// Item


// add customer
$("#btnItemAdd").click(function (){

    let customerId=$("#txtCusID").val();
    let customerName=$("#txtCusName").val();
    let customerAddress=$("#txtCusAddress").val();
    let customerTP=$("#txtCusTP").val();

    var customerOB={
        id:customerId,
        name:customerName,
        address:customerAddress,
        telephoneNumber:customerTP
    };
    customerDB.push(customerOB);
    loadAllCustomer();
    clearFiled();

    // textfiled click set
    $("#tbltBody>tr").click(function (){
        let customerId=$(this).children(":eq(0)").text();
        let customerName=$(this).children(":eq(1)").text();
        let customerAddress=$(this).children(":eq(2)").text();
        let customerTP=$(this).children(":eq(3)").text();

        $("#txtCusID").val(customerId);
        $("#txtCusName").val(customerName);
        $("#txtCusAddress").val(customerAddress);
        $("#txtCusTP").val(customerTP);
    });


});

// table load
function loadAllCustomer(){
    $("#tbltBody").empty();
    for (var i of customerDB){
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.telephoneNumber}</td></tr>`
        $("#tbltBody").append(row);

    }
}
// ClearMethod
function clearFiled(){
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").val("");
}


// searchCustomer
$("#btnSearch").click(function (){
    var searchId = $("#txtSearch").val();
    var response = searchCustomer(searchId);
    if (response){
        $("#txtCusID").val(response.id);
        $("#txtCusName").val(response.name);
        $("#txtCusAddress").val(response.address);
        $("#txtCusTP").val(response.telephoneNumber);
    }else {
        clearFiled();
        alert("Invalid Customer Name");
    }
});

function searchCustomer(id){
    for (let i = 0 ; i < customerDB.length; i++){
        if (customerDB[i].id==id){
            return customerDB[i];
        }
    }
}
//text fields focusing
$("#txtCusID").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusName").focus();
    }
});

$("#txtCusName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusAddress").focus();
    }
});

$("#txtCusAddress").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusTP").focus();
    }
});
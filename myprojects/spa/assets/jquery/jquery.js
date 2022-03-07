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

// add
$("#btnItemAdd").click(function (){

    let itemId=$("#txtItemID").val();
    let itemName=$("#txtItemName").val();
    let itemQty=$("#txtItemQty").val();
    let itemPrice=$("#txtItemPrice").val();

    var itemOB={
        id:itemId,
        name:itemName,
        qty:itemQty,
        price:itemPrice
    };
    itemDB.push(itemOB);
    loadAllItem();
    clearFiled();

    // textfiled click set
    $("#tbltBodyItem>tr").click(function (){
        let itemId=$(this).children(":eq(0)").text();
        let itemName=$(this).children(":eq(1)").text();
        let itemQty=$(this).children(":eq(2)").text();
        let itemPrice=$(this).children(":eq(3)").text();

        $("#txtItemID").val(itemId);
        $("#txtItemName").val(itemName);
        $("#txtItemQty").val(itemQty);
        $("#txtItemPrice").val(itemPrice);
    });

});

// table load
function loadAllItem(){
    $("#tbltBodyItem").empty();
    for (var i of itemDB){
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.Qty}</td><td>${i.Price}</td></tr>`
        $("#tbltBodyItem").append(row);

    }
}
// ClearMethod
function clearFiled(){
    $("#txtItemID,#txtItemName,#txtItemQty,#txtItemPrice").val("");
}


// searchCustomer
$("#btnItemSearch").click(function (){
    var searchId = $("#txtSearchItem").val();
    var response = searchItem(searchId);
    if (response){
        $("#txtItemID").val(response.id);
        $("#txtItemName").val(response.name);
        $("#txtItemQty").val(response.qty);
        $("#txtItemPrice").val(response.price);
    }else {
        clearFiled();
        alert("Invalid Item Name");
    }
});

function searchItem(id){
    for (let i = 0 ; i < itemDB.length; i++){
        if (itemDB[i].id==id){
            return itemDB[i];
        }
    }
}
//text fields focusing
$("#txtItemID").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemName").focus();
    }
});

$("#txtItemName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemQty").focus();
    }
});

$("#txtItemQty").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemPrice").focus();
    }
});
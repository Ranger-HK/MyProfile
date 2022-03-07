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

function clearFiled(){
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").val("");
}


// searchCustomer
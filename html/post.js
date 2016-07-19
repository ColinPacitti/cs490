/**
 * Created by Colin on 2016-07-19.
 */
function postSale() {
    var nameVal = document.getElementById('product').value;
        quantityVal = document.getElementById('dollars').value;
        amountVal = document.getElementById('quantity').value;
        customerVal = document.getElementById('customer').value;
        receivedVal = document.getElementById('received').value;
        salesmanVal = document.getElementById('salesman').value;
    $.post("http://afternoon-basin-47187.herokuapp.com/sales/sale",
        {
            name: nameVal,
            quantity: quantityVal,
            amount: amountVal,
            customer: customerVal,
            received: receivedVal,
            salesperson: salesmanVal
        });
}

function postMarkSale() {
    var idVal = document.getElementById('saleid').value;
        salesmanVal = document.getElementById('salesman').value;
    $.post("http://afternoon-basin-47187.herokuapp.com/sales/received",
        {
            sale_id: idVal,
            salesperson: salesmanVal
        });
}

function postNewCustomer() {
    var nameVal = document.getElementById('customerName').value;
        emailVal = document.getElementById('customerEmail').value;
        billingVal = document.getElementById('customerBilling').value;
        shippingVal = document.getElementById('customerShipping').value;
        creditVal = document.getElementById('customerCredit').value;
        ccvVal = document.getElementById('customerCCV').value;
        salesmanVal = document.getElementById('salesman').value;
    $.post("http://afternoon-basin-47187.herokuapp.com/sales/customer",
        {
            name: nameVal,
            email: emailVal,
            billing_addr: billingVal,
            shipping_addr: shippingVal,
            credit_num: creditVal,
            credit_ccv: ccvVal,
            salesperson: salesmanVal
        });
}

function postNewCampaign() {
    var nameVal = document.getElementById('nameMarketing').value;
        typeVal = document.getElementById('typeMarketing').value;
        plannerVal = document.getElementById('planner').value;
    $.post("http://afternoon-basin-47187.herokuapp.com/marketing/campaign",
        {
            name: nameVal,
            type: typeVal,
            planner: plannerVal
        });
}

function campaignFeedback() {
    var nameVal = document.getElementById('nameFeedback').value;
    customerVal = document.getElementById('customerFeedback').value;
    plannerVal = document.getElementById('planner').value;
    deletedVal = document.getElementById('deleted').value;
    openedVal = document.getElementById('opened').value;
    staytimeVal = document.getElementById('staytime').value;
    $.post("http://afternoon-basin-47187.herokuapp.com/marketing/feedback",
        {
            name: nameVal,
            customer: customerVal,
            planner: plannerVal,
            deleted: deletedVal,
            opened: openedVal,
            stay_time: staytimeVal
        });
}

function disableSales(){
    document.getElementById('salesman').disabled = true;
    $('#salesman').css('background-color' , '#DEDEDE')
}

function disablePlanner(){
    document.getElementById('planner').disabled = true;
    $('#planner').css('background-color' , '#DEDEDE')
}
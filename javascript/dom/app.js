
function showTime()
{
    let div = document.getElementById("myDiv")
    div.innerHTML = `The time is ${new Date}`;
}   
function showMessage(ctrl, msg)
{
ctrl.innerHTML = msg;
}
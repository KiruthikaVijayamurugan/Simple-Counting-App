function increase(){
    let count = parseInt(document.getElementById("count").innerHTML)
    let increase = count +1;
    // console.log(increase)
    document.getElementById("count").innerHTML = increase;
}
function decrease(){
    let count = parseInt(document.getElementById("count").innerHTML)
    let decrease = count -1;
    // console.log(decrease)
    document.getElementById("count").innerHTML = decrease;
}
function reset(){
    let count = 0
    document.getElementById("count").innerHTML = count;
}
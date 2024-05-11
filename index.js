function user(val){
document.getElementById("result").value+=val;
}

function clr()
{
    document.getElementById("result").value="";
}

function back()
{
var back=document.getElementById("result").value;
var res=back.slice(0,-1);
document.getElementById("result").value=res;
}

function finalres()
{
    let a=document.getElementById("result").value;
    let b=eval(a);

    document.getElementById("result").value=b;
}

function sqr()
{
    let num=document.getElementById("result").value;
    let res=Math.pow(num,2)
    document.getElementById("result").value=res;
}

function sqrroot()
{
    let num=document.getElementById("result").value;
    let res=Math.sqrt(num)
    document.getElementById("result").value=res
}
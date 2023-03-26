
function na(s) {
  document.getElementById('big').value+=s
 // document.getElementById('big').innerHTML+=s
}

function cal(params) {
   var d=document.getElementById('big').value
   var y=eval(d)
   document.getElementById('big').value=y
}

//function cle(params) {
  //  document.getElementById('big').value=''
//}
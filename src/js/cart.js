var order=[]
function getflavour(el){   
    var flavour=localStorage.setItem('flavour',el.getAttribute('value'))
    var qty=localStorage.setItem('qty',Number(prompt()))
    location.href='cart.html'

}
function getorder(){
    var table=document.getElementById('cart')
    var rowCount = table.rows.length; 
    var tr=table.insertRow(rowCount-2)
    var td1=tr.insertCell()
    var td2=tr.insertCell()
    var td3=tr.insertCell()
    var td4=tr.insertCell()
    td1.innerHTML=localStorage.getItem('flavour')
    td2.innerHTML=localStorage.getItem('qty')
    if (localStorage.getItem('flavour')=='SPECIAL'){
        td3.innerHTML= Number(25)
    }
    else{
        td3.innerHTML= Number(20)
    }    
    td4.innerHTML=Number(td2.innerHTML*td3.innerHTML)
    order.push(tr)   
}
function submit(){
    localStorage.clear()
    location.href='menu.html'
}
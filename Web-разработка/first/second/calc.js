function calc(){
    let f1=document.getElementsByName("kol-vo");
    let f2=document.getElementsByName("price");
    f1[0].value = parseInt(f1[0].value, 10);
    f2[0].value = parseInt(f2[0].value, 10);
    const rub = "₽";
    if (isNaN(f1[0].value) || isNaN(f2[0].value)) {
        alert("Параметры введены некорректно");
        return false;
    }
    if (delivery.checked){
        delivery.value=800;
    }
    else{
        delivery.value=0;
    }
    let res = (f1[0].value * f2[0].value + Number(delivery.value)+" "+rub);
    out.innerHTML=res;
    alert(res);
}
window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button");
    b.addEventListener("click", calc);
});

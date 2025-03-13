
function Login(){
         Usuario= document.getElementById("Usuario").value;
         Clave = document.getElementById("Clave").value;
    if (Usuario=="David" && Clave=="Negro123"){
        localStorage.clear();
        alert("Inicio de sesion exitoso");
        window.location="shopping 2.html";
    }else{
        alert("Usuario o contraseña incorrecto");
    }if(Usuario=='' && Clave==''){
        alert("Los campos se tiene que llenar");
        
    }
    }
function VerCarrito(){
    window.location="shopping 3.html";
}
function Carrito1(){
    let Cantidad1=document.getElementById('Cantidad1').value;
    localStorage.setItem('CantidadEnCarrito1', Cantidad1);
    alert('Agregado Al Carrito');
    if (Cantidad1 !== null) {
        document.getElementById('Cantidad1').innerText = 'Cantidad' + Cantidad1;
    } else {
        document.getElementById('Cantidad1').innerText = 0;
    }

}
function Carrito2(){
    let Cantidad2=document.getElementById('Cantidad2').value;
    localStorage.setItem('CantidadEnCarrito2', Cantidad2);
    alert('Agregado Al Carrito');
}
function Carrito3(){
    let Cantidad3=document.getElementById('Cantidad3').value;
    localStorage.setItem('CantidadEnCarrito3', Cantidad3);
    alert('Agregado Al Carrito');
}
function Carrito4(){
    let Cantidad4=document.getElementById('Cantidad4').value;
    localStorage.setItem('CantidadEnCarrito4', Cantidad4);
    alert('Agregado Al Carrito');
}
function Carrito5(){
    let Cantidad5=document.getElementById('Cantidad5').value;
    localStorage.setItem('CantidadEnCarrito5', Cantidad5);
    alert('Agregado Al Carrito');
}
    function Carrito6(){
    let Cantidad6=document.getElementById('Cantidad6').value;
    localStorage.setItem('CantidadEnCarrito6', Cantidad6);
    alert('Agregado Al Carrito');
}
function Carrito7(){
    let Cantidad7=document.getElementById('Cantidad7').value;
    localStorage.setItem('CantidadEnCarrito7', Cantidad7);
    alert('Agregado Al Carrito');
}
function Carrito8(){
    let Cantidad8=document.getElementById('Cantidad8').value;
    localStorage.setItem('CantidadEnCarrito8', Cantidad8);
    alert('Agregado Al Carrito');
}
function Carrito9(){
    let Cantidad9=document.getElementById('Cantidad9').value;
    localStorage.setItem('CantidadEnCarrito9', Cantidad9);
    alert('Agregado Al Carrito');
}
function Carrito10(){
    let Cantidad10=document.getElementById('Cantidad10').value;
    localStorage.setItem('CantidadEnCarrito10', Cantidad10);
    alert('Agregado Al Carrito');
}
function Carrito11(){
    let Cantidad11=document.getElementById('Cantidad11').value;
    localStorage.setItem('CantidadEnCarrito11', Cantidad11);
    alert('Agregado Al Carrito');
}
function Carrito12(){
    let Cantidad12=document.getElementById('Cantidad12').value;
    localStorage.setItem('CantidadEnCarrito12', Cantidad12);
    alert('Agregado Al Carrito');
}
function Carrito13(){
    let Cantidad13=document.getElementById('Cantidad13').value;
    localStorage.setItem('CantidadEnCarrito13', Cantidad13);
    alert('Agregado Al Carrito');
}
function Carrito14(){
    let Cantidad14=document.getElementById('Cantidad14').value;
    localStorage.setItem('CantidadEnCarrito14', Cantidad14);
    alert('Agregado Al Carrito');
}
function Carrito15(){
    let Cantidad15=document.getElementById('Cantidad15').value;
    localStorage.setItem('CantidadEnCarrito15', Cantidad15);
    alert('Agregado Al Carrito');
}
function Carrito16(){
    let Cantidad16=document.getElementById('Cantidad16').value;
    localStorage.setItem('CantidadEnCarrito16', Cantidad16);
    alert('Agregado Al Carrito');
}
function Carrito17(){
    let Cantidad17=document.getElementById('Cantidad17').value;
    localStorage.setItem('CantidadEnCarrito17', Cantidad17);
    alert('Agregado Al Carrito');
}
function Carrito18(){
    let Cantidad18=document.getElementById('Cantidad18').value;
    localStorage.setItem('CantidadEnCarrito18', Cantidad18);
    alert('Agregado Al Carrito');
}
function Carrito19(){
    let Cantidad19=document.getElementById('Cantidad19').value;
    localStorage.setItem('CantidadEnCarrito19', Cantidad19);
    alert('Agregado Al Carrito');
}
function Carrito20(){
    let Cantidad20=document.getElementById('Cantidad20').value;
    localStorage.setItem('CantidadEnCarrito20', Cantidad20);
    alert('Agregado Al Carrito');
}
function Compra(){
    alert('Seras redirigido a una pagina para proceder la compra se te pediran los datos de tu tarjeta');
    window.location="shopping 4.html";
}
function Comprar(){
    alert('Compra exitosa, su paquete llegara en 4 dias habiles');
}



let producto = document.getElementById("producto");
let producto1 = document.getElementById("producto1");
let precio = document.getElementById("precio");
let precio1 = document.getElementById("precio1");
let agregar = document.getElementById("btn-agregar")
let agregar1 = document.getElementById("btn-agregar1")
let totales = document.getElementById("totales");
let totales1 = document.getElementById("totales1");
let totales2 = document.getElementById("totales2");
let productos: string[] = [];
let productos1: string[] = [];
let precios: number []= [];
let precios1: number []= [];
let suma: number = 0;
let suma1: number = 0;
let suma2: number = 0;
let vaciar = document.getElementById("vaciar");
//metodo push para arreglos


const agregarAlCarrito = () => {
    productos.push(producto.value)
    precios.push(Number(precio.value));
   
  lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;

suma = 0;
    for (let i: number=0; i < precios.length; i++){
      suma += Number(precios[i]);
    }
    totales?.innerHTML=suma; 
    totales2?.innerHTML=suma + suma1;
    }


const agregarAlCarrito1 = () => {
    productos1.push(producto1.value1);
    precios1.push(Number(precio1.value));

  lista1?.innerHTML += `<li>${producto1.value} : $${precio1.value}</li>`;

 suma1 = 0;
      for (let i: number=0; i < precios1.length; i++){
        suma1 += Number(precios1[i]);      
     }
     totales1?.innerHTML=suma1; 
    
    totales2?.innerHTML=suma + suma1;
}

const vaciarLista = () => {
 lista?.innerHTML = "";
 lista1?.innerHTML = ""; 
 totales?.innerHTML = "";
 totales1?.innerHTML = "";
 totales2?.innerHTML= "";
  }
agregar?.addEventListener("click", agregarAlCarrito);
agregar1?.addEventListener("click", agregarAlCarrito1);
vaciar?.addEventListener("click", vaciarLista);

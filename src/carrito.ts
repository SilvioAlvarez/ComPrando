let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let calcular = document.getElementById("btn-calcular");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let productos: string[] = [];
let precios: number []= [];
let suma: number = 0;
let vaciar = document.getElementById("vaciar");
//metodo push para arreglos

const agregarAlCarrito = () => {
    productos.push(producto.value);
    precios.push(Number(precio.value));

  lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;

    producto.value = "";
    precio.value = "";
}
const calcularTotal = () => {
suma = 0;
    for (let i: number=0; i < precios.length; i++){
      suma += Number(precios[i]);
      
    }
           total?.innerHTML = suma; 

}
const vaciarLista = () => {
  lista?.innerHTML = "";
  total?.innerHTML = "";
  }
agregar?.addEventListener("click", agregarAlCarrito);
calcular?.addEventListener("click", calcularTotal);
vaciar?.addEventListener("click", vaciarLista);




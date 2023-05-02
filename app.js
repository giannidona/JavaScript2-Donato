const productos = [
  {
    id: 1,
    productName: "Iphone 14",
    price: 1500,
  },
  {
    id: 2,
    productName: "Silicone Case",
    price: 50,
  },
  {
    id: 3,
    productName: "Airpods",
    price: 250,
  },
];

alert(`Nuestros productos son los siguientes:
  Iphone 14
  Silicone Case
  Airpods`);

let carrito = [];
let total = 0;

function ticket() {
  let entradaProducto = prompt(
    "¿Qué producto desea comprar? (Ingrese SALIR para finalizar la compra)"
  );

  while (entradaProducto.toUpperCase() !== "SALIR") {
    const productoSeleccionado = productos.find(
      (producto) =>
        producto.productName.toLowerCase() === entradaProducto.toLowerCase()
    );
    if (!productoSeleccionado) {
      // si el producto ingresado no se encuntra salta este cartel
      alert(
        "El producto ingresado no está disponible. Por favor, ingrese otro producto."
      );
    } else {
      // si el producto ingresado se encuentra salta este cartel y se suma el precio
      carrito.push(productoSeleccionado);
      alert(
        `Producto agregado al carrito: ${productoSeleccionado.productName}`
      );
      total += productoSeleccionado.price;
    }
    entradaProducto = prompt(
      "¿Qué producto desea comprar? (Ingrese SALIR para finalizar la compra)"
    );
  }

  if (carrito.length === 0) {
    alert(
      "No se ha agregado ningún producto al carrito. Gracias por visitarnos."
    );
  } else {
    // muestra el ticket ya con todos los productos ingresados y su total
    alert(`Carrito de compras:
    ${carrito.map((producto) => producto.productName).join(", ")}
    Total: $${total}`);
  }
}

ticket();

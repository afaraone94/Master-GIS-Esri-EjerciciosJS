"use strict";

class cliente {
    constructor(nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    };
};

class elemento {
    constructor(descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    };
};

class factura {
    constructor(cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;
        this.informacion = {
            baseImponible: 0,
            iva: 21,
            total: 0,
            formaPago: "contado"
        };
            for (var i = 0; i < this.elementos.length; i++) {
                this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
            }
            this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));

        console.log("A pagar: " + this.informacion.total + " euros")
    };
};


var client = new cliente("Pedro", "Avenida Italia", "666666666", "456534542Y");
var elements = [new elemento("Manzanas", "7", "0.3"), new elemento("Peras", "5", "0.2")];
var laFactura = new factura(client, elements);
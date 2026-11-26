import { describe, it, expect, beforeEach, vi } from "vitest";

let productService;

// Producto de prueba
const productoCatalogo = {
  id: "AC009",
  nombre: "Soporte Guitarra de Piso",
  categoria: "Accesorios",
  categoriaSlug: "accesorios",
  marca: "Hercules",
  modelo: "GS302B",
  stock: 2,
  precio: 10990,
  descripcion: "Soporte plegable con enganche automático.",
  imagen: "/productos/accesorios/ac009.png",
};

// Se ejecuta antes de cada prueba
beforeEach(async () => {
  vi.resetModules(); // Resetea la lista de productos
  const modulo = await import("./productService"); // Se ejecuta luego de  resetear
  productService = modulo.productService;
});

describe("Pruebas unitarias de productService", () => {
  it("1. getAll | Obtiene los productos del catálogo", () => {
    const productos = productService.getAll();

    expect(Array.isArray(productos)).toBe(true);
    expect(productos.length).toBeGreaterThan(0);
  });

  it("2. create | Crea un producto con los datos del catálogo", () => {
    const nuevoProducto = productService.create({
      ...productoCatalogo,
    });

    expect(nuevoProducto.nombre).toBe("Soporte Guitarra de Piso");
    expect(nuevoProducto.marca).toBe("Hercules");
    expect(nuevoProducto.modelo).toBe("GS302B");
    expect(nuevoProducto.id).toBeDefined();
  });

  it("3. update | Modifica el stock y precio de un producto", () => {
    const productoCreado = productService.create({
      ...productoCatalogo,
      nombre: productoCatalogo.nombre,
      precio: productoCatalogo.precio,
    });

    const productoActualizado = productService.update(productoCreado.id, {
      ...productoCreado,
      stock: 8,
      precio: 24990,
    });

    expect(productoActualizado.stock).toBe(8);
    expect(productoActualizado.precio).toBe(24990);
    expect(productService.getAll()[0]).toEqual(productoActualizado);
  });

  it("4. delete | Elimina un producto del catálogo", () => {
    const productoCreado = productService.create({
      ...productoCatalogo,
    });

    productService.delete(productoCreado.id);

    const productosRestantes = productService.getAll();

    expect(
      productosRestantes.some((producto) => producto.id === productoCreado.id),
    ).toBe(false);
  });
});

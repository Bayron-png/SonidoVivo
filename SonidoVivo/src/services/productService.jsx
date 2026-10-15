import productosData from '../data/productosData';

let productsList = [productosData];

export const productService = {
  getAll: () => {
    return productsList;
  },

  create: (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now().toString(),
      price: Number(productData.price),
      stock: Number(productData.stock)
    };
    productsList = [newProduct, ...productsList];
    return newProduct;
  },

  update: (id, productData) => {
    const index = productsList.findIndex((p) => String(p.id) === String(id));
    if (index === -1) throw new Error('Producto no encontrado');

    const updatedProduct = {
      ...productsList[index],
      ...productData,
      price: Number(productData.price),
      stock: Number(productData.stock)
    };
    productsList[index] = updatedProduct;
    return updatedProduct;
  },

  delete: (id) => {
    productsList = productsList.filter((p) => String(p.id) !== String(id));
    return id;
  }
};
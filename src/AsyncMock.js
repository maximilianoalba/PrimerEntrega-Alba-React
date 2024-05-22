const productos = [
  {
    id: 1,
    categoria: "PCEscritorio",
    titulo: "Pc AMD gamers",
    descripcion:
      "Desktop Gamer AMD Ryzen 9 7950X3D 32GB 2TB SSD GeForceNVIDIA RTX 4090",
    precio: 200000,
    img: "https://assets.pcfactory.cl/public/foto/49037/1_200.jpg?t=1714452456575",
    stock: 4,
  },
  {
    id: 2,
    categoria: "PCEscritorio",
    titulo: "Pc INTEL gamer ",
    descripcion:
      "Desktop Alienware DT Aurora R15 Intel i9-13900KF 32GB 1TB NVIDIA RTX 4090 + Monitor Alienware 25 ",
    precio: 250000,
    img: "https://assets.pcfactory.cl/public/foto/50845/1_200.jpg?t=1714454779168",
    stock: 2,
  },
  {
    id: 3,
    categoria: "Notebook",
    titulo: "Notebook ASUS ",
    descripcion:
      "Notebook Gamer ROG Strix SCAR 18 Intel Core i9 14900HX NVIDIA GeForce RTX 4090 18.0 WQXGA 240Hz 32GB RAM 2TB G834JYR-R6134w",
    precio: 350000,
    img: "https://assets.pcfactory.cl/public/foto/51459/1_1000.jpg?t=1714455946704",
    stock: 2,
  },

  {
    id: 4,
    categoria: "Notebook",
    titulo: "Notebook ASUS ",
    descripcion:
      "Notebook Gamer ROG Zephyrus G16 GU605 Intel Core Ultra 9 185H 16 Núcleos NVIDIA GeForce RTX 4070 8GB 16 WQXGA 240Hz 32GB RAM 1TB GU605MI-QR044W",
    precio: 450000,
    img: "https://assets.pcfactory.cl/public/foto/51459/1_1000.jpg?t=1714455946704",
    stock: 3,
  },
  
];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});


export const getProduct = (id) => {
  return productos.find((prod) => prod.id == id);
};



export const getCategory = (category) => {
  return new Promise((resolve) => {
    const result = productos.filter((prod) => prod.categoria === category);
    resolve(result);
  });
};
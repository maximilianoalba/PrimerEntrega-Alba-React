const productos = [
  {
    id: 1,
    categoria: "PcEscritorio",
    titulo: "Pc AMD gamers",
    descripcion:
      "Desktop Gamer AMD Ryzen 9 7950X3D 32GB 2TB SSD GeForceNVIDIA RTX 4090",
    precio: 200000,
    img: "https://assets.pcfactory.cl/public/foto/49037/1_200.jpg?t=1714452456575",
    stock: 5,
  },
  {
    id: 2,
    categoria: "PcEscritorio",
    titulo: "Pc INTEL gamer ",
    descripcion:
      "Desktop Alienware DT Aurora R15 Intel i9-13900KF 32GB 1TB NVIDIA RTX 4090 + Monitor Alienware 25 ",
    precio: 250000,
    img: "https://assets.pcfactory.cl/public/foto/50845/1_200.jpg?t=1714454779168",
    stock: 2,
  },
  {
    id: 3,
    categoria: "PcEscritorio",
    titulo: "Pc INTEL gamers",
    descripcion:
      "Desktop Gamer Intel i7-11700K 16GB 480GB SSD TUF RTX3060Ti 8GB",
    precio: 250000,
    img: "https://assets.pcfactory.cl/public/foto/46218/1_1000.jpg?t=1715029244841",
    stock: 4,
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
  {
    id: 5,
    categoria: "Notebook",
    titulo: "Notebook ASUS ",
    descripcion:
      "Notebook Gamer ROG Strix SCAR 18 Intel Core i9 14900HX NVIDIA GeForce RTX 4090 18.0 WQXGA 240Hz 32GB RAM 2TB G834JYR-R6134w",
    precio: 350000,
    img: "https://assets.pcfactory.cl/public/foto/51459/1_1000.jpg?t=1714455946704",
    stock: 2,
  },

  {
    id: 6,
    categoria: "Notebook",
    titulo: "Notebook AMD ",
    descripcion:
      "Notebook Gamer TUF A15 AMD Ryzen 5 7535HS NVIDIA GeForce RTX 2050 15.6 FHD 144Hz 8GB RAM 512 SSD FA506NF-HN003W",
    precio: 450000,
    img: "https://assets.pcfactory.cl/public/foto/51462/1_1000.jpg?t=1715948586793",
    stock: 3,
  },

  {
    id: 7,
    categoria: "Monitores",
    titulo: "AOC® ",
    descripcion:
      "Monitor 20 HD+, Panel TN, 60Hz (20E1H)",
    precio: 40000,
    img: "https://assets.pcfactory.cl/public/foto/48279/1_1000.jpg?t=1715948578464",
    stock: 3,
  },
  {
    id: 8,
    categoria: "Monitores",
    titulo: "Asus® ",
    descripcion:
      "Monitor Gamer 49  Curvo ROG Strix - DualQHD, Panel VA, 165Hz, AdaptiveSync, HDR400 (USB-C) (KVM) (32:9) (XG49WCR)",
    precio: 150000,
    img: "https://assets.pcfactory.cl/public/foto/51313/1_1000.jpg?t=1714455606946",
    stock: 3,
  },
  {
    id: 9,
    categoria: "Monitores",
    titulo: "Corsair® ",
    descripcion:
      "Monitor Gamer 45 Xeneon Flex - WQHD, Panel OLED, 240Hz(0.03ms), G-Sync y FreeSync Premium, HDR10 (21:9) (CM-9030001-NA)",
    precio: 250000,
    img: "https://assets.pcfactory.cl/public/foto/51772/1_1000.jpg?t=1716225349919",
    stock: 3,
  },
  {
    id: 10,
    categoria: "OutletTecnologico",
    titulo: "Thule®",
    descripcion:
      "Mochila para notebook 15,6 21L Negro",
    precio: 20000,
    img: "https://assets.pcfactory.cl/public/foto/50544/1_1000.jpg?t=1714454271261",
    stock: 2,
  },
  {
    id: 11,
    categoria: "OutletTecnologico",
    titulo: "Apple® ",
    descripcion:
      "iPad Pro 12,9 (6a Generación, Wi-Fi, 2 TB, M2) - Gris espacial",
    precio: 75000,
    img: "https://assets.pcfactory.cl/public/foto/47308/1_1000.jpg?t=1714448347993",
    stock: 1,
  },
  {
    id: 12,
    categoria: "Accesorios",
    titulo: "Trust® Combo Teclado",
    descripcion:
      "MousePad GXT 1180RW Negro + Audífonos + Mouse + Teclado",
    precio: 15000,
    img: "https://assets.pcfactory.cl/public/foto/50395/1_1000.jpg?t=1715098866899",
    stock: 3,
  },
  {
    id: 13,
    categoria: "Accesorios",
    titulo: "Corsair® Combo Teclado",
    descripcion:
      "Combo Teclado Gamer K55 Inglés + Mouse Gamer Harpoon RGB LED USB",
    precio: 76000,
    img: "https://assets.pcfactory.cl/public/foto/35965/1_1000.jpg?t=1714433996665",
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
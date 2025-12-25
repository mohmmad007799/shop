

//لتحميل المنتجات


const STORE_KEY = "APP_PRODUCTS";

function loadProducts() {
  return JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
}

function saveProducts(products) {
  localStorage.setItem(STORE_KEY, JSON.stringify(products));
}

function addProduct(product) {
  const products = loadProducts();
  products.push({
    id: Date.now(),
    name: product.name,
    desc: product.desc,
    price: product.price,
    category: product.category,
    image: product.image,
    owner: product.owner,
    createdAt: new Date().toISOString()
  });
  saveProducts(products);
}

function getAllProducts() {
  return loadProducts();
}

function getProductsByOwner(ownerId) {
  return loadProducts().filter(p => p.owner === ownerId);
}

function deleteProduct(productId) {
  saveProducts(loadProducts().filter(p => p.id !== productId));
}

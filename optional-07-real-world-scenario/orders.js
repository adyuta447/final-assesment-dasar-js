// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menyimpan data orders
let orders = [];

// Fungsi menambahkan order baru
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: "Menunggu",
  };

  orders.push(newOrder);
  return newOrder;
}

// Fungsi update status order
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);

  if (!order) return;

  order.status = status;
}

// Fungsi menghitung total pendapatan dari order yang statusnya "Selesai"
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi menghapus order berdasarkan id
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};

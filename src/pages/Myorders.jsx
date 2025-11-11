import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import toast, { Toaster } from "react-hot-toast";
import { Download } from "lucide-react";

const MyOrders = () => {
  const orders = [
    {
      id: 1,
      productName: "Dog Food Premium",
      category: "Pet Supplies",
      price: 20,
      date: "2025-11-11",
    },
    {
      id: 2,
      productName: "Cat Toy Set",
      category: "Pet Toys",
      price: 10,
      date: "2025-11-10",
    },
    {
      id: 3,
      productName: "Bird Cage",
      category: "Pet Accessories",
      price: 45,
      date: "2025-11-09",
    },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("My Orders", 14, 15);

    const tableColumn = ["Product Name", "Category", "Price ($)", "Date"];
    const tableRows = [];

    orders.forEach((order) => {
      const orderData = [order.productName, order.category, order.price, order.date];
      tableRows.push(orderData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("my-orders.pdf");
    toast.success("✅ PDF Downloaded Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-12 px-6 transition-colors duration-300">
      <Toaster position="top-center" />
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40 dark:border-gray-600 transition-colors duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-400 dark:to-pink-500">
          🛍️ My Orders
        </h1>

        <div className="overflow-x-auto rounded-2xl shadow-inner">
          <table className="min-w-full border-collapse">
            <thead className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-700 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="p-4 text-left font-semibold">Product Name</th>
                <th className="p-4 text-left font-semibold">Category</th>
                <th className="p-4 text-left font-semibold">Price ($)</th>
                <th className="p-4 text-left font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`transition-all hover:bg-blue-50 dark:hover:bg-gray-700 ${
                    index % 2 === 0
                      ? "bg-white dark:bg-gray-800"
                      : "bg-gray-50 dark:bg-gray-700"
                  }`}
                >
                  <td className="p-4 text-gray-800 dark:text-gray-100 font-medium">{order.productName}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">{order.category}</td>
                  <td className="p-4 text-gray-800 dark:text-gray-100 font-semibold">${order.price}</td>
                  <td className="p-4 text-gray-500 dark:text-gray-400">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={downloadPDF}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-600 dark:to-pink-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition text-gray-800 dark:text-white"
          >
            <Download className="w-5 h-5" /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

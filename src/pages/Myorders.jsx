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
      const orderData = [
        order.productName,
        order.category,
        order.price,
        order.date,
      ];
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
    <div className="min-h-screen bg-linear-to-r from-purple-50 to-pink-50 py-12 px-6">
      <Toaster position="top-center" />
      <div className="max-w-5xl mx-auto bg-white backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-linear-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
          🛍️ My Orders
        </h1>

        <div className="overflow-x-auto rounded-2xl shadow-inner">
          <table className="min-w-full border-collapse">
            <thead className="bg-linear-to-r from-purple-50 to-pink-50 text-gray-700">
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
                  className={`transition-all hover:bg-blue-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-4 text-gray-800 font-medium">
                    {order.productName}
                  </td>
                  <td className="p-4 text-gray-600">{order.category}</td>
                  <td className="p-4 text-gray-800 font-semibold">
                    ${order.price}
                  </td>
                  <td className="p-4 text-gray-500">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={downloadPDF}
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-50 to-pink-50  px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition"
          >
            <Download className="w-5 h-5" /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

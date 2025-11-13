import React, { useContext, useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import toast, { Toaster } from "react-hot-toast";
import { Download } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/my-orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data))
        .catch((err) => toast.error("Failed to load orders",err));
    }
  }, [user]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("My Orders", 14, 15);

    const tableColumn = [
      "Product Name",
      "Buyer Name",
      "Price ($)",
      "Quantity",
      "Address",
      "Date",
      "Phone",
      "Notes",
    ];

    const tableRows = orders.map((order) => [
      order.productName,
      order.buyerName,
      order.price,
      order.quantity,
      order.address,
      order.date,
      order.phone,
      order.notes || "-",
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("my-orders.pdf");
    toast.success("✅ PDF Downloaded Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-12 px-6">
      <Toaster position="top-center" />
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          🛍️ My Orders
        </h1>

        <div className="overflow-x-auto rounded-2xl shadow-inner">
          <table className="min-w-full border-collapse">
            <thead className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-700 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="p-4 text-left font-semibold">Product Name</th>
                <th className="p-4 text-left font-semibold">Buyer Name</th>
                <th className="p-4 text-left font-semibold">Price ($)</th>
                <th className="p-4 text-left font-semibold">Quantity</th>
                <th className="p-4 text-left font-semibold">Address</th>
                <th className="p-4 text-left font-semibold">Date</th>
                <th className="p-4 text-left font-semibold">Phone</th>
                <th className="p-4 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order._id}
                  className={`transition-all hover:bg-blue-50 dark:hover:bg-gray-700 ${
                    index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"
                  }`}
                >
                  <td className="p-4">{order.productName}</td>
                  <td className="p-4">{order.buyerName}</td>
                  <td className="p-4 font-semibold">${order.price}</td>
                  <td className="p-4">{order.quantity}</td>
                  <td className="p-4">{order.address}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">{order.phone}</td>
                  <td className="p-4">{order.notes || "-"}</td>
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

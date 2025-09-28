// Mô-đun tạo báo cáo

const PDFDocument = require('pdfkit');

function generatePDFReport(data) {
  const doc = new PDFDocument();
  // Thêm nội dung vào báo cáo PDF
  return doc;
}

module.exports = { generatePDFReport };
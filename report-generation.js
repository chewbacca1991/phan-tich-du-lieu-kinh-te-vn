// Module for report generation

const PDFDocument = require('pdfkit');

function generatePDFReport(data) {
  const doc = new PDFDocument();
  // Add content to the PDF report
  doc.text(data);
  // Finalize the PDF and end the stream
  doc.end();
  return doc;
}

module.exports = { generatePDFReport };
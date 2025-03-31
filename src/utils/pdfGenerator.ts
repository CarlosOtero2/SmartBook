import { jsPDF } from 'jspdf';
import { Book } from '../types/book';

export const generatePDF = async (book: Book) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.text(book.title, 20, 20);
  
  // Add author
  doc.setFontSize(16);
  doc.text(`Autor: ${book.author}`, 20, 30);
  
  // Add description
  doc.setFontSize(12);
  doc.text(book.description, 20, 40, { maxWidth: 170 });
  
  // Save the PDF
  doc.save(`${book.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
};
import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import '../downloads.css'

function DownloadDocuments() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apidocuments/list')
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.log(error));
    }, []);

    const downloadPdf = async () => {
        const tableHeader = `
          <tr>
            <th style="font-size: 14px;">Document</th>
            <th style="font-size: 14px;">Docname</th>
            <th style="font-size: 14px;">Description</th>
            <th style="font-size: 14px;">User</th>
          </tr>
        `;
      
        const tableRows = content.map(documents => `
          <tr>
            <td><img src="${documents.document}" /></td>
            <td>${documents.docname}</td>
            <td>${documents.description}</td>
            <td>${documents.personal}</td>
          </tr>
        `).join('');
      
        // Add custom font faces and styles
        const html = `
          <html>
          <head>
            <style>
              @font-face {
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                src: local('Open Sans'), local('OpenSans'),
                  url(https://fonts.gstatic.com/s/opensans/v13/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');
              }
              table {
                font-family: 'Open Sans', sans-serif;
                border-collapse: collapse;
                margin: auto;
                max-width: 80%;
                font-size: 12px;
              }
              table td, table th {
                border: 1px solid black;
                padding: 8px;
                text-align: left;
              }
              table th {
                background-color: #008894;
                font-style: bold;
                font-weight: 800;
              }
            </style>
          </head>
          <body>
            <table>
              ${tableHeader}
              ${tableRows}
            </table>
          </body>
          </html>
        `;
      
        // Create a new element with the HTML content and append it to the document
        const element = document.createElement('div');
        element.innerHTML = html;
        document.body.appendChild(element);
      
        // Convert image URLs in the HTML to base64-encoded data URLs to embed the images in the HTML
        const loadBase64Image = async (url) => {
          const res = await fetch(url);
          const blob = await res.blob();
          const base64Data = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              resolve(reader.result);
            };
          });
          return base64Data;
        };
      
        const images = element.querySelectorAll('img');
      
        try {
          await Promise.all(Array.from(images).map(async (image) => {
            const url = image.src;
            const base64Data = await loadBase64Image(url);
            image.setAttribute('src', base64Data);
          }));
        } catch (error) {
          console.error('Error loading image:', error);
        }
      
        // Calculate the total width of the table
        const table = element.querySelector('table');
        const totalWidth = `${table.offsetWidth}px`;
      
        // Set the width of the table to fit the content dynamically
        table.style.width = totalWidth;
      
        // Convert HTML content to canvas using the new element
        try {
          const canvas = await html2canvas(element, {
            scrollY: -window.scrollY
          });
          document.body.removeChild(element); // Remove the element from the document
          const pdf = new jsPDF('p', 'mm', 'a4'); // Create portrait mode PDF
          pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 180, 0); // Set the width of the image based on the content automatically
          pdf.save('download.pdf');
        } catch (error) {
          console.error('Error generating PDF:', error);
        }
      };

    return (
        <div>
            <button className='btn' onClick={downloadPdf}>Download Documents PDF</button>
        </div>
    );
}

export default DownloadDocuments;
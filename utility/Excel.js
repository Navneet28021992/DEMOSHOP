const ExcelJS = require('exceljs');
const { exec } = require('child_process');

export async function getTestData(sheetName, TC_ID) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("data/testdata.xlsx");
  const worksheet = workbook.getWorksheet(sheetName);

  const headerRow = worksheet.getRow(1);
  const headers = {};
  headerRow.eachCell((cell, colNumber) => {
    headers[cell.value] = colNumber;
  });

  const serialColIndex = headers['TC_ID'];
  if (!serialColIndex) {
    throw new Error('TC_ID column not found.');
  }

  for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
    const row = worksheet.getRow(rowNumber);
    const cellValue = row.getCell(serialColIndex).value;

    if (cellValue === TC_ID) {
      const rowData = {};
      Object.entries(headers).forEach(([header, colIndex]) => {
        rowData[header] = row.getCell(colIndex).value;
      });

      return rowData; // ✅ Return the matched row data
    }
  }

  return null; // If no match is found
}

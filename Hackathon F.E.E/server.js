const express = require('express');
const bodyParser = require('body-parser');
const excel = require('exceljs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/log', (req, res) => {
    const { exercise, sets, reps, weight } = req.body;

    const logEntry = `Exercise: ${exercise}, Sets: ${sets}, Reps: ${reps}, Weight: ${weight} kg`;

    // Write to Excel
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Log');
    worksheet.addRow([logEntry]);

    const filePath = 'exercise_log.xlsx';
    workbook.xlsx.writeFile(filePath)
        .then(() => {
            res.json({ success: true, filePath });
        })
        .catch((error) => {
            res.status(500).json({ success: false, error: error.message });
        });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

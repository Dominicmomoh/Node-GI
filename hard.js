const express = require('express');
const app = express();
const employees = [
    {
        "id": "one",
        "name": "Dominic Momoh",
        "salary": "1,250,000",
        "department": "CEO"
    },
    {
        "id": "two",
        "name": "Edwin Kamara",
        "salary": "1,150,000",
        "department": "CFO",
    },
    {
        "id": "three",
        "name": "Iman Evans",
        "salary": "1,050,000",
        "department": "Management"
    },
    {
        "id": "four",
        "name": "Derrick Commings",
        "salary": "1,000,000",
        "department": "Tech"
    },
    {
        "id": "five",
        "name": "Karimay Hajaalie",
        "salary": "950,000",
        "department": "Human Resources"
    },
    {
        "id": "six",
        "name": "Lebron James",
        "salary": "900,000",
        "department": "Talent Relations"
    },
    {
        "id": "seven",
        "name": "Didier Drogba",
        "salary": "850,000",
        "department": "Security"
    },
    {
        "id": "eight",
        "name": "Nuntali Sesay",
        "salary": "800,000",
        "department": "Media"
    },
    {
        "id": "nine",
        "name": "Rose Marie",
        "salary": "800,000",
        "department": "Accounting"
    },
    {
        "id": "ten",
        "name": "John Doe",
        "salary": "750,000",
        "department": "R2H Apprentice"
    },

];

app.get('/', (req, res) => {
    res.send('Hello world');
});
app.get('/api/employees', (req, res) => {
    res.send(employees);
});
app.get('/api/employees/:id', (req, res) => {
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if (!employee) res.status(404).send('Employee was not found');
    res.send(employee);
});
const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));
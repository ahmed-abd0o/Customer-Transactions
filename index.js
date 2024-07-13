
let sourceJson = {
    "customers": [
    {
    "id": 1,
    "name": "Ahmed Ali"
    },
    {
    "id": 2,
    "name": "Aya Elsayed"
    },
    {
    "id": 3,
    "name": "Mina Adel"
    },
    {
    "id": 4,
    "name": "Sarah Reda"
    },
    {
    "id": 5,
    "name": "Mohamed Sayed"
    }
    ],
    "transactions": [
    {
    "id": 1,
    "customer_id": 1,
    "date": "2022-01-01",
    "amount": 1000
    },
    {
    "id": 2,
    "customer_id": 1,
    "date": "2022-01-02",
    "amount": 2000
    },
    {
    "id": 3,
    "customer_id": 2,
    "date": "2022-01-01",
    "amount": 550
    },
    {
    "id": 4,
    "customer_id": 3,
    "date": "2022-01-01",
    "amount": 500
    },
    {
    "id": 5,
"customer_id": 2,
"date": "2022-01-02",
"amount": 1300
},
{
"id": 6,
"customer_id": 4,
"date": "2022-01-01",
"amount": 750
},
{
"id": 7,
"customer_id": 3,
"date": "2022-01-02",
"amount": 1250
},
{
"id": 8,
"customer_id": 5,
"date": "2022-01-01",
"amount": 2500
},
{
"id": 9,
"customer_id": 5,
"date": "2022-01-02",
"amount": 875
}
]
                };

const tableBody = $("table tbody");
const filterInput = $("input")


let customers = sourceJson.customers;
let transactions = sourceJson.transactions;

function appendRow(obj) {
    let filteredTransactions = transactions.filter(trans => trans.customer_id == obj.id)
    let container = "";
    let i = 1;
    for (const trans of filteredTransactions) {
        container += `
                        <tr>
                            <th scope="row">${i++}</th>
                            <td>${obj.name}</td>
                            <td>${trans.amount}</td>
                            <td>${trans.date}</td>
                        </tr>
`
    }

    tableBody.append(container)
}

function filterFunc(name){
    console.log(name);
    console.log(customers.filter(ok => ok.name.toLowerCase().includes(name.toLowerCase())));
}
appendRow(customers[1])
console.log(customers)
console.log(transactions)


filterInput.on("input",function(e){
    filterFunc(e.target.value)
})


// const sourceJson = {
//     customers: [
//         {
//             id: 1,
//             name: "Ahmed Ali",
//         },
//         {
//             id: 2,
//             name: "Aya Elsayed",
//         },
//         {
//             id: 3,
//             name: "Mina Adel",
//         },
//         {
//             id: 4,
//             name: "Sarah Reda",
//         },
//         {
//             id: 5,
//             name: "Mohamed Sayed",
//         },
//     ],
//     transactions: [
//         {
//             id: 1,
//             customer_id: 1,
//             date: "2022-01-01",
//             amount: 1000,
//         },
//         {
//             id: 2,
//             customer_id: 1,
//             date: "2022-01-02",
//             amount: 2000,
//         },
//         {
//             id: 3,
//             customer_id: 2,
//             date: "2022-01-01",
//             amount: 550,
//         },
//         {
//             id: 4,
//             customer_id: 3,
//             date: "2022-01-01",
//             amount: 500,
//         },
//         {
//             id: 5,
//             customer_id: 2,
//             date: "2022-01-02",
//             amount: 1300,
//         },
//         {
//             id: 6,
//             customer_id: 4,
//             date: "2022-01-01",
//             amount: 750,
//         },
//         {
//             id: 7,
//             customer_id: 3,
//             date: "2022-01-02",
//             amount: 1250,
//         },
//         {
//             id: 8,
//             customer_id: 5,
//             date: "2022-01-01",
//             amount: 2500,
//         },
//         {
//             id: 9,
//             customer_id: 5,
//             date: "2022-01-02",
//             amount: 875,
//         },
//     ],
// };
const ctx = document.getElementById("myChart");

const sourceJson = {
    customers: [
        { id: 1, name: "Ahmed Ali" },
        { id: 2, name: "Aya Elsayed" },
        { id: 3, name: "Mina Adel" },
        { id: 4, name: "Sarah Reda" },
        { id: 5, name: "Mohamed Sayed" },
        { id: 6, name: "Omar Hassan" },
        { id: 7, name: "Laila Mahmoud" },
        { id: 8, name: "Youssef Hamed" },
        { id: 9, name: "Fatma Mostafa" },
        { id: 10, name: "Ali Hussein" },
        { id: 11, name: "Nourhan Khaled" },
        { id: 12, name: "Hassan Ahmed" },
        { id: 13, name: "Mariam Youssef" },
        { id: 14, name: "Khaled Saad" },
        { id: 15, name: "Dina Khalil" },
        { id: 16, name: "Mustafa Ibrahim" },
        { id: 17, name: "Rania Fathy" },
        { id: 18, name: "Hany Mahmoud" },
        { id: 19, name: "Salma Ibrahim" },
        { id: 20, name: "Tamer Farid" },
        { id: 21, name: "Nadia Salah" },
        { id: 22, name: "Mahmoud Kamal" },
        { id: 23, name: "Amira Adel" },
        { id: 24, name: "Walid Amr" },
        { id: 25, name: "Reham Tamer" },
        { id: 26, name: "Eman Ehab" },
        { id: 27, name: "Karim Hani" },
        { id: 28, name: "Rana Sameh" },
        { id: 29, name: "Samir Anwar" },
        { id: 30, name: "Heba Nabil" },
        { id: 31, name: "Hossam Ali" },
        { id: 32, name: "Samar Ibrahim" },
        { id: 33, name: "Ayman Nasser" },
        { id: 34, name: "Ghada Reda" },
        { id: 35, name: "Khaled Sami" },
        { id: 36, name: "Noura Kamal" },
        { id: 37, name: "Yasin Fathi" },
        { id: 38, name: "Shimaa Maher" },
        { id: 39, name: "Sherif Mohamed" },
        { id: 40, name: "Mona Khaled" },
        { id: 41, name: "Fady Galal" },
        { id: 42, name: "Inas Khalil" },
        { id: 43, name: "Hatem Ali" },
        { id: 44, name: "Alaa Karim" },
        { id: 45, name: "Nermine Samir" },
        { id: 46, name: "Nabil Reda" },
        { id: 47, name: "Nagwa Fathi" },
        { id: 48, name: "Tarek Said" },
        { id: 49, name: "Randa Naguib" },
        { id: 50, name: "Mohsen Galal" },
    ],
    transactions: [
        { id: 1, customer_id: 1, date: "2022-01-01", amount: 1000 },
        { id: 2, customer_id: 1, date: "2022-01-02", amount: 2000 },
        { id: 3, customer_id: 2, date: "2022-01-01", amount: 550 },
        { id: 4, customer_id: 3, date: "2022-01-01", amount: 500 },
        { id: 5, customer_id: 2, date: "2022-01-02", amount: 1300 },
        { id: 6, customer_id: 4, date: "2022-01-01", amount: 750 },
        { id: 7, customer_id: 3, date: "2022-01-02", amount: 1250 },
        { id: 8, customer_id: 5, date: "2022-01-01", amount: 2500 },
        { id: 9, customer_id: 5, date: "2022-01-02", amount: 875 },
        { id: 10, customer_id: 6, date: "2022-01-03", amount: 1450 },
        { id: 11, customer_id: 6, date: "2022-01-04", amount: 680 },
        { id: 12, customer_id: 7, date: "2022-01-05", amount: 320 },
        { id: 13, customer_id: 8, date: "2022-01-06", amount: 950 },
        { id: 14, customer_id: 9, date: "2022-01-07", amount: 1240 },
        { id: 15, customer_id: 7, date: "2022-01-08", amount: 390 },
        { id: 16, customer_id: 10, date: "2022-01-09", amount: 780 },
        { id: 17, customer_id: 11, date: "2022-01-10", amount: 540 },
        { id: 18, customer_id: 12, date: "2022-01-11", amount: 870 },
        { id: 19, customer_id: 13, date: "2022-01-12", amount: 620 },
        { id: 20, customer_id: 14, date: "2022-01-13", amount: 960 },
        { id: 21, customer_id: 15, date: "2022-01-14", amount: 830 },
        { id: 22, customer_id: 16, date: "2022-01-15", amount: 720 },
        { id: 23, customer_id: 17, date: "2022-01-16", amount: 590 },
        { id: 24, customer_id: 18, date: "2022-01-17", amount: 1050 },
        { id: 25, customer_id: 19, date: "2022-01-18", amount: 840 },
        { id: 26, customer_id: 20, date: "2022-01-19", amount: 970 },
        { id: 27, customer_id: 21, date: "2022-01-20", amount: 630 },
        { id: 28, customer_id: 22, date: "2022-01-21", amount: 780 },
        { id: 29, customer_id: 23, date: "2022-01-22", amount: 840 },
        { id: 30, customer_id: 24, date: "2022-01-23", amount: 1030 },
        { id: 31, customer_id: 25, date: "2022-01-24", amount: 710 },
        { id: 32, customer_id: 26, date: "2022-01-25", amount: 920 },
        { id: 33, customer_id: 27, date: "2022-01-26", amount: 540 },
        { id: 34, customer_id: 28, date: "2022-01-27", amount: 870 },
        { id: 35, customer_id: 29, date: "2022-01-28", amount: 1120 },
        { id: 36, customer_id: 30, date: "2022-01-29", amount: 750 },
        { id: 37, customer_id: 31, date: "2022-01-30", amount: 810 },
        { id: 38, customer_id: 32, date: "2022-01-31", amount: 680 },
        { id: 39, customer_id: 33, date: "2022-02-01", amount: 790 },
        { id: 40, customer_id: 34, date: "2022-02-02", amount: 1020 },
        { id: 41, customer_id: 35, date: "2022-02-03", amount: 650 },
        { id: 42, customer_id: 36, date: "2022-02-04", amount: 900 },
        { id: 43, customer_id: 37, date: "2022-02-05", amount: 760 },
        { id: 44, customer_id: 38, date: "2022-02-06", amount: 1030 },
        { id: 45, customer_id: 39, date: "2022-02-07", amount: 540 },
        { id: 46, customer_id: 40, date: "2022-02-08", amount: 830 },
        { id: 47, customer_id: 41, date: "2022-02-09", amount: 670 },
        { id: 48, customer_id: 42, date: "2022-02-10", amount: 970 },
        { id: 49, customer_id: 43, date: "2022-02-11", amount: 820 },
        { id: 50, customer_id: 44, date: "2022-02-12", amount: 940 },
        { id: 51, customer_id: 45, date: "2022-02-13", amount: 1030 },
        { id: 52, customer_id: 46, date: "2022-02-14", amount: 750 },
        { id: 53, customer_id: 47, date: "2022-02-15", amount: 910 },
        { id: 54, customer_id: 48, date: "2022-02-16", amount: 870 },
        { id: 55, customer_id: 49, date: "2022-02-17", amount: 1050 },
        { id: 56, customer_id: 50, date: "2022-02-18", amount: 940 },
        { id: 57, customer_id: 1, date: "2022-02-19", amount: 870 },
        { id: 58, customer_id: 2, date: "2022-02-20", amount: 730 },
        { id: 59, customer_id: 3, date: "2022-02-21", amount: 940 },
        { id: 60, customer_id: 4, date: "2022-02-22", amount: 870 },
        { id: 61, customer_id: 5, date: "2022-02-23", amount: 920 },
        { id: 62, customer_id: 6, date: "2022-02-24", amount: 760 },
        { id: 63, customer_id: 7, date: "2022-02-25", amount: 840 },
        { id: 64, customer_id: 8, date: "2022-02-26", amount: 970 },
        { id: 65, customer_id: 9, date: "2022-02-27", amount: 810 },
        { id: 66, customer_id: 10, date: "2022-02-28", amount: 900 },
        { id: 67, customer_id: 11, date: "2022-03-01", amount: 650 },
        { id: 68, customer_id: 12, date: "2022-03-02", amount: 810 },
        { id: 69, customer_id: 13, date: "2022-03-03", amount: 670 },
        { id: 70, customer_id: 14, date: "2022-03-04", amount: 780 },
        { id: 71, customer_id: 15, date: "2022-03-05", amount: 930 },
        { id: 72, customer_id: 16, date: "2022-03-06", amount: 820 },
        { id: 73, customer_id: 17, date: "2022-03-07", amount: 970 },
        { id: 74, customer_id: 18, date: "2022-03-08", amount: 740 },
        { id: 75, customer_id: 19, date: "2022-03-09", amount: 870 },
        { id: 76, customer_id: 20, date: "2022-03-10", amount: 830 },
        { id: 77, customer_id: 21, date: "2022-03-11", amount: 810 },
        { id: 78, customer_id: 22, date: "2022-03-12", amount: 920 },
        { id: 79, customer_id: 23, date: "2022-03-13", amount: 670 },
        { id: 80, customer_id: 24, date: "2022-03-14", amount: 940 },
        { id: 81, customer_id: 25, date: "2022-03-15", amount: 710 },
        { id: 82, customer_id: 26, date: "2022-03-16", amount: 870 },
        { id: 83, customer_id: 27, date: "2022-03-17", amount: 840 },
        { id: 84, customer_id: 28, date: "2022-03-18", amount: 910 },
        { id: 85, customer_id: 29, date: "2022-03-19", amount: 980 },
        { id: 86, customer_id: 30, date: "2022-03-20", amount: 760 },
        { id: 87, customer_id: 31, date: "2022-03-21", amount: 830 },
        { id: 88, customer_id: 32, date: "2022-03-22", amount: 710 },
        { id: 89, customer_id: 33, date: "2022-03-23", amount: 900 },
        { id: 90, customer_id: 34, date: "2022-03-24", amount: 870 },
        { id: 91, customer_id: 35, date: "2022-03-25", amount: 1040 },
        { id: 92, customer_id: 36, date: "2022-03-26", amount: 890 },
        { id: 93, customer_id: 37, date: "2022-03-27", amount: 870 },
        { id: 94, customer_id: 38, date: "2022-03-28", amount: 810 },
        { id: 95, customer_id: 39, date: "2022-03-29", amount: 960 },
        { id: 96, customer_id: 40, date: "2022-03-30", amount: 720 },
        { id: 97, customer_id: 41, date: "2022-03-31", amount: 820 },
        { id: 98, customer_id: 42, date: "2022-04-01", amount: 900 },
        { id: 99, customer_id: 43, date: "2022-04-02", amount: 850 },
        { id: 100, customer_id: 44, date: "2022-04-03", amount: 940 },
        { id: 101, customer_id: 45, date: "2022-04-04", amount: 810 },
        { id: 102, customer_id: 46, date: "2022-04-05", amount: 730 },
        { id: 103, customer_id: 47, date: "2022-04-06", amount: 820 },
        { id: 104, customer_id: 48, date: "2022-04-07", amount: 940 },
        { id: 105, customer_id: 49, date: "2022-04-08", amount: 750 },
    ],
};
const tableBody = $("table tbody");
const filterInput = $("input");
const customers = sourceJson.customers;
const transactions = sourceJson.transactions;
let users = [];

class User {
    constructor(obj) {
        this.name = obj.name;
        this.id = obj.id;
        this.transactions = transactionsObj.filter(
            (myId) => myId.customer_id == this.id
        );
    }
    display(i) {
        let container = "";
        for (const trans of this.transactions) {
            container = `
            <tr>
                <th scope="row">${i++}</th>
                <td>${trans.owner}</td>
                <td>${trans.amount}</td>
                <td>${trans.date}</td>
            </tr>
`;
            tableBody.append(container);
        }
    }
    chart(){
        globalChart.data.datasets[0].data = [];
        globalChart.data.labels = [];
        globalChart.data.datasets[0].label = this.name;
        this.transactions.forEach((trans,index)=>{
            globalChart.data.datasets[0].data.push(trans.amount);
            globalChart.data.labels.push(trans.date);

        })
        globalChart.update()
    }
}

class Transaction {
    constructor(obj) {
        this.id = obj.id;
        this.customer_id = obj.customer_id;
        this.amount = obj.amount;
        this.date = obj.date;
        this.owner = customers.find((cust) => cust.id == this.customer_id).name;
    }
    display(k) {
        let container = "";
        container = `
        <tr>
            <th scope="row">${k}</th>
            <td>${this.owner}</td>
            <td>${this.amount}</td>
            <td>${this.date}</td>
        </tr>
`;
        return container;
    }
}

let transactionsObj = transactions.map((trans) => new Transaction(trans)); //  array of all transactions

users = customers.map((element) => {
    return new User(element);
});

function displayTransactions(arr) {
    arr.forEach((trans, index) => {
        tableBody.append(trans.display(index + 1));
    });
}

displayTransactions(transactionsObj);



filterInput.on("input", (e) => {
    if (
        !isNaN(e.target.value) &&
        e.target.value !== "" &&
        e.target.value !== " "
    ) {
        let filteredTransactions = filterByAmount(e);
        tableBody.html("");
        displayTransactions(filteredTransactions);
        users.find((user) => user.id == filteredTransactions[0].customer_id).chart();
    } else if (e.target.value === "" || e.target.value === " ") {
        console.log("here");
        tableBody.html("");
        displayTransactions(transactionsObj);
        users[0].chart()
    } else {
        let filteredTransactions = filterByName(e);
        console.log(filteredTransactions,"nooooooooow");
        tableBody.html("");
        displayTransactions(filteredTransactions);
        users.find((user) => user.id == filteredTransactions[0].customer_id).chart();
    }
});




function filterByName(e) {
    return transactionsObj.filter((trans) => {
        return trans.owner.toLowerCase().includes(e.target.value.toLowerCase());
    });
}

function filterByAmount(e) {
    return transactionsObj.filter((trans) => {
        return trans.amount.toString().includes(e.target.value);
    });
}


let globalChart = new Chart(ctx, {
    type: "bar",
    data: { 
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                label: "transactions",
                data: [300, 250, 200],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});


users[0].chart()
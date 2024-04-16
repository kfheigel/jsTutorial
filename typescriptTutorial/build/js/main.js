"use strict";
// Index Signatures 
// interface TransactionObj {
//     [index: string]: number
// }
const TodaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(TodaysTransactions.Pizza);
console.log(TodaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(TodaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(TodaysTransactions));
TodaysTransactions.Pizza = 40;
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}

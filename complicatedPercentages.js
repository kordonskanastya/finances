let amount = 7000;
const percent = 60;
const monthlyDeposit = 1000;
const daysInYear = 365;
const years = 2;

const daysInTotal = daysInYear * years;
const percentPerWeek = percent / (daysInYear / 7);

for (let days = 0; days <= daysInTotal; days++) {
    if (days % 7 === 0 ) {
        const weeklyPercentInNumber = percentPerWeek / 100 + 1;
        amount = amount * weeklyPercentInNumber;
    }
    
    if (days % 30 === 0 ) {
        amount += monthlyDeposit;
    }
}
console.log(amount);

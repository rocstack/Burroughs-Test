const moment = require('moment');
const Data = require('./classes/data');

const dateNow = moment();
const startDate = moment(`${dateNow.format('Y')}-${dateNow.format('M')}-01`);
const endDate = moment(dateNow.add(12, 'months'));

// Go through dates
for (
  let curDate = moment(startDate);
  curDate.isBefore(endDate);
  curDate.add(1, 'month')
) {
  const monthEndDate = curDate.endOf('month');
  const dayName = monthEndDate.format('dddd');
  const monthName = monthEndDate.format('MMMM');
  const yearName = monthEndDate.format('YYYY');

  let salaryPayDay = monthEndDate;
  Data.addToMonth(`${monthName} ${yearName}`);
  if (dayName === 'Saturday' || dayName === 'Sunday') {
    salaryPayDay = monthEndDate.day(monthEndDate.day() >= 5 ? 5 : -2);
  }
  Data.addToSalary(salaryPayDay.format('dddd DD/MM/YYYY'));

  let bonusPayDate = moment(`${curDate.format('Y')}-${curDate.format('M')}-15`);
  const bonusDayName = bonusPayDate.format('dddd');
  if (bonusDayName === 'Saturday' || bonusDayName === 'Sunday') {
    bonusPayDate = bonusPayDate.day(bonusPayDate.day() == 0 ? 3 : 10);
  }
  Data.addToBonus(bonusPayDate.format('dddd DD/MM/YYYY'));
}

console.table(Data.render());

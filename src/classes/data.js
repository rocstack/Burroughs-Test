module.exports = class Data {
  static monthRow = [];
  static salaryRow = [];
  static bonusRow = [];

  static addToMonth(date) {
    this.monthRow.push(date);
  }

  static addToSalary(date) {
    this.salaryRow.push(date);
  }

  static addToBonus(date) {
    this.bonusRow.push(date);
  }

  static render() {
    return this.monthRow.map((month, index) => {
      return {
        month,
        salaryDate: this.salaryRow[index],
        bonusDate: this.bonusRow[index],
      };
    });
  }

  static getCSV() {
    
  }
};

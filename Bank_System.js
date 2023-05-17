class BankAccaunt {
    constructor(account_number, account_holder) {
        this.account_number = account_number;
        this.account_holder = account_holder;
        this.balance = 0;
    }

    deposit(amount) {
        if(amount > 0) {
            this.balance += amount;
            console.log(`$${amount} was credited to the account.`);
        } else {
            console.log("Invalid amount for deposit.");
        }
    }

    withdraw(amount) {
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`$${amount} was withdrawn from the account.`);
        } else {
            console.log("Invalid amount for withdrawal.");
        }
    }

    showBalance() {
        console.log(`${this.account_holder}'s account balance: $${this.balance} \n`);
    }
};

function checkAccountNumber(account_number) {
    // Define the regex patterns for each case
    const patterns = {
      '16300': /^\d{5}\d{7}$/,
      '24100': /^\d{5}\d{9}$/,
      '24701': /^\d{5}\d{10}$/,
      '22000': /^\d{5}\d{10}$/,
      '19300': /^\d{5}\d{11}$/,
      '20500': /^\d{5}\d{11}$/,
      '11500': /^\d{5}\d{11}$/,
      '15100': /^\d{5}\d{11}$/,
      '15700': /^\d{5}\d{11}$/
    };
  
    const first_five_digits = account_number.substring(0, 5);
    const account_pattern = patterns[first_five_digits];
  
    if(account_pattern && account_pattern.test(account_number)) {
        //
    } else {
        throw Error("Invalid account number.");
    }
}

const account_1 = new BankAccaunt("1570030044400100", "Daniela Schwarz");
checkAccountNumber("1570030044400100");
account_1.deposit(1100);
account_1.withdraw(300);
account_1.showBalance();
  
const account_2 = new BankAccaunt("1570060053470100", "Adam Cuper");
checkAccountNumber("1570060053470100");
account_2.deposit(5600);
account_2.withdraw(1200);
account_2.showBalance();

class BankAccount {
    constructor(accountName = 'Micheal' , initialBalance = 1000) {
      this.balance = initialBalance;
      this.accountName = accountName
    }
  
   
    getBalance() {
      alert(`Account Balance: ${this.balance} €`);
      return this.balance;
    }
  
 
    withdraw(amount) {
      if (amount > this.balance) {
        alert("Insufficient funds! The amount exceeds the current balance.");
      } else if (amount <= 0) {
        alert("Please enter a valid amount.");
      } else {
        this.balance -= amount;
        alert(`Successfully withdrew ${amount} €. New balance: ${this.balance} €`);
      }
    }
  
    
    deposit(amount) {
      if (amount <= 0) {
        alert("Please enter a valid amount.");
      } else {
        this.balance += amount;
        alert(`Successfully deposited ${amount} €. New balance: ${this.balance} €`);
      }
    }
    
    getAccountName() {
        alert(`Account Name: ${this.accountName} `);
        return this.accountName;
      }
    
  }
  
 
  const myAccount = new BankAccount();
  
  function menu() {
    let isRunning = true;
  
    while (isRunning) {
      const choice = prompt(
        "Welcome to the Bank Account!\n" +
        "1. View Balance\n" +
        "2. Withdraw Money\n" +
        "3. Deposit Money\n" +
        "4. View Account Name\n"+
        "5. Exit\n" +
        "Enter your choice (1-5):"
      );
  
      switch (choice) {
        case "1": 
          myAccount.getBalance();
          break;
        case "2":
          const withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
          myAccount.withdraw(withdrawAmount);
          break;
        case "3": 
          const depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
          myAccount.deposit(depositAmount);
          break;
        case "4": 
          myAccount.getAccountName();
          break;
        case "5": 
          alert("Exiting the application. Have a nice day!");
          isRunning = false;
          break;
        default: 
          alert("Invalid choice! Please enter a number between 1 and 5.");
      }
    }
  }
  

  menu();
  
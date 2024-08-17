const fs = require('fs');
const usersDir = __dirname + "/../db/account-transactions";

exports.getTransactions = async (req, res) => {
    const content = fs.readFileSync(usersDir + `/account-transactions.json`);
    res.status(200).json(JSON.parse(content.toString()));
};

exports.getTransactionsByIdAccount = async (req, res) => {
    const idAccount = req.params.idAccount;
    const content = fs.readFileSync(usersDir + `/account-transactions.json`);
    const allTransactions = JSON.parse(content.toString());
    const transactions = allTransactions.filter(u => +u.idAccount === +idAccount);
    if (transactions) {
        res.status(200).json(transactions);
    } else {
        res.status(404).json({ error: 'transactions not found' });
    }
}
const fs = require('fs');
const usersDir = __dirname + "/../db/account-balances";

exports.getBalances = async (req, res) => {
    const content = fs.readFileSync(usersDir + `/account-balances.json`);
    res.status(200).json(JSON.parse(content.toString()));
};

exports.getBalanceByIdUser = async (req, res) => {
    const idUser = req.params.idUser;
    const content = fs.readFileSync(usersDir + `/account-balances.json`);
    const allBalances = JSON.parse(content.toString());
    const balances = allBalances.filter(u => +u.idUser === +idUser);
    if (balances) {
        res.status(200).json(balances);
    } else {
        res.status(404).json({ error: 'balances not found' });
    }
}
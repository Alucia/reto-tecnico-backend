const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const usersRoutes = require('./routes/userRoutes');
app.use('/api/users', usersRoutes);

const balanceRoutes = require('./routes/balanceRoutes');
app.use('/api/balances', balanceRoutes);

const transactionsRoutes = require('./routes/transactionsRoutes');
app.use('/api/transactions', transactionsRoutes);

app.listen(port, () => {
    console.log(`Server listens port ${port}`);
});

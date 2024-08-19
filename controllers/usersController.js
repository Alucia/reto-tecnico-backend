const fs = require('fs');
const usersDir = __dirname + "/../db/users";

exports.getUsers = async (req, res) => {
    const content = fs.readFileSync(usersDir + `/users.json`);
    res.status(200).json(JSON.parse(content.toString()));
};

exports.getUserById = async (req, res) => {
    const idUser = req.params.idUser;
    const content = fs.readFileSync(usersDir + `/users.json`);
    const users = JSON.parse(content.toString());
    const user = users.find(u => +u.idUser === +idUser);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
};

exports.createUser = async (req, res) => {
    const content = fs.readFileSync(usersDir + `/users.json`);

    const jsonData = JSON.parse(content);
    const newId = jsonData.length + 1;
    const newUser = {
        idUser: newId,
        name: req.body.name,
        email: req.body.email
    };

    jsonData.push(newUser);

    fs.writeFile(usersDir + `/users.json`, JSON.stringify(jsonData, null, 2), 'utf8', err => {
        if (err) {
            console.log('Error al escribir el archivo');
            res.status(500).json({ error: 'Error al escribir el archivo' });
            return;
        }
        else {
            console.log('Se escribio el archivo correctamente');
        }
    })

    res.json({ success: true });
};
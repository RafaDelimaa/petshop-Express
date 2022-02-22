const petsController = {
    index: (req, res) => {
        res.send([{
            nome: "Thor",
            raça: "Maltês"
        }])
    }
};





module.exports = petsController;
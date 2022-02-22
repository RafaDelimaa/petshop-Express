const serviceController = {
    index: (req, res) => {
        res.send([{
            serviços: "Vacinação",
            porte: "Grande"
        }])
    }
};


module.exports = serviceController;
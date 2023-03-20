module.exports = app => {
    app.get('/', (req, res) => {
        res.send("Welcome to Customer Module Backend");
    })

    app.use("/authentication", require('./authentication'));
    app.use("/customer", require('./customer'));
}
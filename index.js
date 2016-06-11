var app = require('./app');

app.listen( process.env.PORT || 8081, () => console.log(`Server listen on port ${process.env.PORT}`));
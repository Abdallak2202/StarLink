const server = require("../api/src/app");
const { conn } = require("./src/db.js");

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('Escuchando en puerto 3001');
  });
});

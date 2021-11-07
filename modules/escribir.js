const fs = require("fs");
const escribir = (file, data) =>
  fs.writeFileSync(file, JSON.stringify(data, null, 2)); //sobreescribe lo que haya en el anterior archivo.
module.exports = escribir;

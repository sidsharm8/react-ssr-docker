import fs from "fs";

export default {
  key: fs.readFileSync('ssl-keys/privateKey.key'),
  cert: fs.readFileSync('ssl-keys/certificate.crt')
};

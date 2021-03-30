import { Server } from "https://js.sabae.cc/Server.js";
import { jsonfs } from "https://js.sabae.cc/jsonfs.js";

const datafn = "data.json";
let data2 = jsonfs.read(datafn) || [];

class MyServer extends Server {
  api(path, req) {
    if (path == "/api/list") {
      return data2;
    } else if (path == "/api/add") {
      data2.push(req);
      jsonfs.write(datafn, data2);
      return "ok";
    }
  }
}

new MyServer(8008);
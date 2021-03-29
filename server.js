import { Server } from "https://js.sabae.cc/Server.js";

const data = [
    {
        music: "ドレミ"
    }
]

class MyServer extends Server {
    api(path, req) {
        if (path == "/api/get"){
            return data;
        }
        else if (path == "/api/add"){
            data.push(req);
            Deno.writeTextFileSync("data.json", JSON.stringify(data));
            return "OK";
        }
        return {name: "jigintern", path: path};
    }
}
new MyServer(8001);
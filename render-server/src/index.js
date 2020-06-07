import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import compression from "compression";
import spdy from "spdy";
import spdyOptions from "../ssl-keys";
import proxy from "express-http-proxy";
import enforce from "express-sslify";
import Routes from "./client/Routes";
import keys from "./keys";

const app = express();

//will be switchd with env variables
const API_SERVER = `${keys.apiHost}:${keys.apiPort}`;
const RENDER_SERVER = `${keys.renderHost}:${keys.renderPort}`;

//sets up proxy for api server
app.use(
  "/api",
  proxy(API_SERVER, {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = RENDER_SERVER;
      return opts;
    },
  })
);
const shouldCompress = (req, res) => {
  // don't compress responses asking explicitly not
  if (req.headers["x-no-compression"]) {
    return false;
  }

  // use compression filter function
  return compression.filter(req, res);
};

// set up compression in express
app.use(compression({ filter: shouldCompress }));
//app.use(enforce.HTTPS());
app.use(express.static("public"));

//route handler for all server requests
app.get("*", (req, res) => {	
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

/* const PORT = keys.renderPort; */
const PORT = keys.renderPort;
app.listen(3000, () => {
	console.log(`Listening on port : 3000`);
});
// sets up http/2 server using spdy
/* spdy.createServer(spdyOptions, app).listen(PORT, error => {
	if (error) {
		console.error(error)
		return process.exit(1)
	} else {
		console.log(`HTTP/2 server listening on port: ${PORT}`)
	}
})
 */
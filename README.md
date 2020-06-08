# react-ssr-docker (http://rickmortyssr-env.eba-z8dvikyt.us-east-2.elasticbeanstalk.com/)

## OVERVIEW : 

Rick and Morty using react and server side rendering without using any framework.

This application consists of two servers:

### 1. Render Server (PORT 3000) :
An Express server which handles all get requests for pages. It also serves as a proxy for API/Authentication server. 

### 2. Api Server (PORT 5000) : 
API server responsible for authentication and other api responses served from mongodb database.

### 3. Nginx Server(PORT 80) : 
This server is responsible for mapping host port 80 to Render server(PORT 3000).

## Webpack configuration

I have used two webpack configurations one for client(webpack.client.js) and one for server(webpack.server.js). 

webpack.client.js is responsible for bundling reactjs client side code.

webpack.server.js is responsible for bundling nodejs render side code.

Isomorphic javascript style is used here.

## Authentication

Authentication is handled in API server using passportjs(cookies).

Every get and post request is authenticated before serving response.

Also every authorized page like /characters is authenticated on render server before sending it to the client.

If user is not authenticated, he gets redirected to signin page automatically.

## Two versions of store

One for client and one for server: 

At any page request we call the createStore function in createStore.js.

It builds up the store by calling the necessary loadData function calls by figuring out which componennts to load(using react router config).

When store is loaded, the page content is rendered to string using renderToString function(renderer.js).

We also set a window variable INITIAL_STATE to load the client store with the server state.

```
<script>
	window.INITIAL_STATE = ${serialize(store.getState())}
</script>
```        

## Two versions of axios Instances

One for server and one for client.

In client, every API is call is prepended with base url /api.

```
const axiosInstance = axios.create({
  baseURL: "/api"
});
```
These api calls are intercepted by render server which acts as proxy and sends these requests to API server.

```
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
```

In server, we need to get cookies from browser and send them in requests to API server to make it think as an authenticated user.

```
const axiosInstance = axios.create({
    baseURL : API_SERVER,
    headers: {
      cookie: req.get("cookie") || ""
    }
});
```

## Optimizations

Server responses are paginated by default(limit 40). Further responses are lazily loaded on scroll.

Images are lazily loaded using intersection observer.

API requests(on filter change and search text) are debounced by default to prevent unnecessary server calls.

HTTP/2 protocol is used to improve further loading times.

gzip compression is used in render server to compress text and payload.


## CI and CD :

Travis CI and AWS EB instance is used. Configuration files are .travis.yml and dockerrun.aws.json.

## Things in progress

Optimization to reduce dom nodes rendering using virtualization. I will be using react-window for this.

Service worker code is already written. Having some issues with service worker to get it running. Need to fix this also.

Have to implement code splitting on client side to reduce the bundle being downloaded.




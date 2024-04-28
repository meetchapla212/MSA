const http = require("http");
const HttpProxy = require("http-proxy");
const Express = require("express");

const app = Express();

var proxy = HttpProxy.createProxyServer({ host: "http://localhost/", PORT: 5000 });
// Proxy on Customer Api
app.use("/customer", function (req, res, next) {
  proxy.web(
    req,
    res,
    {
      target: "http://localhost:7000",
    },
    next
  );
});
// Proxy on Order Api
app.use("/order", function (req, res, next) {
  proxy.web(
    req,
    res,
    {
      target: "http://localhost:8000",
    },
    next
  );
});
// Proxy on Product Api
app.use("/product", function (req, res, next) {
  proxy.web(
    req,
    res,
    {
      target: "http://localhost:9000",
    },
    next
  );
});
// Server defined on port 5000.
const PORT = process.env.PORT || 5000;
app.listen(5000, function () {
  console.log(`Server running on ${PORT}`);
});

function route(pathname,query,handle) {
  console.log("A punto de rutear una peticion para " + pathname+ " con su query "+query);
  if (pathname!='/favicon.ico')
  handle[pathname]();
}

exports.route = route;
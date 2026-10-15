function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith("/index.html")) {
    return request;
  }

  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
  } else if (!uri.includes(".")) {
    request.uri = uri + "/index.html";
  }

  return request;
}

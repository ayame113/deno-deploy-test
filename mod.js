addEventListener('fetch', (event) => {
  event.respondWith(new Response(JSON.stringify({
    url: req.url,
    method: req.method,
    proto: req.proto,
    headers: Object.fromEntries(req.headers.entries())
  }, null, 2), {
    headers: { "content-type": "application/json; charset=UTF-8" },
  })
})
  

import { serve } from "https://deno.land/std@0.115.1/http/server.ts";

serve((request) => new Response(Deno.inspect(request)));
/*
addEventListener('fetch', (event) => {
  event.respondWith(new Response(JSON.stringify({
    url: event.request.url,
    method: event.request.method,
    proto: event.request.proto,
    headers: Object.fromEntries(event.request.headers.entries())
  }, null, 2), {
    headers: { "content-type": "application/json; charset=UTF-8" },
  }))
})
*/

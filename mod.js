import { serve } from "https://deno.land/std@0.115.1/http/server.ts";

serve((request) => new Response(`
import.meta.url: ${import.meta.url}
Deno.cwd(): ${Deno.cwd()}
DENO_REGION: ${Deno.env.get("DENO_REGION")}
DENO_DEPLOYMENT_ID: ${Deno.env.get("DENO_DEPLOYMENT_ID")}
Request:
${Deno.inspect(request)}
`));
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

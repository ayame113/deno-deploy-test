import { serve } from "https://deno.land/std@0.115.1/http/server.ts";

serve((request) => new Response(`import.meta.url: "${import.meta.url}"
Deno.cwd(): "${Deno.cwd()}"
Deno.env.get("DENO_REGION"): "${Deno.env.get("DENO_REGION")}"
Deno.env.get("DENO_DEPLOYMENT_ID"): "${Deno.env.get("DENO_DEPLOYMENT_ID")}"
Request: ${Deno.inspect(request)}
`));

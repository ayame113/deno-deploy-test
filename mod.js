import { serve } from "https://deno.land/std@0.115.1/http/server.ts";

serve((request) => new Response(`
<!DOCTYPE html>
<html>
<head></head>
<body>
<h3>import.meta.url:</h3><pre>"${import.meta.url}"</pre>
<h3>Deno.cwd():</h3><pre>"${Deno.cwd()}"</pre>
<h3>Deno.env.get("DENO_REGION"):</h3><pre>"${Deno.env.get("DENO_REGION")}"</pre>
<h3>Deno.env.get("DENO_DEPLOYMENT_ID"):</h3><pre>"${Deno.env.get("DENO_DEPLOYMENT_ID")}"</pre>
<h3>Request:</h3><pre>${Deno.inspect(request)}</pre>
<h3>window:</h3><pre>${Deno.inspect(window)}</pre>
<h3>Deno:</h3><pre>${Deno.inspect(Deno)}</pre>
<h3>Deno.core:</h3><pre>${Deno.inspect(Deno.core)}</pre>
</body>
</html>
`));

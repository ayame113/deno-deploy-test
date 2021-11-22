import { serve } from "https://deno.land/std@0.115.1/http/server.ts";

serve((request) => new Response(`
<!DOCTYPE html>
<html>
<head>
<style>
body {
    background-color: bisque;
}
pre {
    background-color: lightgrey;
    border-radius: 0.5em;
    box-shadow: inset black 0 0 11px -6px;
    padding: 0.5em;
}
</style>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
</head>
<body>
<h3>import.meta.url:</h3><pre>"${import.meta.url}"</pre>
<h3>Deno.cwd():</h3><pre>"${Deno.cwd()}"</pre>
<h3>Deno.env.get("DENO_REGION"):</h3><pre>"${Deno.env.get("DENO_REGION")}"</pre>
<h3>Deno.env.get("DENO_DEPLOYMENT_ID"):</h3><pre>"${Deno.env.get("DENO_DEPLOYMENT_ID")}"</pre>
<h3>Request:</h3><pre>${Deno.inspect(request)}</pre>
<h3>globalThis:</h3><pre>${Deno.inspect(globalThis)}</pre>
<h3>globalThis.Deno:</h3><pre>${Deno.inspect(globalThis.Deno)}</pre>
</body>
</html>
`, {headers: {"Content-Type": "text/html; charset=utf-8"}}));

import { serve } from "https://deno.land/std@0.115.1/http/server.ts";

serve((request) => new Response(`
<!DOCTYPE html>
<html>
<head>
<style>
body {
    background-color: lightyellow;
}
pre {
    background-color: beige;
    border-radius: 0.5em;
    box-shadow: inset black 0 0 11px -6px;
    padding: 0.5em;
    overflow-x: scroll;
}
</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
</head>
<body>
<h3>import.meta.url:</h3><pre>${Deno.inspect(import.meta.url)}</pre>
<h3>Deno.cwd():</h3><pre>${Deno.inspect(Deno.cwd())}</pre>
<h3>Deno.env.toObject():</h3><pre>${Deno.inspect(Deno.env.toObject())}</pre>
<h3>Request:</h3><pre>${Deno.inspect(request)}</pre>
<h3>globalThis:</h3><pre>${Deno.inspect(globalThis)}</pre>
<h3>globalThis.Deno:</h3><pre>${Deno.inspect(globalThis.Deno)}</pre>
<a href="https://github.com/ayame113/deno-deploy-test" style="text-align: center;display: block;">github repo</a>
</body>
</html>
`, {headers: {"Content-Type": "text/html; charset=utf-8"}}));

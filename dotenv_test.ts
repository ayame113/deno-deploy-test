import "https://raw.githubusercontent.com/ayame113/deno-dotenv/deploy-compatibility/load.ts"

import { listenAndServe } from "https://deno.land/std@0.112.0/http/server.ts";

listenAndServe(":8000", () => new Response(Deno.inspect(window)));

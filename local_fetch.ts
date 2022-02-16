import { serve } from "https://deno.land/std@0.125.0/http/server.ts";

// ディレクトリ取得
const cwd = Deno.cwd();
console.log("Deno.cwd():", cwd);

const pathToThisFile = import.meta.url;
console.log("import.meta.url:", pathToThisFile);

// ファイルの中身を取得
const uint8Array = await Deno.readFile(new URL("./tmp.ts", import.meta.url));
console.log("Deno.readFile():", uint8Array);
const decoder = new TextDecoder();
console.log("Deno.readFile():", decoder.decode(uint8Array));

const content = await Deno.readTextFile(new URL("./tmp.ts", import.meta.url));
console.log("Deno.readTextFile():", content);

const res = await fetch(new URL("./tmp.ts", import.meta.url));
console.log(res.ok);
console.log(res.status);
console.log(res.statusText);
if (res.body) {
  for await (const chunk of res.body) {
    console.log(chunk);
  }
}
// const textContent = await res.text();
// const jsonContent = await res.json();
// const formContent = await res.formData();
// const blobContent = await res.blob();

// ディレクトリの中身を取得
for await (const dirEntry of Deno.readDir(new URL("./", import.meta.url))) {
  console.log(dirEntry);
}

const fileHandler = await Deno.open(new URL("./tmp.ts", import.meta.url));
fileHandler.close();

// ファイル情報を取得
const stat = await Deno.stat(new URL("./tmp.ts", import.meta.url));
console.log(stat);

const lstat = await Deno.lstat(new URL("./tmp.ts", import.meta.url));
console.log(lstat);

const realPath = await Deno.realPath(new URL("./tmp.ts", import.meta.url));
console.log(realPath);

// serve((req) => {
//   return new Response(req.url);
// });

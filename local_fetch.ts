console.log("cwd: ", Deno.cwd());
console.log("import.meta.url: ", import.meta.url);


try {
  console.log(await Deno.readFile("/src/local_fetch.ts"))
} catch (e) {
  console.log("readFile error: ", e) // Occasionally happens => Error: generic read file error #42
}

try {
  console.log(await Deno.readTextFile("/src/local_fetch.ts"))
} catch (e) {
  console.log("readTextFile error: ", e) // Occasionally happens => Error: generic read file error #42
}

try {
  console.log(await fetch("/src/local_fetch.ts"))
} catch (e) {
  console.log("fetch error: ", e) // TypeError: Invalid URL
}

try {
  console.log(await fetch("file:///src/local_fetch.ts"))
} catch (e) {
  console.log("fetch error (file plotocol): ", e) // PermissionDenied: Read access not allowed
}

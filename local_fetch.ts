console.log("cwd: ", Deno.cwd());
console.log("import.meta.main: ", import.meta.main);
try {
  console.log(await Deno.readFile("/src/local_fetch.ts"))
} catch (e) {
  console.log("readFile error: ", e)
}
try {
  console.log(await Deno.readTextFile("/src/local_fetch.ts"))
} catch (e) {
  console.log("readTextFile error: ", e)
}
try {
  console.log(await fetch("/src/local_fetch.ts"))
} catch (e) {
  console.log("fetch error: ", e)
}
try {
  console.log(await fetch("file:///src/local_fetch.ts"))
} catch (e) {
  console.log("fetch error (file plotocol): ", e)
}

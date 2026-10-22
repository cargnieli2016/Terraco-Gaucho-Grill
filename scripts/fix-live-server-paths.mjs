import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

if (process.env.GITHUB_ACTIONS === "true") {
  process.exit(0);
}

const htmlPath = join(process.cwd(), "dist", "client", "index.html");
const html = await readFile(htmlPath, "utf8");
const liveServerHtml = html.replace(/(["'])\/\.\//g, "$1./");

if (liveServerHtml !== html) {
  await writeFile(htmlPath, liveServerHtml);
}

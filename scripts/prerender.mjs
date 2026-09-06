// Pre-renders the React app into dist/index.html so crawlers, link previews,
// and users without JavaScript get the full page content instead of an empty <div id="root">.
// Runs after `vite build` and `vite build --ssr` (see package.json "build").
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const ssrDir = path.resolve("dist-ssr");
const indexPath = path.join(dist, "index.html");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const appHtml = render();

const template = fs.readFileSync(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`prerender: could not find ${marker} in dist/index.html`);
}
fs.writeFileSync(indexPath, template.replace(marker, `<div id="root">${appHtml}</div>`));
fs.rmSync(ssrDir, { recursive: true, force: true });

const bytes = Buffer.byteLength(appHtml);
console.log(`prerender: injected ${bytes} bytes of HTML into dist/index.html`);

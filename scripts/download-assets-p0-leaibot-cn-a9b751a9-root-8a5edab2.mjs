import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const manifestPath = path.join(
  projectRoot,
  "docs/research/p0-leaibot-cn-a9b751a9/root-8a5edab2/downloaded-assets.json",
);
const outputRoot = path.join(
  projectRoot,
  "public/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2",
);
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const assets = manifest.filter((asset) => asset.kind === "image");

await mkdir(outputRoot, { recursive: true });

for (let index = 0; index < assets.length; index += 4) {
  const batch = assets.slice(index, index + 4);
  await Promise.all(
    batch.map(async ({ name, url }) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to download ${url}: ${response.status}`);
      }
      const bytes = new Uint8Array(await response.arrayBuffer());
      await writeFile(path.join(outputRoot, name), bytes);
      console.log(`Downloaded ${name}`);
    }),
  );
}

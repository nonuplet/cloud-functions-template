import { buildSync } from "esbuild";

buildSync({
  entryPoints: ["./src/index.ts"],
  outdir: "./dist",
  platform: "node",
  format: "cjs",
  bundle: true,
});

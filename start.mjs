// Hostinger web apps hand the process a PORT and an HTTPS URL in front. The
// published openmausbot package carries the prebuilt server and UI, so this
// only starts it; the data folder keeps chats, bots and engine sign-ins.
import { spawn } from "node:child_process";

const port = process.env.PORT || "8799";
const dataDir = process.env.OMB_DATA_DIR || "data";
const publicUrl = process.env.OMB_PUBLIC_URL;

const args = [
  "node_modules/openmausbot/cli.js",
  "serve",
  "--port", port,
  "--data-dir", dataDir,
  "--no-open",
];
if (publicUrl) args.push("--public-url", publicUrl);

const child = spawn(process.execPath, args, { stdio: "inherit", env: process.env });

for (const signal of ["SIGTERM", "SIGINT"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("exit", (code, signal) => {
  process.exit(code ?? (signal ? 1 : 0));
});

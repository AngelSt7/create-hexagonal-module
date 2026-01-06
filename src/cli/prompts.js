import { input, select } from "@inquirer/prompts";
import fs from "fs";
import { error, info, success } from "../helpers/index.js";
import { saveConfig } from "../config/configManager.js";

export async function askForBasePath() {
  const inputPath = await input({
    message: "Enter the base path (e.g. src/main/java/com/example/modules):"
  });

  let p = inputPath.replace(/\\/g, "/");

  if (!fs.existsSync(p)) {
    info("Path does not exist. Creating folders...");
    fs.mkdirSync(p, { recursive: true });
    success("Path created successfully.");
  }

  if (!p.includes("src/main/java")) {
    error("The path MUST be inside src/main/java");
    process.exit(1);
  }

  saveConfig({ javaBase: p });
  success(`Base path saved: ${p}`);
  return p;
}

export async function askForModuleName() {
  const name = await input({
    message: "Module name to create?"
  });
  return name;
}

export async function askToUseExistingPath(currentPath) {
  console.log(`\nSaved path: ${currentPath}\n`);

  const use = await select({
    message: "What do you want to do?",
    choices: [
      { name: "→ Use this path", value: true },
      { name: "→ Enter new path", value: false }
    ]
  });

  if (use) {
    return currentPath;
  }

  return await askForBasePath();
}
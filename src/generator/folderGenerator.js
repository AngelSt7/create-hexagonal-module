import path from "path";
import fs from "fs";
import { MODULE_FOLDERS } from "../constants/folders.js";
import { colors } from "../constants/colors.js";
import { success, step, sleep } from "../helpers/index.js";

export async function createFolderStructure(moduleRoot) {
  step("Creating folder structure...");

  for (const folder of MODULE_FOLDERS) {
    const fullPath = path.join(moduleRoot, folder);
    fs.mkdirSync(fullPath, { recursive: true });

    process.stdout.write(`${colors.cyan}⠋ ${colors.reset}`);
    await sleep(40);
    process.stdout.clearLine?.();
    process.stdout.cursorTo?.(0);

    success(`Folder created: ${folder}`);
    await sleep(20);
  }
}
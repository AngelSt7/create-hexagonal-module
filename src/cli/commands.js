import { loadConfig, resetConfig } from "../config/configManager.js";
import { askForBasePath, askForModuleName, askToUseExistingPath } from "./prompts.js";
import { generateModule } from "../generator/fileGenerator.js";
import { headline, info, success } from "../helpers/index.js";

function handleResetPath() {
  const args = process.argv.slice(2);
  
  if (args.includes("--reset-path")) {
    resetConfig();
    success("Ruta guardada eliminada. Puedes configurar una nueva.");
    process.exit(0);
  }
}

async function getBasePath() {
  const config = loadConfig();
  
  if (!config?.javaBase) {
    return await askForBasePath();
  }
  
  return await askToUseExistingPath(config.javaBase);
}

export async function main() {
  handleResetPath();

  headline(`
======================================
   CREAR MÓDULO JAVA HEXAGONAL
======================================
`);

  const basePath = await getBasePath();
  const moduleName = await askForModuleName();

  info(`Ruta final: ${basePath}`);
  info(`Módulo: ${moduleName}`);

  await generateModule(basePath, moduleName);
}
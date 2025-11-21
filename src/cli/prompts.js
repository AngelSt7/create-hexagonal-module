import { input, select } from "@inquirer/prompts";
import fs from "fs";
import { error, info, success } from "../helpers/index.js";
import { saveConfig } from "../config/configManager.js";

export async function askForBasePath() {
  const inputPath = await input({
    message: "Ingresa la ruta base (p.ej. src/main/java/com/angel/pruebas):"
  });

  let p = inputPath.replace(/\\/g, "/");

  if (!fs.existsSync(p)) {
    info("La ruta no existe. Creando carpetas...");
    fs.mkdirSync(p, { recursive: true });
    success("Ruta creada correctamente.");
  }

  if (!p.includes("src/main/java")) {
    error("La ruta DEBE estar dentro de src/main/java");
    process.exit(1);
  }

  saveConfig({ javaBase: p });
  success(`Ruta base guardada: ${p}`);
  return p;
}

export async function askForModuleName() {
  const name = await input({
    message: "¿Nombre del módulo a crear?"
  });
  return name;
}

export async function askToUseExistingPath(currentPath) {
  console.log(`\nRuta guardada: ${currentPath}\n`);

  const use = await select({
    message: "¿Qué deseas hacer?",
    choices: [
      { name: "→ Usar esta ruta", value: true },
      { name: "→ Ingresar nueva ruta", value: false }
    ]
  });

  if (use) {
    return currentPath;
  }

  return await askForBasePath();
}
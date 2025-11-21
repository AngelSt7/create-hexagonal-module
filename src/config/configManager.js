import path from "path";
import os from "os";
import fs from "fs";

const CONFIG_FILE = path.join(os.homedir(), ".create-module-config.json");

export function loadConfig() {
  if (!fs.existsSync(CONFIG_FILE)) return null;
  return JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8"));
}

export function saveConfig(conf) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(conf, null, 2));
}

export function resetConfig() {
  if (fs.existsSync(CONFIG_FILE)) {
    fs.unlinkSync(CONFIG_FILE);
  }
}
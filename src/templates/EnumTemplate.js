import { capitalize } from "../helpers/index.js";

export function enumTemplate(basePackage, moduleName) {
    const cap = capitalize(moduleName);
  return `
package ${basePackage}.${moduleName}.domain.enums;

public class ${cap}Enum {
    MODEL_A,
    MODEL_B
}
`.trim();
}

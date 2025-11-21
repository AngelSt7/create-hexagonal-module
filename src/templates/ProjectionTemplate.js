import { capitalize } from "../helpers/index.js";

export function projectionTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.infrastructure.persistence.projections`;

  return `package ${packagePath};

public interface ${cap}Projection {

}
`;
}
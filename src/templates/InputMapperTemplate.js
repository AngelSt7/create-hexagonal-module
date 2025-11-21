import { capitalize } from "../helpers/index.js";

export function inputMapperTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.application.mappers.input`;

  return `package ${packagePath};

public class ${cap}InputMapper {

    // TODO: De DTOs a Model

}
`;
}
import { capitalize } from "../helpers/index.js";

export function outputMapperTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.application.mappers.output`;

  return `package ${packagePath};

public class ${cap}OutputMapper {

    // TODO: De Model a DTOs de respuesta

}
`;
}
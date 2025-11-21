import { capitalize } from "../helpers/index.js";

export function entityMapperTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.infrastructure.persistence.mappers`;

  return `package ${packagePath};

public class ${cap}EntityMapper {

    // TODO: De Entity a Model y Model a Entity

}
`;
}
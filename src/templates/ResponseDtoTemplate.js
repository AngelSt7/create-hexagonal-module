import { capitalize } from "../helpers/index.js";

export function responseDtoTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.application.dto.output`;

  return `package ${packagePath};

public record ${cap}ResponseDto(
    String message
    // TODO: Add response fields here
) {

}
`;
}
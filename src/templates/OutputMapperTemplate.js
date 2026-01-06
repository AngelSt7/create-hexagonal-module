import { capitalize } from "../helpers/index.js";

export function outputMapperTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.application.mappers.output`;

  return `package ${packagePath};

import org.springframework.stereotype.Component;

@Component
public class ${cap}OutputMapper {

    // TODO: To model to dto mapping methods, implement in UseCases

    // EXAMPLE:
    // public AuthResponseDto withMessage(String message, UserModel userModel) {
    //     return new AuthResponseDto(message, toAuthInfoDto(userModel));
    // }

}
`;
}
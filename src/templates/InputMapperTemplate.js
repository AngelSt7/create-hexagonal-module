import { capitalize } from "../helpers/index.js";


export function inputMapperTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.application.mappers.input`;

  return `
  package ${packagePath};

import org.springframework.stereotype.Component;

@Component
public class ${cap}InputMapper {

    // TODO: To dto to model mapping methods, implement in UseCases
    
    // EXAMPLE:
    // public UserModel fromCreateToModel(CreateAccountDto dto) {
    //     return UserModel.builder()
    //             .fullName(dto.getFullName())
    //             .build();
    // }
}
`;
}
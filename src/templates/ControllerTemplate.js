import { capitalize } from "../helpers/index.js";

export function controllerTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.infrastructure.controllers.web`;
  const useCaseImport = `${basePackage}.${moduleName}.application.useCases.Create${cap}UseCase`;

  return `package ${packagePath};

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ${useCaseImport};

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("${moduleName}") // TODO: Define your endpoint
@RequiredArgsConstructor
public class ${cap}Controller {

    private final Create${cap}UseCase create${cap}UseCase;

}
`;
}
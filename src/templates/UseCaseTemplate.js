import { capitalize } from "../helpers/index.js";

export function useCaseTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.application.useCases`;
  const domainServiceImport = `${basePackage}.${moduleName}.domain.services.${cap}DomainService`;

  return `package ${packagePath};

import org.springframework.stereotype.Service;

import ${domainServiceImport};

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class Create${cap}UseCase {

    private final ${cap}DomainService ${moduleName}DomainService;

}
`;
}
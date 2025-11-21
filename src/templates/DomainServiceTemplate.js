import { capitalize } from "../helpers/index.js";

export function domainServiceTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.domain.services`;
  const repositoryImport = `${basePackage}.${moduleName}.domain.ports.repository.${cap}RepositoryPort`;

  return `package ${packagePath};

import org.springframework.stereotype.Service;

import ${repositoryImport};

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ${cap}DomainService {

    private final ${cap}RepositoryPort ${moduleName}RepositoryPort;

}
`;
}
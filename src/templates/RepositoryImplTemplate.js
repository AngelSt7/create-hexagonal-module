import { capitalize } from "../helpers/index.js";

export function repositoryImplTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.infrastructure.persistence.repositories.implementation`;
  
  const portImport = `${basePackage}.${moduleName}.domain.ports.repository.${cap}RepositoryPort`;
  const jpaImport = `${basePackage}.${moduleName}.infrastructure.persistence.repositories.jpa.Jpa${cap}Repository`;

  return `package ${packagePath};

import org.springframework.stereotype.Repository;

import ${portImport};
import ${jpaImport};

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ${cap}RepositoryImpl implements ${cap}RepositoryPort {

    private final Jpa${cap}Repository jpa${cap}Repository;

    @Override
    // TODO: Implement repository methods

}
`;
}
import { capitalize } from "../helpers/index.js";

export function jpaRepositoryTemplate(basePackage, moduleName) {
  const cap = capitalize(moduleName);
  const packagePath = `${basePackage}.${moduleName}.infrastructure.persistence.repositories.jpa`;
  const entityImport = `${basePackage}.${moduleName}.infrastructure.persistence.entities.${cap}Entity`;

  return `package ${packagePath};

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import ${entityImport};

public interface Jpa${cap}Repository extends JpaRepository<${cap}Entity, UUID> {

}
`;
}
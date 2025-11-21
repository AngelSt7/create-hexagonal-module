import { buildJavaPackage } from "../helpers/javaUtils.js";
import { capitalize } from "../helpers/utils.js";

export function modelTemplate(moduleName, basePath) {
  const className = capitalize(moduleName) + "Model";

  const packagePath = buildJavaPackage(basePath, moduleName, "domain/model");

  return `
package ${packagePath};

import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ${className} {

}
`;
}

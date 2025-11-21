export function dtoTemplate(dtoName, basePackage, moduleName) {
  return `
package ${basePackage}.${moduleName}.application.dto.input;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ${dtoName} {

}
`.trim();
}

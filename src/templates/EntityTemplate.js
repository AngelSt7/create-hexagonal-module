export function entityTemplate(entityName, basePackage, moduleName) {
  return `
package ${basePackage}.${moduleName}.infrastructure.persistence.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "") // TODO: nombre de tabla
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${entityName} {
    private Long id;

}
`.trim();
}

export function entityTemplate(entityName, basePackage, moduleName) {
  return `
package ${basePackage}.${moduleName}.infrastructure.persistence.entities;

import java.util.UUID;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name = "${moduleName}") // TODO: Define your table name
@Getter       
@Setter          
@Builder       
@NoArgsConstructor 
@AllArgsConstructor 
public class ${entityName} {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

}
`.trim();
}

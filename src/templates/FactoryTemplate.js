import { capitalize } from "../helpers/index.js";

export function factoryTemplate(basePackage, moduleName) {
    const cap = capitalize(moduleName);
  return `
package ${basePackage}.${moduleName}.domain.factories;

import org.springframework.stereotype.Component;

@Component
public class ${cap}Factory {

    // TODO: When you need to format models with business rules that the use case should not know about

    // public static TokenModel create(UUID userId, String token) {
    //     OffsetDateTime now = OffsetDateTime.now();
    //     return TokenModel.builder()
    //             .userId(userId)
    //             .token(token)
    //             .createdAt(now)
    //             .expiresAt(now.plusMinutes(15)) 
    //             .build();
    // }

}
`.trim();
}
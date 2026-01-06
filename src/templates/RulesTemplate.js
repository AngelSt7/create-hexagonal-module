import { capitalize } from "../helpers/index.js";

export function rulesTemplate(basePackage, moduleName) {
    const cap = capitalize(moduleName);
  return `
package ${basePackage}.${moduleName}.domain.rules;

import org.springframework.stereotype.Component;

@Component
public class ${cap}CompletionRules {

    // TODO: When you need to apply changes to the domain service and maintain immutability, we apply toBuilder

    // EXAMPLE:
    // public UserModel applyGoogleCompletion(UserModel userModel) {
    //     return userModel.toBuilder()
    //             .authProvider(AuthProviderEnum.GOOGLE)
    //             .accountStatus(AccountStatusEnum.REQUIRED_COMPLETE_ACCOUNT)
    //             .build();
    // }

}
`.trim();
}
export function repositoryPortTemplate(basePackage, moduleName) {
  const ModuleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  return `
package ${basePackage}.${moduleName}.domain.ports.repository;

public interface ${ModuleName}RepositoryPort {

}
  `.trim();
}

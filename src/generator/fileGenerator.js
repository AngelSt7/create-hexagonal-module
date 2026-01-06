import path from "path";
import fs from "fs";
import { createFolderStructure } from "./folderGenerator.js";
import { capitalize, getBasePackage, success, headline } from "../helpers/index.js";
import { modelTemplate, dtoTemplate, entityTemplate, repositoryPortTemplate, domainServiceTemplate, inputMapperTemplate, outputMapperTemplate, useCaseTemplate, entityMapperTemplate, controllerTemplate, jpaRepositoryTemplate, repositoryImplTemplate, projectionTemplate, responseDtoTemplate, enumTemplate, factoryTemplate, rulesTemplate } from "../templates/index.js";

function createModel(moduleRoot, moduleName, basePath) {
  const modelName = `${capitalize(moduleName)}Model.java`;
  const modelPath = path.join(moduleRoot, "domain/model", modelName);
  
  fs.writeFileSync(modelPath, modelTemplate(moduleName, basePath));
  success(`File created: domain/model/${modelName}`);
}

function createDTOs(moduleRoot, moduleName, basePackage) {
  const dtoFolder = path.join(moduleRoot, "application/dto/input");
  
  const createDtoName = `Create${capitalize(moduleName)}Dto.java`;
  const updateDtoName = `Update${capitalize(moduleName)}Dto.java`;

  const createDtoContent = dtoTemplate(`Create${capitalize(moduleName)}Dto`, basePackage, moduleName);
  const updateDtoContent = dtoTemplate(`Update${capitalize(moduleName)}Dto`, basePackage, moduleName);
  fs.writeFileSync(path.join(dtoFolder, createDtoName), createDtoContent);
  fs.writeFileSync(path.join(dtoFolder, updateDtoName), updateDtoContent);

  success(`File created: application/dto/input/${createDtoName}`);
  success(`File created: application/dto/input/${updateDtoName}`);
}

function createEntity(moduleRoot, moduleName, basePackage) {
  const entitiesFolder = path.join(moduleRoot, "infrastructure/persistence/entities");
  const entityName = `${capitalize(moduleName)}Entity.java`;
  
  const entityContent = entityTemplate(`${capitalize(moduleName)}Entity`, basePackage, moduleName);
  
  fs.writeFileSync(path.join(entitiesFolder, entityName), entityContent);
  success(`File created: infrastructure/persistence/entities/${entityName}`);
}

function createUseCase(moduleRoot, moduleName, basePackage) {
  const useCaseFolder = path.join(moduleRoot, "application/useCases");
  const useCaseName = `Create${capitalize(moduleName)}UseCase.java`;
  
  const useCaseContent = useCaseTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(useCaseFolder, useCaseName), useCaseContent);
  success(`File created: application/useCases/${useCaseName}`);
}

function createInputMapper(moduleRoot, moduleName, basePackage) {
  const mapperFolder = path.join(moduleRoot, "application/mappers/input");
  const mapperName = `${capitalize(moduleName)}InputMapper.java`;
  
  const mapperContent = inputMapperTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(mapperFolder, mapperName), mapperContent);
  success(`File created: application/mappers/input/${mapperName}`);
}

function createDomainService(moduleRoot, moduleName, basePackage) {
  const servicesFolder = path.join(moduleRoot, "domain/services");
  const serviceName = `${capitalize(moduleName)}DomainService.java`;
  
  const serviceContent = domainServiceTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(servicesFolder, serviceName), serviceContent);
  success(`File created: domain/services/${serviceName}`);
}

function createRepositoryPort(moduleRoot, moduleName, basePackage) {
  const repositoryFolder = path.join(moduleRoot, "domain/ports/repository");
  const repositoryName = `${capitalize(moduleName)}RepositoryPort.java`;
  
  const repositoryContent = repositoryPortTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(repositoryFolder, repositoryName), repositoryContent);
  success(`File created: domain/ports/repository/${repositoryName}`);
}

function createOutputMapper(moduleRoot, moduleName, basePackage) {
  const mapperFolder = path.join(moduleRoot, "application/mappers/output");
  const mapperName = `${capitalize(moduleName)}OutputMapper.java`;
  
  const mapperContent = outputMapperTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(mapperFolder, mapperName), mapperContent);
  success(`File created: application/mappers/output/${mapperName}`);
}

function createEntityMapper(moduleRoot, moduleName, basePackage) {
  const mapperFolder = path.join(moduleRoot, "infrastructure/persistence/mappers");
  const mapperName = `${capitalize(moduleName)}EntityMapper.java`;
  
  const mapperContent = entityMapperTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(mapperFolder, mapperName), mapperContent);
  success(`File created: infrastructure/persistence/mappers/${mapperName}`);
}

function createProjection(moduleRoot, moduleName, basePackage) {
  const projectionFolder = path.join(moduleRoot, "infrastructure/persistence/projections");
  const projectionName = `${capitalize(moduleName)}Projection.java`;
  
  const projectionContent = projectionTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(projectionFolder, projectionName), projectionContent);
  success(`File created: infrastructure/persistence/projections/${projectionName}`);
}


function createController(moduleRoot, moduleName, basePackage) {
  const controllerFolder = path.join(moduleRoot, "infrastructure/web/controllers");
  const controllerName = `${capitalize(moduleName)}Controller.java`;
  
  const controllerContent = controllerTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(controllerFolder, controllerName), controllerContent);
  success(`File created: infrastructure/controllers/${controllerName}`);
}

function createJpaRepository(moduleRoot, moduleName, basePackage) {
  const jpaFolder = path.join(moduleRoot, "infrastructure/persistence/repositories/jpa");
  const jpaName = `Jpa${capitalize(moduleName)}Repository.java`;
  
  const jpaContent = jpaRepositoryTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(jpaFolder, jpaName), jpaContent);
  success(`File created: infrastructure/persistence/repositories/jpa/${jpaName}`);
}

function createRepositoryImpl(moduleRoot, moduleName, basePackage) {
  const implFolder = path.join(moduleRoot, "infrastructure/persistence/repositories/implementation");
  const implName = `${capitalize(moduleName)}RepositoryImpl.java`;
  
  const implContent = repositoryImplTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(implFolder, implName), implContent);
  success(`File created: infrastructure/persistence/repositories/implementation/${implName}`);
}

function createResponseDto(moduleRoot, moduleName, basePackage) {
  const dtoFolder = path.join(moduleRoot, "application/dto/output");
  const dtoName = `${capitalize(moduleName)}ResponseDto.java`;
  
  const dtoContent = responseDtoTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(dtoFolder, dtoName), dtoContent);
  success(`File created: application/dto/output/${dtoName}`);
}

function createEnums(moduleRoot, moduleName, basePackage){
  const enumFolder = path.join(moduleRoot, "domain/enums");
  const enumName = `${capitalize(moduleName)}Enum.java`;
  
  const enumContent = enumTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(enumFolder, enumName), enumContent);
  success(`File created: domain/enums/${enumName}`);
}

function createFactories(moduleRoot, moduleName, basePackage) {

  const factoryFolder = path.join(moduleRoot, "domain/factories");
  const factoryName = `${capitalize(moduleName)}Factory.java`;
  
  const factoryContent = factoryTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(factoryFolder, factoryName), factoryContent);
  success(`File created: domain/factories/${factoryName}`);

}

function createRules(basePackage, moduleName) {
  const rulesFolder = path.join(moduleRoot, "domain/rules");
  const rulesName = `${capitalize(moduleName)}CompletationRules.java`;
  
  const rulesContent = rulesTemplate(basePackage, moduleName);
  
  fs.writeFileSync(path.join(rulesFolder, rulesName), rulesContent);
  success(`File created: domain/rules/${rulesName}`);
}


export async function generateModule(basePath, moduleName) {
  const moduleRoot = path.join(basePath, moduleName);
  const basePackage = getBasePackage(basePath);

  await createFolderStructure(moduleRoot);

  createModel(moduleRoot, moduleName, basePath);
  createDTOs(moduleRoot, moduleName, basePackage);
  createEntity(moduleRoot, moduleName, basePackage);
  createRepositoryPort(moduleRoot, moduleName, basePackage);
  createDomainService(moduleRoot, moduleName, basePackage);
  createInputMapper(moduleRoot, moduleName, basePackage);
  createOutputMapper(moduleRoot, moduleName, basePackage);
  createUseCase(moduleRoot, moduleName, basePackage);
  createEntityMapper(moduleRoot, moduleName, basePackage);
  createProjection(moduleRoot, moduleName, basePackage);
  createController(moduleRoot, moduleName, basePackage);
  createJpaRepository(moduleRoot, moduleName, basePackage);
  createRepositoryImpl(moduleRoot, moduleName, basePackage);
  createResponseDto(moduleRoot, moduleName, basePackage);
  createEnums(moduleRoot, moduleName, basePackage);
  createFactories(moduleRoot, moduleName, basePackage);
  createRules(moduleRoot, moduleName, basePackage);


  headline(`
--------------------------------------
      MODULE '${moduleName}' READY
--------------------------------------
`);
}
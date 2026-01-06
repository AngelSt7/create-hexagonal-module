# @angexxl/hexamod

A powerful CLI to generate **Java Hexagonal Architecture** modules for **Spring Boot** projects in seconds.

Designed to follow Domain-Driven Design (DDD) best practices, including separation of concerns, domain rules, factories, and immutable models.

## Installation

Run directly with `npx`:

```bash
npx @angexxl/hexamod
```

Or install globally:

```bash
npm install -g @angexxl/hexamod
```

## Usage

Navigate to your project folder and run:

```bash
hexamod
```

The CLI will ask for:

1. **Base Path** - e.g., `src/main/java/com/company/project` (It saves this path for future use).
2. **Module Name** - e.g., `user`, `order`, `payment`.

## Generated Structure

The tool creates a full "Vertical Slice" module following strict Hexagonal Architecture layers:

```text
moduleName/
├── application/
│   ├── dto/
│   │   ├── input/
│   │   │   ├── CreateModuleDto.java
│   │   │   └── UpdateModuleDto.java
│   │   └── output/
│   │       └── ModuleResponseDto.java
│   ├── mappers/
│   │   ├── input/
│   │   │   └── ModuleInputMapper.java
│   │   └── output/
│   │       └── ModuleOutputMapper.java
│   └── useCases/
│       └── CreateModuleUseCase.java
├── domain/
│   ├── enums/
│   │   └── ModuleEnum.java
│   ├── factories/
│   │   └── ModuleFactory.java      <-- For complex object creation
│   ├── model/
│   │   └── ModuleModel.java        <-- Immutable Domain Model (@Builder toBuilder=true)
│   ├── ports/
│   │   ├── repository/
│   │   │   └── ModuleRepositoryPort.java
│   │   └── service/
│   ├── rules/
│   │   └── ModuleCompletionRules.java <-- Encapsulated Business Rules
│   └── services/
│       └── ModuleDomainService.java
└── infrastructure/
    ├── persistence/
    │   ├── entities/
    │   │   └── ModuleEntity.java
    │   ├── mappers/
    │   │   └── ModuleEntityMapper.java
    │   ├── projections/
    │   │   └── ModuleProjection.java
    │   └── repositories/
    │       ├── implementation/
    │       │   └── ModuleRepositoryImpl.java
    │       └── jpa/
    │           └── JpaModuleRepository.java
    └── web/
        └── controllers/
            └── ModuleController.java
```

## Key Features

- **DDD Ready:** Includes folders for `Factories`, `Rules`, and `Domain Services` out of the box.
- **Immutable Models:** Generates Domain Models using Lombok's `@Builder(toBuilder = true)`.
- **Persistence Separation:** Clean separation between `JpaRepository`, `RepositoryPort`, and `RepositoryImplementation`.
- **Smart Configuration:** Remembers your `src/main/java/...` path so you don't have to type it every time.

## Commands

| Command | Description |
|---------|-------------|
| `npx @angexxl/hexamod` | Run the generator |
| `npx @angexxl/hexamod --reset-path` | Clear the saved base path configuration |

## License

MIT
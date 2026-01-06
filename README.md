# TrabalhoSolid345

# 🛒 E-commerce API - Refatoração SOLID & Clean Architecture

Este projeto é uma demonstração de como transformar um código "God Class" (monolítico e de difícil manutenção) em uma arquitetura profissional, seguindo os princípios **SOLID** e padrões de design como **Repository**, **Factory** e **Strategy**.

## 🚀 Arquitetura do Projeto

A estrutura foi dividida em camadas para garantir o isolamento das regras de negócio:

- **Domain**: Contém as entidades puras e regras de negócio (ex: cálculo de frete por tipo de produto).
- **Services**: Orquestra o fluxo da aplicação (Validação -> Pagamento -> Persistência -> Notificação).
- **Repositories**: Abstrai a camada de dados. O sistema não depende do Prisma; o Prisma é apenas uma implementação.
- **Providers**: Lida com serviços externos (envio de e-mail via Nodemailer/Ethereal).
- **Payments (Strategies)**: Permite adicionar novos métodos de pagamento sem alterar o código existente.
- **Controllers**: Apenas lida com a entrada e saída via HTTP.



## 🛠️ Princípios SOLID Aplicados

1. **SRP (Single Responsibility Principle)**: Cada classe tem apenas uma razão para mudar.
2. **OCP (Open/Closed Principle)**: O sistema é aberto para extensões (novos pagamentos, novos produtos) e fechado para modificações.
3. **LSP (Liskov Substitution Principle)**: As implementações de `IProduct` e `IPaymentMethod` podem ser trocadas sem quebrar a aplicação.
4. **ISP (Interface Segregation Principle)**: Interfaces específicas para cada serviço (Email, Repositório, Pagamento).
5. **DIP (Dependency Inversion Principle)**: O `OrderService` depende de abstrações (interfaces) e não de implementações concretas.

## 📦 Como rodar o projeto

1. **Instale as dependências**:
   ```bash
   npm install

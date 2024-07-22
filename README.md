No módulo 3 do #programadores do amanhã desenvolvi dois diagramas (conceitual e relacional) que demonstravam um esquema para evitar desperdícios de alimento,seguindo a mesma linha de desenvolvimento quis trazer essa mesma temática para meu projeto atual:uma API que visa evitar desperdícios de alimentos no Brasil.

**Problema:**

- Como sabemos,o Brasil enfrenta um grande desafio relacionado ao desperdício de alimentos, com toneladas de alimentos sendo desperdiçados diariamente.O desperdício de alimentos não só impacta a economia, mas também agrava questões ambientais e sociais, como a fome e a insegurança alimentar.

**Solução:**

- Desenvolvemos uma API simples e utilitária que ajuda a monitorar e gerenciar alimentos próximos ao vencimento, registrar desperdício e sugerir receitas para utilizar alimentos disponíveis.
- A API fornece informações em tempo real sobre os alimentos, permitindo ações proativas para reduzir o desperdício.

---

### ** Processo de Elaboração da Solução**

**Planejamento:**

- Identificação das funcionalidades necessárias: monitoramento de validade, registro de desperdício, e sugestões de receitas.
- Escolha da tecnologia: JavaScript com Node.js e Express para criar uma API leve e eficiente.

**Desenvolvimento:**

- **Modelagem dos Dados:**
    - Criamos um modelo para representar os alimentos e desperdícios usando arrays.
- **Desenvolvimento da API:**
    - Implementamos três rotas GET:
        - `/alimentos/validade-proxima`: Lista alimentos próximos da validade.
        - `/alimentos/desperdicio`: Registra a quantidade de alimentos desperdiçados.
        - `/receitas/sugestoes`: Sugere receitas baseadas nos alimentos disponíveis.
- **Testes:**
    - Realizamos testes manuais usando o Postman para garantir que todas as rotas funcionam corretamente e retornam as informações esperadas.

**Implementação:**

- Deploy local com possibilidade de extensão para servidores em nuvem.
- Documentação das rotas e funcionalidades para facilitar a utilização por desenvolvedores e stakeholders.

---

### ** Apresentação do Sistema e Sua Utilidade**

**Sistema:**

- A API é um sistema backend que pode ser integrado com aplicativos web e móveis, oferecendo informações valiosas para reduzir o desperdício de alimentos.
- Estrutura em padrão MVC (Model-View-Controller) para facilitar a manutenção e escalabilidade.

**Utilidade:**

- **Monitoramento Proativo:**
    - Permite a consumidores, mercados e instituições monitorar a validade dos alimentos, reduzindo o risco de vencimento e desperdício.
- **Registro de Desperdício:**
    - Facilita o registro e acompanhamento de alimentos desperdiçados, ajudando a identificar padrões e tomar medidas corretivas.
- **Sugestão de Receitas:**
    - Propõe receitas utilizando alimentos que estão disponíveis e próximos do vencimento, incentivando o consumo consciente.

**Impacto:**

- **Econômico:**
    - Redução de perdas financeiras associadas ao desperdício de alimentos.
- **Ambiental:**
    - Diminuição da quantidade de resíduos orgânicos, contribuindo para um ambiente mais sustentável.
- **Social:**
    - Contribuição para a redução da fome e insegurança alimentar, aproveitando melhor os recursos disponíveis.

---

### **Conclusão**

- Essa API pode ser uma  ferramenta eficaz e prática para combater o desperdício de alimentos no Brasil.Através de funcionalidades simples, permite um gerenciamento eficiente dos alimentos, promovendo o consumo consciente e sustentável.Estou comprometida em continuar aprimorando a API, adicionando novas funcionalidades e integrando com outras soluções para maximizar seu impacto positivo.

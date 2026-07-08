## Avanti - Landing page take home

Landing page desenvolvida como teste técnico. Reproduz o layout do Figma com versões desktop e mobile.

🔗 **Demo:** [avanti-store.cgabrieu.online](https://avanti-store.cgabrieu.online)

### Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- [Swiper](https://swiperjs.com/) para os carrosséis de produtos

### Estrutura

```
.
├── index.html
├── assets/
│   ├── icons/
│   └── images/
├── css/
│   ├── main.css
│   ├── variables.css
│   ├── reset.css
│   ├── layout.css
│   ├── components.css
│   ├── sections.css
│   └── responsive.css
└── js/
    ├── main.js
    └── modules/
        ├── carousel.js
        ├── footer.js
        ├── search.js
        └── utils.js
```

O CSS foi separado por responsabilidade (variáveis, reset, layout, componentes, seções e responsivo). O JS usa ES Modules — cada funcionalidade em seu próprio módulo.

### Como rodar

O projeto usa ES Modules nativos, então precisa ser servido via HTTP (abrir o `index.html` direto no navegador não funciona).

**Opção 1 — Live Server (VSCode)**

Instale a extensão _Live Server_ e clique com o botão direito no `index.html` → _Open with Live Server_.

**Opção 2 — Terminal**

```bash
npx serve
```

Depois acesse `http://localhost:3000`.

### Funcionalidades

- Layout responsivo (mobile ≤ 768px, desktop ≥ 769px)
- Carrossel de produtos com Swiper
- Menu mobile com hamburger (visual)
- Footer accordion no mobile (clique nas colunas para expandir)
- Barra de busca com feedback ao submeter
- Fechar popup da busca clicando fora

### Notas

- Os produtos do carrossel são gerados via _javascript_ a partir de um template
- A imagem do banner de contato tem versão específica para mobile (`contact-banner-mobile.png`) via `<picture>`

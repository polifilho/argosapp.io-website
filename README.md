# argosapp.io — Landing page

Site institucional do **Argos**, sistema de controle de estoque para o celular.
HTML, CSS e JS puros: sem build, sem dependências.

## Estrutura

```
├── index.html      # página única (conteúdo + SEO + JSON-LD)
├── styles.css      # estilos
├── script.js       # ano do rodapé
├── robots.txt
├── sitemap.xml
└── assets/         # imagens
    ├── argos_horizontal.png # logotipo (header, rodapé e JSON-LD)
    ├── logo-argos.svg       # favicon (só o símbolo)
    ├── app-preview.png      # print do app exibido no hero (600×1300)
    └── social-preview.png   # imagem de compartilhamento, 1200×630 (og:image)
```

## Rodar localmente

```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

## Imagens

- Coloque todas as imagens em `assets/`.
- Mantenha os arquivos leves: o `app-preview.png` foi reduzido para 600 px de largura
  (`sips --resampleWidth 600 arquivo.png` no macOS). Ao trocá-lo, atualize `width`/`height` no `<img>`.
- `social-preview.png` deve ser paisagem, 1200×630.

## SEO

Ao mudar de domínio ou adicionar páginas, atualize:

- `<link rel="canonical">`, `og:url`, `og:image` e `twitter:image` em `index.html`
- URLs do JSON-LD (`application/ld+json`) em `index.html`
- `sitemap.xml` e a linha `Sitemap:` do `robots.txt`

Ao alterar o FAQ da página, atualize também o bloco `FAQPage` do JSON-LD.

## Branches

1. Bug: `bugfix-1`
2. Feature: `feat-1`

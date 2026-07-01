# 📌 Pendências — Site Método Pantoja

> Lista viva. Conforme a gente resolve, eu risco/removo o item e dou commit.
> (O histórico do que já foi feito fica em `docs/registro-de-alteracoes.html`.)

---

## 🚨 Bloqueios / decisões em aberto

> ✅ Resolvidos em 30/06/2026: domínio temporário (Vercel), guia da planilha reexplicado e prompts da imagem do Hero entregues — ver `docs/registro-de-alteracoes.html`.

- **Domínio de verdade** — a apostila já mostra `fabiopantoja.com.br/curso` (rodapé + CTA final), mas o link clicável do CTA aponta para a Vercel por baixo (domínio ainda não existe). Quando comprar: (1) configurar redirect de `fabiopantoja.com.br/curso` → site (ou hospedar lá direto), (2) trocar `SITE_URL` em `src/lib/site.ts` (hoje `curso-de-musica-com-ia.vercel.app`) pelo domínio real, (3) atualizar o `href` do CTA da apostila para o domínio real.

## 🙋 Dependem de você (Pantoja)

- [x] **Apostila completa (isca)** — ✅ PDF final aprovado e no ar em `public/iscas/apostila-completa.pdf`.
- [x] **Planilha de leads** — ✅ Apps Script publicado, `LEAD_WEBHOOK_URL` testada (gravou de verdade) e configurada nas Environment Variables da Vercel.
- [x] **Publicar na Vercel** — ✅ feito pelo Pantoja, site no ar.
- [x] **Confirmar que o Redeploy pegou a variável** — ✅ confirmado: leads reais ("fabio", "teste Pantoja", origem "landing") gravando na aba "Leads" da planilha em produção. Ponta a ponta funcionando: cadastro → planilha → download da apostila.
- [ ] *(opcional, baixo risco)* Apagar linhas de teste na planilha (linhas 2-9, mantendo o cabeçalho) e o PDF de comparação `Apostila/Apostila-Musicas-Cristas-com-IA-Fabio-Pantoja.pdf` (sem `-COM-CTA`) — não é mais necessário agora que o final foi aprovado. Aviso e não apago sozinho.

## 🛠️ Comigo (faço quando você liberar / me passar o insumo)

- [ ] **Ajustes no site** — anotações que você for fazendo olhando pelo celular entram aqui (texto, cor, ordem das seções, etc.).

## 🔁 Combinados (regras fixas)

- Toda alteração = **commit atômico** + linha no registro (`docs/registro-de-alteracoes.html`).
- **Não dou `git push`** sem você pedir.

---

## 🗒️ Anotações do Pantoja (do celular)

> Vou colando aqui o que você for falando, e transformando em itens acima.

### 🎯 Rodada 1 — Topo + Hero (aguardando "pode fazer")

**TOPO (barra fixa / Header)**
- [x] **1. Essência no topo** — ✅ "Crie uma música pra quem você ama" (opção A).
- [x] **2. Botão do topo = "Comprar"** — ✅ feito (curto e sempre visível na barra fixa).
- [ ] **3. Ícone ♪** — provisório; Pantoja decide depois. *(pendência dele, não mexer)*

**HERO**
- [x] **4. Remover o selo "Curso intensivo · 3 horas · do zero"** — ✅ virou "O presente que ninguém esquece".
- [x] **5. Reescrever a copy do Hero** — ✅ headline "Emocione quem você ama…" + subtítulo milimétrico quebrando objeções. *(aberto a iterar quando você vir no celular)*
- [x] **6. CTA principal** — ✅ "Quero presentear quem eu amo com uma música".

**GERAL**
- [x] **7. Animações** — ✅ pulso de brilho nos botões de compra (todos os CTAs). *(posso adicionar um "brilho que varre" o botão se quiser mais; e reforçar reveal das seções — me diz)*

> Regra reforçada: marcar TUDO que o Pantoja falar (destacado) e sempre devolver um resumo.

### 🎯 Rodada 2 — Refino do Hero

- [x] **Caixinha do método** — ✅ agora cita "o mesmo método que o Pantoja usa nas músicas da Escritura Cantada".
- [x] **Linha de provas** — ✅ "Em poucos minutos você cria sua primeira música" + "Sem experiência nenhuma — nem em música, nem em IA".
- [x] **Animação de entrada mais clara** — ✅ reveal reforçado (mais deslocamento + leve escala). *(me diz no celular se quer ainda mais forte)*
- ✅ Headline e subtítulo do Hero: **aprovados** pelo Pantoja.

### 🎯 Rodada 3 — Seção "Quem te ensina"

- [x] **Parágrafo de proposta** — ✅ síntese da fala do Pantoja (método aberto + copiar/colar + Escritura Cantada + promessa de criar músicas para Deus/você/quem ama) adicionada na seção Sobre.

**Pendências de asset (Pantoja cria, eu integro depois):**
- [x] **Fundo do topo (Hero)** — ✅ vídeo `video-fundo-hero.mp4` (sem som, loop), **só no celular**, aparecendo **inteiro no topo** (proporção 9:16) com esmaecimento pro creme — resolveu o corte/zoom. *Conferir no celular real e dizer se quer o vídeo mais forte/fraco ou mais alto.*
- [ ] **(opcional) Vídeo horizontal para PC** — se quiser fundo no desktop também, criar um vídeo horizontal separado. Por ora o PC fica com fundo creme limpo.
- [ ] **Imagem do momento em família** (pessoa dando presente) — Pantoja ainda vai definir quem aparece. *(seção do Hero, lado direito — hoje é placeholder)*

### 🎯 Rodada 4 — Isca vira a apostila completa (mudança de estratégia)

- [x] **Capa da apostila** — ✅ corrigida ("Da Escritura ao louvor", com S) e aprovada. Integrada como página 1 da apostila (imagem full-page).
- [x] **Fontes da apostila** — ✅ baixadas para `Apostila/fonts/` e `@font-face` em caminhos relativos.
- [x] **Paleta da apostila** — ✅ trocada de roxo para azul-marinho + terracota + dourado (identidade da marca).
- [x] **Reescrever a copy da seção de captura** — ✅ agora "Baixe a apostila completa do curso — de graça" (16 páginas, dicas, macetes), botão "Quero a apostila grátis".
- [x] **Decisão: qual contato pedir** — ✅ **só Nome + WhatsApp** (sem e-mail; menos campos = mais conversão).
- [x] **Decisão: como entregar** — ✅ **download na hora** na tela (já implementado).
- [x] **Colocar o PDF final** em `public/iscas/apostila-completa.pdf` — ✅ feito.
- [x] **Apostila trazida e ajustada** — ✅ na pasta `Apostila/`. Feito: fontes resolvidas, paleta azul-marinho, capa nova, rodapé com nome+site e seção de CTA (curso + WhatsApp).
- [x] **Pantoja conferir o PDF `…-COM-CTA.pdf`** e aprovar — ✅ aprovado ("deixa pra lá senão não anda o site"), virou o PDF oficial do site.
- [x] **Confirmar o domínio** do link na apostila/rodapé — ✅ mostra `fabiopantoja.com.br/curso` com link real por baixo apontando pra Vercel (ver seção "🚨 Bloqueios").
- [x] **PDF final → site** — ✅ copiado para `public/iscas/apostila-completa.pdf`.

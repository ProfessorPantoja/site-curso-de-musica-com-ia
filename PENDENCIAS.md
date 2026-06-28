# 📌 Pendências — Site Método Pantoja

> Lista viva. Conforme a gente resolve, eu risco/removo o item e dou commit.
> (O histórico do que já foi feito fica em `docs/registro-de-alteracoes.html`.)

---

## 🙋 Dependem de você (Pantoja)

- [ ] **Apostila completa (isca)** — a isca NÃO é mais uma amostra: é a **apostila COMPLETA do curso**, dada de graça em troca do contato (estratégia: gera desejo pela explicação ao vivo do curso). Capa já feita (incluir correção "Excritura → Escritura"). Colocar o PDF final em `public/iscas/` (nome a definir, ex.: `apostila-completa.pdf`). Pantoja vai me mandar a apostila para revisão.
- [ ] **Planilha de leads** — seguir `docs/configurar-planilha-leads.html` (≈5 min): criar a planilha, colar o Apps Script, publicar como App da Web e me mandar a URL `/exec`.
- [x] **Publicar na Vercel** — ✅ feito pelo Pantoja, site no ar. *(quando a planilha estiver pronta, adicionar `LEAD_WEBHOOK_URL` nas Environment Variables da Vercel e refazer o deploy)*

## 🛠️ Comigo (faço quando você liberar / me passar o insumo)

- [ ] **Ligar a planilha** — assim que você me mandar a URL `/exec`, configuro `LEAD_WEBHOOK_URL` e confirmo que os leads estão caindo na planilha.
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
- [ ] **Fundo do topo (Hero)** — imagem ou vídeo sutil dando movimento/design. Pantoja vai criar. *(testar imagem vs. vídeo)*
- [ ] **Imagem do momento em família** (pessoa dando presente) — Pantoja ainda vai definir quem aparece. *(seção do Hero, lado direito — hoje é placeholder)*

### 🎯 Rodada 4 — Isca vira a apostila completa (mudança de estratégia)

- [x] **Capa da apostila** — ✅ corrigida ("Da Escritura ao louvor", com S) e aprovada. Integrada como página 1 da apostila (imagem full-page).
- [x] **Fontes da apostila** — ✅ baixadas para `Apostila/fonts/` e `@font-face` em caminhos relativos.
- [x] **Paleta da apostila** — ✅ trocada de roxo para azul-marinho + terracota + dourado (identidade da marca).
- [x] **Reescrever a copy da seção de captura** — ✅ agora "Baixe a apostila completa do curso — de graça" (16 páginas, dicas, macetes), botão "Quero a apostila grátis".
- [x] **Decisão: qual contato pedir** — ✅ **só Nome + WhatsApp** (sem e-mail; menos campos = mais conversão).
- [x] **Decisão: como entregar** — ✅ **download na hora** na tela (já implementado).
- [ ] **Colocar o PDF final** em `public/iscas/apostila-completa.pdf` (depois das edições da apostila).
- [x] **Apostila trazida e ajustada** — ✅ na pasta `Apostila/`. Feito: fontes resolvidas, paleta azul-marinho, capa nova, rodapé com nome+site e seção de CTA (curso + WhatsApp).
- [ ] **Pantoja conferir o PDF `…-COM-CTA.pdf`** e aprovar (comparar com o anterior). Depois: virar o PDF oficial e remover o de comparação.
- [ ] **Confirmar o domínio** do link na apostila/rodapé (hoje `fabiopantoja.com.br`).
- [ ] **PDF final → site**: copiar para `public/iscas/apostila-completa.pdf` quando aprovado.

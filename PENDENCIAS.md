# 📌 Pendências — Site Método Pantoja

> Lista viva. Conforme a gente resolve, eu risco/removo o item e dou commit.
> (O histórico do que já foi feito fica em `docs/registro-de-alteracoes.html`.)

---

## 🚨 Bloqueios / decisões em aberto

> Rodada ditada por voz na noite de 30/06/2026 — resolvida na sessão seguinte (mesma noite, após confirmação de texto com o Pantoja). Só o item 6 (ideia) segue em aberto.

1. ✅ **BUG — apostila parou de baixar — corrigido.** Causa raiz: a rota `src/app/api/lead/route.ts` só liberava o download **depois** de esperar a resposta do webhook do Google Apps Script (planilha de leads) — e esse webhook tem cold start instável, às vezes lento o suficiente para estourar o timeout da função serverless na Vercel, travando o download por completo mesmo com o PDF saudável. Corrigido: o envio para a planilha agora roda em segundo plano via `after()` do Next.js (não bloqueia mais a resposta ao navegador); testado local (resposta caiu de 4,8s para 44ms, envio em segundo plano confirmado sem erro no log) e validado com `tsc`, `next build` e `eslint` limpos. **Pendente:** Pantoja testar em produção depois do próximo deploy para confirmar.

2. ✅ **Rodapé da apostila (PDF) — corrigido.** Confirmado com Pantoja: agora é `Método Pantoja de Criação de Música com IA · Prof. Pantoja · (27) 99268-1959 · fabiopantoja.com.br/curso` (`Apostila/apostila-estrutura.html:35`). PDF regenerado via Chrome headless + comprimido com Ghostscript (mesmo processo de sempre); conferido visualmente (capa sem rodapé, miolo e última página com o texto novo, sem cabeçalho de data indesejado do Chrome, link `/URI` do CTA preservado). Copiado para `Apostila/…-COM-CTA.pdf` e `public/iscas/apostila-completa.pdf`.

3. ✅ **Rodapé do site sem "www" — corrigido.** `src/components/Footer.tsx` agora mostra `© {ano} Fábio Pantoja · www.fabiopantoja.com.br · Curso intensivo de criação musical`. Se além do www ele também quiser telefone no rodapé do site, é só pedir.

4. ✅ **Nome do arquivo baixado — corrigido.** `site.leadMagnet.nomeArquivoDownload` agora é `"Apostila Completa - Método Pantoja de Criação de Música com IA - Prof. Pantoja.pdf"` (`src/lib/site.ts:59`) — o nome antigo estava desatualizado (dizia "Curso Música Cristã com IA", de antes do site ser reposicionado para "Método Pantoja").

5. ✅ **Seção "baixar apostila" reposicionada — corrigido.** `<CapturaLead />` movida em `src/app/page.tsx` para logo depois de `<Hero />` e `<Story />` — agora é a **3ª seção** da home (antes era a 10ª de 12, quase no rodapé). Confirmado no HTML renderizado: ordem `topo → historia → amostra → metodo → oferta → faq`.

6. 💡 **Ideia — validar telefone do lead (pesquisado, ainda não implementado).** Opções levantadas, da mais simples à mais robusta:
   - **Formato (grátis, já existe)** — regex de 10-13 dígitos em `api/lead/route.ts`. Pega erro de digitação, não confirma que o número é real.
   - **Lookup/HLR silencioso** — consulta a operadora se o número existe/está ativo, sem pedir nada à pessoa (zero fricção no formulário). Tem custo por consulta; não confirma que é o dono do número, só que está em uso.
   - **OTP por SMS (Twilio Verify e similares)** — código de confirmação que a pessoa digita. Custo por envio **e** exige uma etapa extra no formulário — **contraria a decisão já tomada** de "só Nome + WhatsApp, sem fricção, para maximizar conversão".
   - **OTP via WhatsApp Business API** — mais alinhado ao canal, mas setup mais burocrático (verificação de negócio com a Meta).

   **Minha recomendação:** não vale adicionar uma etapa de confirmação (SMS/WhatsApp OTP) nesse formulário — fricção conflita direto com a prioridade de conversão do projeto. Se quiser filtrar números claramente falsos sem atrapalhar quem preenche, o lookup/HLR silencioso é o caminho, mas tem custo recorrente por lead. Pantoja decide se topa esse custo; por ora fica só registrado, nada implementado.

7. ✅ **BUG raiz do nome do arquivo — achado e corrigido (30/06/2026, madrugada).** O item 4 tinha mudado o texto certo, mas o download continuava salvando como `apostila-completa.pdf`, às vezes duplicado (`(11).pdf`, `(12).pdf`...). Pantoja mandou print mostrando a pasta Downloads cheia de cópias — percebeu que **estava baixando silenciosamente a cada clique** (sem nenhum aviso na tela), achou que não tinha funcionado e foi clicando várias vezes. **Causa raiz de verdade:** o Vercel serve arquivos estáticos de `/public` com `Content-Disposition: inline; filename="apostila-completa.pdf"` fixo — esse header do servidor vence o atributo `download` do HTML, então o nome customizado nunca tinha efeito, em nenhum navegador/perfil. **Corrigido:** PDF agora servido por `src/app/api/apostila/route.ts`, que define `Content-Disposition: attachment; filename*=UTF-8''...` com o nome certo (testado: header confere, bytes batem com o arquivo original). De brinde, o botão agora dá feedback visual após o clique ("Baixada! ✓") pra ninguém ficar clicando sem saber se funcionou.

> ✅ Já resolvidos em 30/06/2026 (cedo): domínio temporário (Vercel), guia da planilha reexplicado, prompts da imagem do Hero entregues, PDF final da isca no ar, planilha de leads confirmada ponta a ponta — ver `docs/registro-de-alteracoes.html`.

- **Domínio de verdade** — a apostila já mostra `fabiopantoja.com.br/curso` (rodapé + CTA final), mas o link clicável do CTA aponta para a Vercel por baixo (domínio ainda não existe). Quando comprar: (1) configurar redirect de `fabiopantoja.com.br/curso` → site (ou hospedar lá direto), (2) trocar `SITE_URL` em `src/lib/site.ts` (hoje `curso-de-musica-com-ia.vercel.app`) pelo domínio real, (3) atualizar o `href` do CTA da apostila para o domínio real.

## 🙋 Dependem de você (Pantoja)

- [x] **Apostila completa (isca)** — ✅ PDF final aprovado e no ar em `public/iscas/apostila-completa.pdf`.
- [x] **Planilha de leads** — ✅ Apps Script publicado, `LEAD_WEBHOOK_URL` testada (gravou de verdade) e configurada nas Environment Variables da Vercel.
- [x] **Publicar na Vercel** — ✅ feito pelo Pantoja, site no ar.
- [x] **Confirmar que o Redeploy pegou a variável** — ✅ confirmado: leads reais ("fabio", "teste Pantoja", origem "landing") gravando na aba "Leads" da planilha em produção. Ponta a ponta funcionando: cadastro → planilha → download da apostila.
- [ ] *(opcional, baixo risco)* Apagar linhas de teste na planilha — incluindo 4 novas de 30/06/2026 à noite ("Teste Diagnóstico Claude", "Teste Diagnóstico Claude 2", "Teste Local Claude", "Teste Local Claude 2"), geradas ao diagnosticar o bug de download — e o PDF de comparação `Apostila/Apostila-Musicas-Cristas-com-IA-Fabio-Pantoja.pdf` (sem `-COM-CTA`), não mais necessário. Aviso e não apago sozinho.

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

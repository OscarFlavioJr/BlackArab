document.getElementById("aplicar-filtros").addEventListener("click", () => {
  // Captura os filtros selecionados
  const tiposSelecionados = Array.from(
    document.querySelectorAll(".filtro-tipo:checked")
  ).map((el) => el.value);
  const moagensSelecionadas = Array.from(
    document.querySelectorAll(".filtro-moagem:checked")
  ).map((el) => el.value);
  const precoSelecionado = document.querySelector(
    'input[name="preco"]:checked'
  )?.value;

  // Obtém os produtos
  const produtos = document.querySelectorAll(".produto");

  produtos.forEach((produto) => {
    // Filtra por tipo
    const tipo = produto
      .querySelector(".description li:first-child")
      .textContent.toLowerCase(); // Exemplo: "café arábica"
    const mostraTipo =
      tiposSelecionados.length === 0 ||
      tiposSelecionados.some((tipoSel) => tipo.includes(tipoSel));

    // Filtra por moagem
    const moagem = produto
      .querySelector(".description li:nth-child(3)")
      .textContent.toLowerCase(); // Exemplo: "clara"
    const mostraMoagem =
      moagensSelecionadas.length === 0 ||
      moagensSelecionadas.some((moagemSel) => moagem.includes(moagemSel));

    // Filtra por preço
    const preco = parseFloat(
      produto
        .querySelector(".preco")
        .textContent.replace("R$", "")
        .replace(",", ".")
    );
    let mostraPreco = true;
    if (precoSelecionado === "baixo") mostraPreco = preco <= 50;
    if (precoSelecionado === "medio") mostraPreco = preco > 50 && preco <= 100;
    if (precoSelecionado === "alto") mostraPreco = preco > 100;

    // Mostra ou esconde o produto
    if (mostraTipo && mostraMoagem && mostraPreco) {
      produto.style.display = "block";
    } else {
      produto.style.display = "none";
    }
  });
});

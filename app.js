document.addEventListener("DOMContentLoaded", () => {
  const carrinho = [];
  const bagIcon = document.getElementById("bag");
  const bagFilledIcon = document.getElementById("bag-filled");
  const carrinhoModal = document.getElementById("carrinho-modal");
  const closeModal = document.querySelector(".close");
  const itemCarrinho = document.getElementById("item-carrinho");
  const totalContainer = document.getElementById("total");
  const produtos = document.querySelectorAll(".swiper-slide");
  const spanCarrinho = document.querySelector(".icons span");

  let contadorItens = 0;

  function atualizarIconeBolsa() {
    if (contadorItens === 0) {
      bagIcon.style.opacity = "1";
      bagFilledIcon.style.opacity = "0";
    } else {
      bagIcon.style.opacity = "0";
      bagFilledIcon.style.opacity = "1";
    }
  }

  function abrirModalCarrinho() {
    carrinhoModal.style.display = "block";
    atualizarCarrinho();
  }

  bagIcon.addEventListener("click", abrirModalCarrinho);
  bagFilledIcon.addEventListener("click", abrirModalCarrinho);

  closeModal.addEventListener("click", () => {
    carrinhoModal.style.display = "none";
  });

  produtos.forEach((produto) => {
    const botaoComprar = produto.querySelector(".comprar");
    botaoComprar.addEventListener("click", () => {
      const nome = produto.querySelector("h1").textContent;
      const precoTexto = produto.querySelector("p:last-of-type").textContent;
      const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

      adicionarAoCarrinho(nome, preco);
    });
  });

  function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find((item) => item.nome === nome);

    if (!itemExistente) {
      carrinho.push({ nome, preco, quantidade: 1 });

      contadorItens += 1;
      spanCarrinho.textContent = contadorItens;
    } else {
      itemExistente.quantidade += 1;
    }

    atualizarCarrinho();
    atualizarIconeBolsa();
  }

  function removerDoCarrinho(nome) {
    const itemIndex = carrinho.findIndex((item) => item.nome === nome);

    if (itemIndex !== -1) {
      const item = carrinho[itemIndex];

      if (item.quantidade > 1) {
        item.quantidade -= 1;
      } else {
        carrinho.splice(itemIndex, 1);
        contadorItens -= 1;
        spanCarrinho.textContent = contadorItens;
      }
    }

    atualizarCarrinho();
    atualizarIconeBolsa();
  }

  function atualizarCarrinho() {
    itemCarrinho.innerHTML = "";

    carrinho.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nome} (x${item.quantidade})`;

      const botaoRemover = document.createElement("button");
      botaoRemover.textContent = "Remover";
      botaoRemover.classList.add("remover");
      botaoRemover.addEventListener("click", () => {
        removerDoCarrinho(item.nome);
      });

      li.appendChild(botaoRemover);
      itemCarrinho.appendChild(li);
    });

    const total = carrinho.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
    totalContainer.textContent = `Total: R$${total
      .toFixed(2)
      .replace(".", ",")}`;
  }

  atualizarIconeBolsa();
});

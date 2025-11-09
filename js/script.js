// Função chamada pelo atributo 'onclick' do botão no HTML
function scrollToTop() {
  // Rola a janela de volta para o topo (posição y=0) de forma suave.
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// -----------------------------------------------------
// LÓGICA PARA MOSTRAR/ESCONDER O BOTÃO:

// Obtém o elemento do botão
const btnTopo = document.getElementById("btnTopo");

// Adiciona um "ouvinte de eventos" para quando a página rolar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Se a rolagem for maior que 20px (para sair do topo), mostra o botão.
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTopo.style.display = "block"; // Mostra o botão
  } else {
    btnTopo.style.display = "none"; // Esconde o botão
  }
}
// O CÓDIGO SÓ VAI EXECUTAR QUANDO TODO O HTML ESTIVER CARREGADO
document.addEventListener("DOMContentLoaded", function () {
  // Seu código de SCROLL TO TOP (Voltar ao Topo)
  window.onscroll = function () {
    scrollFunction();
  };
  // ... todo o restante do código do seu guia para Scroll ...

  // LÓGICA DO DARK MODE
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;
  const localStorageKey = "themePreference";

  // *** Atenção: O código SÓ DEVE continuar se o botão for encontrado ***
  if (!toggleButton) return;

  // 1. FUNÇÃO PARA APLICAR OU REMOVER O TEMA
  function applyTheme(isDark) {
    // ... (o restante da função applyTheme)
    if (isDark) {
      body.classList.add("dark-mode");
      toggleButton.textContent = "Modo Claro";
    } else {
      body.classList.remove("dark-mode");
      toggleButton.textContent = "Modo Escuro";
    }
  }

  // 2. VERIFICA E AJUSTA O TEXTO DO BOTÃO (O CÓDIGO DE INICIALIZAÇÃO)
  const savedTheme = localStorage.getItem(localStorageKey);
  if (savedTheme === "dark") {
    toggleButton.textContent = "Modo Claro";
  } else {
    toggleButton.textContent = "Modo Escuro";
  }

  // 3. ADICIONA O EVENTO DE CLIQUE AO BOTÃO
  toggleButton.addEventListener("click", () => {
    // ... (o restante da função de clique)
    const isCurrentlyDark = body.classList.contains("dark-mode");

    if (isCurrentlyDark) {
      applyTheme(false);
      localStorage.setItem(localStorageKey, "light");
    } else {
      applyTheme(true);
      localStorage.setItem(localStorageKey, "dark");
    }
  });

  // Fecha o listener DOMContentLoaded
});

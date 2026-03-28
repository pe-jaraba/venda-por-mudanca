const WHATSAPP_NUMBER = "351910898481";

const items = [
  {
    id: "sofa",
    name: "Sofá",
    category: "sala",
    price: 100,
    condition: "Bom",
    description: "",
    originalPrice: 350,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/sofa_1_400_300.jpg",
    images: [
      { thumb: "img/sofa_1_400_300.jpg", full: "img/sofa_1_1200_800.jpg" },
      { thumb: "img/sofa_2_400_300.jpg", full: "img/sofa_2_1200_800.jpg" },
    ],
  },
  {
    id: "tele",
    name: "Televisão",
    category: "sala",
    price: 220,
    condition: "Muito bom",
    description: "TV Hisense 55A6N LED 55'",
    originalPrice: 450,
    status: "reservado",
    availableFrom: null,
    thumbnail: "img/tele_1_400_300.jpg",
    images: [
      { thumb: "img/tele_1_400_300.jpg", full: "img/tele_1_1200_800.jpg" },
      { thumb: "img/tele_2_400_300.jpg", full: "img/tele_2_1200_800.jpg" },
      { thumb: "img/tele_3_400_300.jpg", full: "img/tele_3_1200_800.jpg" },
    ],
  },
  {
    id: "mesa_sala",
    name: "Mesa de Sala",
    category: "sala",
    price: 40,
    condition: "Muito bom",
    description: "",
    originalPrice: null,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/mesa_sala_1_400_300.jpg",
    images: [
      { thumb: "img/mesa_sala_1_400_300.jpg", full: "img/mesa_sala_1_1200_800.jpg" },
      { thumb: "img/mesa_sala_2_400_300.jpg", full: "img/mesa_sala_2_1200_800.jpg" },
      { thumb: "img/mesa_sala_3_400_300.jpg", full: "img/mesa_sala_3_1200_800.jpg" },
    ],
  },
  {
    id: "comedor",
    name: "Mesa e Cadeiras de Jantar",
    category: "sala",
    price: 120,
    condition: "Bom",
    description: "",
    originalPrice: null,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/comedor_1_400_300.jpg",
    images: [
      { thumb: "img/comedor_1_400_300.jpg", full: "img/comedor_1_400_300.jpg" },
      { thumb: "img/comedor_3_400_300.jpg", full: "img/comedor_3_400_300.jpg" },
    ],
  },
  {
    id: "tapete",
    name: "Tapete",
    category: "sala",
    price: 35,
    condition: "Bom",
    description: "Tapete IKEA",
    originalPrice: 80,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/comedor_2_400_300.jpg",
    images: [
      { thumb: "img/comedor_2_400_300.jpg", full: "img/comedor_2_400_300.jpg" }
    ],
  },
  {
    id: "lampara",
    name: "Candeeiro de Pé",
    category: "sala",
    price: 5,
    condition: null,
    description: "",
    originalPrice: null,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/lampara_1_400_300.jpg",
    images: [
      { thumb: "img/lampara_1_400_300.jpg", full: "img/lampara_1_1200_800.jpg" },
    ],
  },
  {
    id: "lampara_techo",
    name: "Candeeiro de Teto",
    category: "sala",
    price: 10,
    condition: null,
    description: "",
    originalPrice: null,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/lampara_techo_1_400_300.jpg",
    images: [
      { thumb: "img/lampara_techo_1_400_300.jpg", full: "img/lampara_techo_1_1200_800.jpg" },
    ],
  },
  {
    id: "espejo",
    name: "Espelho",
    category: "sala",
    price: 15,
    condition: null,
    description: "",
    originalPrice: null,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/espejo_1_400_300.jpg",
    images: [
      { thumb: "img/espejo_1_400_300.jpg", full: "img/espejo_1_1200_800.jpg" },
      { thumb: "img/espejo_2_400_300.jpg", full: "img/espejo_2_1200_800.jpg" },
    ],
  },
  {
    id: "cama",
    name: "Cama de Casal",
    category: "quarto",
    price: 150,
    condition: "Muito bom",
    description: "Cama Beliani Touchy 160x200",
    originalPrice: 300,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/cama_1_400_300.jpg",
    images: [
      { thumb: "img/cama_1_400_300.jpg", full: "img/cama_1_1200_800.jpg" },
      { thumb: "img/cama_2_1200_800.jpg", full: "img/cama_2_1200_800.jpg" },
    ],
  },
  {
    id: "nochero",
    name: "Mesa de Cabeceira",
    category: "quarto",
    price: 10,
    condition: "Muito bom",
    description: "",
    originalPrice: null,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/nochero_1_400_300.jpg",
    images: [
      { thumb: "img/nochero_1_400_300.jpg", full: "img/nochero_1_1200_800.jpg" },
    ],
  },
  {
    id: "nevera",
    name: "Frigorífico",
    category: "cozinha",
    price: 300,
    condition: "Muito bom",
    description: "Frigorífico Bosch KGN36NWEA 186x60",
    originalPrice: 740,
    status: "disponivel",
    availableFrom: "2026-05-01",
    thumbnail: "img/nevera_1_400_300.jpg",
    images: [
      { thumb: "img/nevera_1_400_300.jpg", full: "img/nevera_1_1200_800.jpg" },
      { thumb: "img/nevera_2_400_300.jpg", full: "img/nevera_2_1200_800.jpg" },
    ],
  },
  {
    id: "mesa_cocina",
    name: "Mesa de Cozinha com 2 Cadeiras",
    category: "cozinha",
    price: 60,
    condition: "Muito bom",
    description: "Inclui duas cadeiras.",
    originalPrice: null,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/mesa_cocina_1_400_300.jpg",
    images: [
      { thumb: "img/mesa_cocina_1_400_300.jpg", full: "img/mesa_cocina_1_1200_800.jpg" },
    ],
  },
  {
    id: "escritorio",
    name: "Secretária",
    category: "escritorio",
    price: 80,
    condition: "Muito bom",
    description: "Secretária preta IKEA Utelspelare",
    originalPrice: 170,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/escritorio_1_400_300.jpg",
    images: [
      { thumb: "img/escritorio_1_400_300.jpg", full: "img/escritorio_1_1200_800.jpg" },
      { thumb: "img/escritorio_2_400_300.jpg", full: "img/escritorio_2_1200_800.jpg" },
    ],
  },
  {
    id: "silla_escritorio",
    name: "Cadeira de Secretária",
    category: "escritorio",
    price: 50,
    condition: "Muito bom",
    description: "Cadeira de secretária IKEA Millberget",
    originalPrice: 100,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/silla_escritorio_2_1200_800.jpg",
    images: [
      { thumb: "img/silla_escritorio_2_1200_800.jpg", full: "img/silla_escritorio_2_1200_800.jpg" },
      { thumb: "img/silla_escritorio_3_1200_800.jpg", full: "img/silla_escritorio_3_1200_800.jpg" },
    ],
  },

  {
    id: "calefactor",
    name: "Aquecedor",
    category: "outros",
    price: 80,
    condition: "Excelente",
    description: "Aquecedor Xiaomi Mi Smart Space heater S. 5 Meses de uso.",
    originalPrice: 120,
    status: "disponivel",
    availableFrom: null,
    thumbnail: "img/calefactor_1_400_300.jpg",
    images: [
      { thumb: "img/calefactor_1_400_300.jpg", full: "img/calefactor_1_1200_800.jpg" },
      { thumb: "img/calefactor_2_400_300.jpg", full: "img/calefactor_2_1200_800.jpg" },
    ],
  },
  {
    id: "calefactor_2",
    name: "Aquecedor 2",
    category: "outros",
    price: 60,
    condition: "Muito bom",
    description: "Aquecedor Xiaomi Mi Smart Space heater S. 1 ano de uso.",
    originalPrice: 120,
    status: "reservado",
    availableFrom: null,
    thumbnail: "img/calefactor_1_400_300.jpg",
    images: [
      { thumb: "img/calefactor_1_400_300.jpg", full: "img/calefactor_1_1200_800.jpg" },
      { thumb: "img/calefactor_2_400_300.jpg", full: "img/calefactor_2_1200_800.jpg" },
    ],
  },
  {
    id: "deshumificador",
    name: "Desumidificador",
    category: "outros",
    price: 150,
    condition: "Muito bom",
    description: "Desumidficador Rowenta DH4236, filtro novo.",
    originalPrice: 300,
    status: "reservado",
    availableFrom: null,
    thumbnail: "img/deshumificador_1_400_300.jpg",
    images: [
      { thumb: "img/deshumificador_1_400_300.jpg", full: "img/deshumificador_1_1200_800.jpg" },
      { thumb: "img/deshumificador_2_400_300.jpg", full: "img/deshumificador_2_1200_800.jpg" },
      { thumb: "img/deshumificador_3_400_300.jpg", full: "img/deshumificador_3_1200_800.jpg" },
    ],
  },
];

let activeCategory = "todos";
let currentItem = null;
let currentImageIndex = 0;

function formatPrice(price) {
  if (!price) return "Preço a combinar";
  return `${price} €`;
}

function formatCondition(condition) {
  if (!condition) return null;
  return condition;
}

function buildWhatsAppLink(itemName) {
  const msg = encodeURIComponent(`Olá! Vi o anúncio e tenho interesse no artigo: ${itemName}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function formatStatus(status) {
  const map = { disponivel: "Disponível", reservado: "Reservado", vendido: "Vendido" };
  return map[status] || "Disponível";
}

function formatAvailableFrom(availableFrom) {
  if (!availableFrom) return null;
  const date = new Date(availableFrom + "T00:00:00");
  return `Disponível a partir de ${date.toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" })}`;
}

function renderItems(category) {
  const grid = document.getElementById("items-grid");
  const countEl = document.getElementById("items-count");
  const filtered = category === "todos" ? items : items.filter((i) => i.category === category);
  const statusOrder = { disponivel: 0, reservado: 1, vendido: 2 };
  const sorted = [...filtered].sort((a, b) => (statusOrder[a.status] ?? 0) - (statusOrder[b.status] ?? 0));

  countEl.textContent = `${filtered.length} artigo${filtered.length !== 1 ? "s" : ""}`;

  grid.innerHTML = sorted
    .map(
      (item) => `
    <article class="item-card" data-id="${item.id}" data-status="${item.status}" tabindex="0" role="button" aria-label="Ver detalhes de ${item.name}">
      <div class="card-image">
        <img src="${item.thumbnail}" alt="${item.name}" loading="lazy" width="400" height="300">
        ${item.images.length > 1 ? `<span class="image-count">${item.images.length} fotos</span>` : ""}
      </div>
      <div class="card-body">
        <h2 class="card-title">${item.name}</h2>
        <div class="card-badges">
          <span class="badge badge-price">${formatPrice(item.price)}</span>
          <span class="badge badge-status badge-${item.status}">${formatStatus(item.status)}</span>
          ${item.condition ? `<span class="badge badge-condition">${item.condition}</span>` : ""}
        </div>
        ${item.originalPrice ? `<p class="card-original-price">Preço em novo: ${item.originalPrice} €</p>` : ""}
        ${item.availableFrom ? `<p class="card-available-from">${formatAvailableFrom(item.availableFrom)}</p>` : ""}
        ${item.description ? `<p class="card-description">${item.description}</p>` : ""}
        <div class="card-actions">
          <button class="btn btn-primary" data-id="${item.id}">Ver detalhes</button>
          <a class="btn btn-whatsapp" href="${buildWhatsAppLink(item.name)}" target="_blank" rel="noopener" aria-label="Contactar via WhatsApp sobre ${item.name}">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  grid.querySelectorAll("[data-id]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = el.dataset.id || e.currentTarget.dataset.id;
      if (e.target.classList.contains("btn-whatsapp") || e.target.closest(".btn-whatsapp")) return;
      openModal(id);
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openModal(el.dataset.id);
    });
  });
}

function openModal(id) {
  currentItem = items.find((i) => i.id === id);
  if (!currentItem) return;
  currentImageIndex = 0;

  document.getElementById("modal-title").textContent = currentItem.name;
  document.getElementById("modal-price").textContent = formatPrice(currentItem.price);

  const statusEl = document.getElementById("modal-status");
  statusEl.textContent = formatStatus(currentItem.status);
  statusEl.className = `badge badge-status badge-${currentItem.status}`;

  const conditionEl = document.getElementById("modal-condition");
  if (currentItem.condition) {
    conditionEl.textContent = currentItem.condition;
    conditionEl.hidden = false;
  } else {
    conditionEl.hidden = true;
  }

  const origPriceEl = document.getElementById("modal-original-price");
  if (currentItem.originalPrice) {
    origPriceEl.textContent = `Preço em novo: ${currentItem.originalPrice} €`;
    origPriceEl.hidden = false;
  } else {
    origPriceEl.hidden = true;
  }

  const availFromEl = document.getElementById("modal-available-from");
  const availFromText = formatAvailableFrom(currentItem.availableFrom);
  if (availFromText) {
    availFromEl.textContent = availFromText;
    availFromEl.hidden = false;
  } else {
    availFromEl.hidden = true;
  }

  const descEl = document.getElementById("modal-description");
  descEl.textContent = currentItem.description || "";
  descEl.hidden = !currentItem.description;

  document.getElementById("modal-whatsapp").href = buildWhatsAppLink(currentItem.name);

  updateGallery();

  const overlay = document.getElementById("modal-overlay");
  overlay.setAttribute("aria-hidden", "false");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  setTimeout(() => document.getElementById("modal-close").focus(), 50);
}

function updateGallery() {
  const mainImg = document.getElementById("gallery-main-img");
  mainImg.src = currentItem.images[currentImageIndex].full;
  mainImg.alt = `${currentItem.name} — foto ${currentImageIndex + 1}`;

  const thumbsContainer = document.getElementById("gallery-thumbs");
  if (currentItem.images.length > 1) {
    thumbsContainer.innerHTML = currentItem.images
      .map(
        (img, i) => `
      <button class="thumb-btn ${i === currentImageIndex ? "active" : ""}" data-index="${i}" aria-label="Foto ${i + 1}">
        <img src="${img.thumb}" alt="${currentItem.name} miniatura ${i + 1}" loading="lazy">
      </button>
    `
      )
      .join("");

    thumbsContainer.querySelectorAll(".thumb-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentImageIndex = parseInt(btn.dataset.index, 10);
        updateGallery();
      });
    });
    thumbsContainer.hidden = false;
  } else {
    thumbsContainer.hidden = true;
  }

  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");
  prevBtn.hidden = currentItem.images.length <= 1;
  nextBtn.hidden = currentItem.images.length <= 1;
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.setAttribute("aria-hidden", "true");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  currentItem = null;
}

document.addEventListener("DOMContentLoaded", () => {
  renderItems(activeCategory);

  document.getElementById("filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeCategory = btn.dataset.category;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderItems(activeCategory);
  });

  document.getElementById("modal-close").addEventListener("click", closeModal);

  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.getElementById("gallery-prev").addEventListener("click", () => {
    if (!currentItem) return;
    currentImageIndex = (currentImageIndex - 1 + currentItem.images.length) % currentItem.images.length;
    updateGallery();
  });

  document.getElementById("gallery-next").addEventListener("click", () => {
    if (!currentItem) return;
    currentImageIndex = (currentImageIndex + 1) % currentItem.images.length;
    updateGallery();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
    if (!currentItem) return;
    if (e.key === "ArrowLeft") {
      currentImageIndex = (currentImageIndex - 1 + currentItem.images.length) % currentItem.images.length;
      updateGallery();
    }
    if (e.key === "ArrowRight") {
      currentImageIndex = (currentImageIndex + 1) % currentItem.images.length;
      updateGallery();
    }
  });
});

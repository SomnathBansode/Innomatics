const products = {
  mobiles: [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "Smartphone",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-compare-iphone-15-202409?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1724187551268",
      price: 1099,
      description:
        "The latest iPhone with A17 Pro chip, 48MP camera, and Dynamic Island.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      category: "Smartphone",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQiy7nzo9L7qp6N79KC066Y1T48ZKd03Y4vuZxFQeW-MByw9Qwcn7jYae6ZENkh_m24W5ymit0uevXxCAtU3N75U2foQYsBZbFsiZTkmPYWw-RZmsyX7wlzDA&usqp=CAE",
      price: 1299,
      description:
        "Flagship Android phone with 200MP camera and S Pen support.",
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      category: "Smartphone",
      image:
        "https://imgs.search.brave.com/kXEtrvslDZGhOPVKFHrSrvE99XBd41ZZM3ISSntG8zg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmFucG9pbWFn/ZXMuY29tL3dvcmRw/cmVzcy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8xMC9waXhl/bC04LXByby1iYXkt/c3F1YXJlLXJlbmRl/ci5qcGc",
      price: 999,
      description:
        "AI-powered smartphone with Tensor G3 chip and advanced camera features.",
    },
    {
      id: 4,
      name: "OnePlus 12",
      category: "Smartphone",
      image:
        "https://imgs.search.brave.com/xshwjo0BuWkpSOLGcVFkAtvYLFTScWwGIi3cQeE5ebU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3dt/c05CQ0c0V3hLOGZC/Umc4THNodkYtMzIw/LTgwLmpwZw",
      price: 799,
      description:
        "High-performance phone with Hasselblad camera and Snapdragon 8 Gen 3.",
    },
    {
      id: 5,
      name: "Xiaomi 14 Pro",
      category: "Smartphone",
      image:
        "https://imgs.search.brave.com/h_54e_p2BQAIdbxFGaQ7itGYyjkMVmHIyaLE7HCPzwQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9taXN0/b3JlLnBrL2Nkbi9z/aG9wL2ZpbGVzL1hp/YW9taV8xNF9Qcm9k/dWN0X0ltYWdlXzFf/MV9ncmFuZGUuanBn/P3Y9MTcyNDQxNTY3/OQ",
      price: 899,
      description: "Flagship phone with Leica camera and HyperOS.",
    },
    {
      id: 6,
      name: "Sony Xperia 1 V",
      category: "Smartphone",
      image:
        "https://imgs.search.brave.com/24klMSv3m3hnKq0d3PCPu93ql1C7vWEZJ1bzGKkwXls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9waWNzL3Nv/bnkvc29ueS14cGVy/aWEtMS0xLmpwZw",
      price: 1199,
      description: "4K OLED display with professional-grade camera features.",
    },
    {
      id: 7,
      name: "Motorola Edge 40 Pro",
      category: "Smartphone",
      image:
        "https://imgs.search.brave.com/SRohDFBQ0bFZBNyMS1ja7E_O7SGSOBhYNmWG7sVHDGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb2Jp/bGVpbnRvLmNvbS9p/bWFnZXMvTW90b3Jv/bGEtRWRnZS00MC5q/cGc",
      price: 699,
      description:
        "Affordable flagship with Snapdragon 8 Gen 2 and 165Hz display.",
    },
    {
      id: 8,
      name: "Oppo Find X6 Pro",
      category: "Smartphone",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTWg1cb7lzsTXaR6mZIaa9bLUj7JheOSm2LHg-maMV74bDMHLziel8pneKnJjTUSO-HuGOZkVqxeGrl78tgS7WcYpWrfqycxxXM0-J0ALWBYTlSSv9m0usJjQ&usqp=CAE",
      price: 1099,
      description:
        "Premium phone with Hasselblad camera and MariSilicon X chip.",
    },
    {
      id: 9,
      name: "Vivo X100 Pro",
      category: "Smartphone",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9NajoeKUzi54S2PY95Tez81aSVeBdnivl6GSADIbQaprYo4QMpKodv_XLQ1RtFgpCgKr9z2ihG-gsoA0ULBLHkS5Fmm3bYJ4c4GB6mKA&usqp=CAE",
      price: 999,
      description: "Flagship phone with Zeiss camera and Dimensity 9300 chip.",
    },
    {
      id: 10,
      name: "Realme GT 5 Pro",
      category: "Smartphone",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQPVJUhtiJwwM1fWUUDbo2xNJuRrOjxNvGAjM_XXfBhf1-Q2CQTAismaI0zLn3xfHrkSkt9nZvGJ_cNPLROQ_lBvHEr2vGEjdoVhlFbeCGWnMDPnTx4acGn&usqp=CAE",
      price: 799,
      description:
        "High-performance phone with Snapdragon 8 Gen 3 and 144Hz display.",
    },
  ],
  laptops: [
    {
      id: 11,
      name: "Apple MacBook Pro 16",
      category: "Laptop",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR5tYg5p1wQIWT-NOohC7_cW8e12KjhY_XISTnkRntWraOHv7SEfGjNBvaKXinO2zAX2yDqAxxDrU0TTm4i818_aY89NP3l-QjbQmfCAWcQkIglfNNFuEjN&usqp=CAE",
      price: 2499,
      description:
        "Powerful laptop with M3 Max chip and Liquid Retina XDR display.",
    },
    {
      id: 12,
      name: "Dell XPS 15",
      category: "Laptop",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRncjjqf8HxvmQt9B0lrE9eoydBNYGtCt4muI4DS9sm2GJETJryajNh9OmRU1j2H1Q0fTh4VHnik38dZ2WJnycn936RbFk-2nHTYJytw7MI-gG8Dnxo6-7hdQ&usqp=CAE",
      price: 1999,
      description:
        "Ultrabook with 4K OLED display and Intel Core i9 processor.",
    },
    {
      id: 13,
      name: "HP Spectre x360",
      category: "Laptop",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRtU1i6ruuNDhSHngAxBsgFOAM59QJ38cXAZpVWY10LRpccNF92BLdN15b0HdLenttt76vHFRdJLmtL7_tCn5OKv7l06lFaiQ&usqp=CAY",
      price: 1799,
      description:
        "2-in-1 convertible laptop with OLED display and Intel Evo platform.",
    },
    {
      id: 14,
      name: "Lenovo ThinkPad X1 Carbon",
      category: "Laptop",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbM2az_F5m68ke9RGJiQWL361BAC1DERcdKnWk-IKhxY82sGKqVSKfKh4aI0obmblCE6hNFeCTSl2-41qAFc2po5pzJSppe8jOL0LWFYaRB3ZzS2U8r5Ut&usqp=CAE",
      price: 1899,
      description:
        "Business laptop with lightweight design and MIL-STD durability.",
    },
    {
      id: 15,
      name: "Asus ROG Zephyrus G14",
      category: "Laptop",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRS7eoS7J2ZeXUGGB8kl-qUmQ5kLnjMo1Pxs1rNhKPiBJZc6tE79zHy16n0PMnw1roxi2xVvXHXN98RaAqu2EcqYjGksOkVNx6QR2G-zLcT4BnsIFmO5HT-&usqp=CAE",
      price: 1599,
      description: "Gaming laptop with Ryzen 9 and RTX 4060 GPU.",
    },
    {
      id: 16,
      name: "Microsoft Surface Laptop 5",
      category: "Laptop",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTg_tVMul5dZFNi2jByzeLvuEfKuymE_FLX1UrC6aFy0Ih02Y1xibKO8n_XuoHecJnmYGIygn3n4Jeu97gLoTxzcF56gYQZf08cV1FpFyWMuLCC6QMZmywJ&usqp=CAE",
      price: 1699,
      description: "Sleek laptop with touchscreen and Intel Core i7 processor.",
    },
    {
      id: 17,
      name: "Acer Swift X",
      category: "Laptop",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8vYbubLSaZGgY6OpaUxKbYvw1DZMwywLnAcuSPWQSezPEF6YThsHiG1nGPX10SHapWUFrAhqLoggFkAXajlzIImd10liHSSlo_AIanJnumhdKatrP85ez&usqp=CAE",
      price: 1299,
      description: "Thin and light laptop with Ryzen 7 and RTX 3050 Ti.",
    },
    {
      id: 18,
      name: "Razer Blade 15",
      category: "Laptop",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWpO2ohQcE_a8bS9KIzGs20fSAQDg834D_Gses08MqZDZ-LClHv1CoHFg68Ai5W1GHjlLAR504bN3J6HyvcJmds7cNeFeGFScKHpP_Zqvqleg3cFaLkgpP&usqp=CAE",
      price: 2499,
      description: "Premium gaming laptop with RTX 4070 and 240Hz display.",
    },
    {
      id: 19,
      name: "LG Gram 17",
      category: "Laptop",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7lGq3wMC483qZByp0yhkq59iJnEaRc6bfkQ8rzWy1I83QazvU11OZK-koBTPoOP0cbpOWy7f8kmCM9G8VYkIUgCoGhXThT0fcGJ5GuDY&usqp=CAE",
      price: 1799,
      description:
        "Ultra-lightweight laptop with 17-inch display and long battery life.",
    },
    {
      id: 20,
      name: "Samsung Galaxy Book 3 Ultra",
      category: "Laptop",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdCdyCxk2nO-C_U8O_MVfP4V_ZvII_qpxf2ZoRZP7jIxdBfux8iF50RoDgoN2Vj-IPlQ8N97A3LlelEs22divYbPNLC6DtLAVZOobYbeMGatp6WeVv8jXU-A&usqp=CAE",
      price: 2199,
      description: "Powerful laptop with AMOLED display and RTX 4070 GPU.",
    },
  ],
  accessories: [
    {
      id: 21,
      name: "AirPods Pro 2",
      category: "Headphones",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUMNB_cmd8AUp2NfDTmnr43D4CvtGSViPPhEiaB_cSNaLgLTYOSL8NL4soiRGm2mboxh4OcLrHvLfuBOgweTGAME_4a8Y0U8dATSJpC9d7iOmX73MkcDuZFg&usqp=CAE",
      price: 249,
      description:
        "Wireless earbuds with active noise cancellation and spatial audio.",
    },
    {
      id: 22,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQC5HUoUJqXsmseSwYaeU2bPnMzPyNlSZnocgEaK0Rxk03GS2MSqklIO0bkh84oUTLumum2nIrdc16T7G3O2g_74OghgfbFiQisIwLXwuJGnUh7tZ-lKCkyPQ&usqp=CAE",
      price: 399,
      description:
        "Industry-leading noise-canceling headphones with 30-hour battery life.",
    },
    {
      id: 23,
      name: "Logitech MX Master 3S",
      category: "Mouse",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYQ5366PUOo6Xjxdu_UPjNBPBIQmAN-HlcfFco5cXoB1oceYBP_d2o7zz3mQLuQC5uA63WMyAooF8sQdj9Aiw203ye7XHlEDTrGuaLqb3Wy4K4nQ49oXyIKQ&usqp=CAE",
      price: 99,
      description:
        "Premium wireless mouse with ergonomic design and customizable buttons.",
    },
    {
      id: 24,
      name: "Apple Watch Ultra",
      category: "Smartwatch",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi0i4IYeX9e3cACC3WTcGMDdg43S-MsY5bxjFOIUjyhjLbmSAL5u31NZrceCckU39SSim6IVmn4RYOjXQvK375xEMi1am81giAFg8hSsX3KZsL7s1Jg1t1yg&usqp=CAE",
      price: 799,
      description:
        "Rugged smartwatch with advanced fitness tracking and LTE connectivity.",
    },
    {
      id: 25,
      name: "Samsung Galaxy Watch 6 Classic",
      category: "Smartwatch",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrsATdR9p02UOjNADScK4Wf7HStNxDRXnuhh-EKCgddtd4aVwIcOhohl94wntEOdqv771bRMrkQzsGL1CI5mdirGwdL1A-R6_5qRXDyFUXY3k_pm-i-MAz&usqp=CAE",
      price: 399,
      description:
        "Elegant smartwatch with rotating bezel and advanced health monitoring.",
    },
    {
      id: 26,
      name: "DJI Mavic 3 Pro",
      category: "Drone",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTldsWRTs9pxEtJEBkiUWVE2-QfkyKxlEwAdeUZ99AIT7bONccPk2sBN8AzdA7WVjQQ299G68N7VnB7frYjRaFm1pBOyqHgYlxnk2BEUaU&usqp=CAE",
      price: 2199,
      description:
        "Professional drone with 4/3 CMOS sensor and 46-minute flight time.",
    },
    {
      id: 27,
      name: "GoPro Hero 12",
      category: "Action Camera",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAqETjfF9h5jnpCPQufqbGIiEWwdEr8bs8w-sat2grfcD_Dculz07oU6VH8hqCAvXcx5raZjVJIWrHWuIWaVzGow8434CzBGMa0kA7_WEcZkVfMjinhCqp7Ks&usqp=CAE",
      price: 399,
      description:
        "Waterproof action camera with HyperSmooth 6.0 stabilization.",
    },
    {
      id: 28,
      name: "Bose SoundLink Revolve+",
      category: "Speaker",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvKVAN0m2UEHFfXkfdgyEz7DMAqlIKnQrXqIhPDFfGQZvlaKlRrHy0Xd2kQEgvWQAokpfeZcEKMcSEEpWhDYKE0H0F_3L9KfMya8aAPDJ3Ca22yHvgHHDA&usqp=CAE",
      price: 299,
      description:
        "360-degree Bluetooth speaker with deep bass and 16-hour battery life.",
    },
    {
      id: 29,
      name: "Nintendo Switch OLED",
      category: "Gaming Console",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRapKn9c8COu2vxMrkH3PPV7ZPyJvcMgZmypkbNopeTG7VWZbf_cXTakox6aIZWLk8M46-_OE5Ry0FLRSfxLvrcN8CSYIffxA&usqp=CAE",
      price: 349,
      description:
        "Handheld gaming console with 7-inch OLED display and Joy-Con controllers.",
    },
    {
      id: 30,
      name: "PlayStation 5",
      category: "Gaming Console",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMZ2KYc_TI4MY0yVmuslETGogUTuXxE4RBRbq8YdXmOJJ5sFYiqnzACQlv-W8wlcNLCuli5WIJemvHL9-xYvbyXY0_54wS0fW5LiiQ8maenej9ClMmUZ_F&usqp=CAE",
      price: 499,
      description:
        "Next-gen gaming console with ray tracing and ultra-fast SSD.",
    },
  ],
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartCountElement = document.getElementById("cart-count");
const productListContainer = document.getElementById("product-list");

function showCategory(category) {
  const categoryProducts = products[category];
  productListContainer.innerHTML = categoryProducts
    .map(
      (product) => `
      <div class="product" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/200?text=No+Image'" />
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart('${product.id}')">Add to Cart</button>
      </div>
    `
    )
    .join("");
}

function toggleCart() {
  const cartElement = document.querySelector(".cart");
  cartElement.classList.toggle("open");
}

function addToCart(productId) {
  productId = Number(productId);
  const category = Object.keys(products).find((key) =>
    products[key].some((product) => product.id === productId)
  );
  const product = products[category].find((item) => item.id === productId);
  const productName = product.name;
  const productPrice = parseFloat(product.price);
  const productImage = product.image;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    });
  }

  updateCart();
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    totalItems += item.quantity;

    const cartItemElement = document.createElement("div");
    cartItemElement.className = "cart-item";
    cartItemElement.innerHTML = `
      <img src="${item.image}" alt="${
      item.name
    }" onerror="this.src='https://via.placeholder.com/50?text=No+Image'" />
      <span>${item.name}</span>
      <div class="cart-item-quantity">
        <button onclick="decreaseQuantity('${item.id}')">-</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQuantity('${item.id}')">+</button>
      </div>
      <span>$${itemTotal.toFixed(2)}</span>
      <button onclick="removeFromCart('${item.id}')">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItemElement);
  });

  cartTotalElement.textContent = total.toFixed(2);
  cartCountElement.textContent = totalItems;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function increaseQuantity(productId) {
  productId = Number(productId);
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity += 1;
    updateCart();
  }
}

function decreaseQuantity(productId) {
  productId = Number(productId);
  const item = cart.find((item) => item.id === productId);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    updateCart();
  }
}

function removeFromCart(productId) {
  productId = Number(productId);
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
  localStorage.removeItem("cart");
}

function downloadInvoice() {
  let invoiceContent = "Invoice\n\n";
  cart.forEach((item) => {
    invoiceContent += `${item.name} (${item.quantity}) - $${(
      item.price * item.quantity
    ).toFixed(2)}\n`;
  });
  invoiceContent += `\nTotal: $${cartTotalElement.textContent}`;

  const blob = new Blob([invoiceContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "invoice.txt";
  a.click();
  URL.revokeObjectURL(url);
}

showCategory("mobiles");
updateCart();

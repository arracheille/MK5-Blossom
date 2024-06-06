document.addEventListener("DOMContentLoaded", function () {
  // Mengambil elemen-elemen yang diperlukan
  const decreaseBtn = document.querySelector(".quantity-content:first-child svg");
  const increaseBtn = document.querySelector(".quantity-content:last-child svg");
  const quantityDisplay = document.querySelector(".quantity-content p");

  // Mendefinisikan fungsi untuk mengurangi nilai
  function decreaseQuantity() {
    let currentValue = parseInt(quantityDisplay.textContent);
    if (currentValue > 1) {
      currentValue--;
      quantityDisplay.textContent = currentValue;
    }
  }

  // Mendefinisikan fungsi untuk menambah nilai
  function increaseQuantity() {
    let currentValue = parseInt(quantityDisplay.textContent);
    currentValue++;
    quantityDisplay.textContent = currentValue;
  }

  // Menambahkan event listener untuk tombol-tombol SVG
  decreaseBtn.addEventListener("click", decreaseQuantity);
  increaseBtn.addEventListener("click", increaseQuantity);
});

document.addEventListener("DOMContentLoaded", function () {
  // Mengambil elemen yang diperlukan
  const reviewButton = document.querySelector(".category-button:nth-child(2)");

  // Menambahkan event listener untuk tombol "Review"
  reviewButton.addEventListener("click", function () {
    // Mengambil konten dari product-review.html
    fetch("product-review.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        // Menampilkan konten review di dalam bagian "choose"
        const chooseContainer = document.querySelector(".choose");
        chooseContainer.innerHTML = data;
      })
      .catch((error) => {
        console.error("There was a problem fetching the review:", error);
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Mengambil elemen yang diperlukan
  const specificationsButton = document.querySelector(".category-button:nth-child(3)");

  // Menambahkan event listener untuk tombol "Specifications"
  specificationsButton.addEventListener("click", function () {
    // Mengambil konten dari product-specifications.html
    fetch("product-specifications.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        // Menampilkan konten specifications di dalam bagian "choose"
        const chooseContainer = document.querySelector(".choose");
        chooseContainer.innerHTML = data;
      })
      .catch((error) => {
        console.error("There was a problem fetching the specifications:", error);
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Mengambil elemen yang diperlukan
  const othersButton = document.querySelector(".category-button:nth-child(4)");

  // Menambahkan event listener untuk tombol "Others"
  othersButton.addEventListener("click", function () {
    // Mengambil konten dari product-others.html
    fetch("product-others.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        // Menampilkan konten others di dalam bagian "choose"
        const chooseContainer = document.querySelector(".choose");
        chooseContainer.innerHTML = data;
      })
      .catch((error) => {
        console.error("There was a problem fetching the others:", error);
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Mengambil elemen yang diperlukan
  const descriptionButton = document.querySelector(".category-button:first-child");

  // Menambahkan event listener untuk tombol "Description"
  descriptionButton.addEventListener("click", function () {
    // Mendefinisikan konten default untuk description
    const defaultDescription = `
      <div class="description">
        <p style="text-transform: none">
          Our beaded bracelets feature a combination of bright colors and eye-catching motifs, creating a striking and unique accessory for your y2k style. Carefully crafted using high-quality beads, this bracelet will add a different
          and alluring touch to your appearance. Daily use, this bracelet can be combined with various clothes, pearls or other cute jewelry. Because it has minimalist design, you can also use it on various occasions, such as school,
          office, traveling, and many more.
        </p>
      </div>
    `;

    // Menampilkan konten default di dalam bagian "choose"
    const chooseContainer = document.querySelector(".choose");
    chooseContainer.innerHTML = defaultDescription;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Mengambil semua tombol kategori
  const categoryButtons = document.querySelectorAll(".category-button");

  // Menambahkan event listener untuk setiap tombol kategori
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Mengatur warna latar belakang dan warna teks tombol kategori yang diklik
      categoryButtons.forEach((btn) => {
        btn.style.backgroundColor = ""; // Menghapus warna latar belakang yang sebelumnya ditetapkan
        btn.style.color = ""; // Menghapus warna teks yang sebelumnya ditetapkan
      });
      this.style.backgroundColor = "#c2e1e5"; // Mengatur warna latar belakang baru
      this.style.color = "#faf6e7"; // Mengatur warna teks baru
    });
  });
});

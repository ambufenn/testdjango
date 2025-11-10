class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gray-100 py-4 text-center text-gray-500 text-sm">
        © 2025 FairCare Pulse. Semua Hak Dilindungi.
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);

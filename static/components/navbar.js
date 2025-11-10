class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 class="text-primary font-bold text-lg">FairCare Pulse</h1>
        <div class="flex items-center gap-4 text-gray-600">
          <a href="#" class="hover:text-primary">Dashboard</a>
          <a href="#" class="hover:text-primary">Profil</a>
          <a href="#" class="hover:text-primary">Keluar</a>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);

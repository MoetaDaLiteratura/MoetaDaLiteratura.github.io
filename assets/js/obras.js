function renderObras() {
    const obras = Obras();
    const html = obras.obras.map((it, index) => `
        <div class="card txt">
            <div class="card-title">${it.titulo}</div>
            <div class="card-subtitle">${it.autor}</div>
            <div class="card-content">
                ${it.conteudo}
            </div>
            <div class="card-actions">
                <button onclick="openDialogText(${index})" class="btn primary md">Ver mais</button>
            </div>
        </div>
    `).reduce((a,b) => a + b);
    document.getElementById('obras').innerHTML=html;
}

function openDialogText(id) {
    const dialog = document.getElementsByClassName('dialog')[0];
    const obra = Obras().obras[id];
    const title = document.getElementById("dialog-text-title");
    const content = document.getElementById("dialog-text-content");
    title.innerHTML = obra.titulo;
    content.innerHTML = obra.conteudo;
    dialog.className = 'dialog open';
}

function closeDialogText() {
    const dialog = document.getElementsByClassName('dialog open')[0];
    dialog.className = 'dialog';
}
function sidebarOpen() {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.className = 'sidebar sidebar-open';
}
function sidebarClose() {
    const sidebar = document.getElementsByClassName('sidebar-open')[0];
    sidebar.className = 'sidebar';
}
window.addEventListener('load', event => renderObras());




function openSidebar() {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.className = 'with-shadow sidebar sidebar-open';
}
function closeSidebar() {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.className = 'with-shadow sidebar';
}

function renderObras() {
    const obras = Obras();
    const html = obras.obras.map((it, index) => `
        <div class="card">
            <div class="card-header">
                <span class="card-title">${it.titulo}</span> -
                <span class="card-subtitle">${it.autor}</span>
            </div>
            <div class="card-content">
                <p>${it.conteudo}</p>
            </div>
            <div class="card-actions">
                <button class="btn btn-red btn-md" onclick="openDialogText(${index})">Ver mais</button>
            </div>
        </div>
    `).reduce((a,b) => a + b);
    document.getElementById('obras').innerHTML=html;
}

function openDialogText(id) {
    const dialog = document.getElementsByClassName('dialog-text')[0];
    const obra = Obras().obras[id];
    const title = document.getElementById("dialog-text-title");
    const content = document.getElementById("dialog-text-content");
    title.innerHTML = obra.titulo;
    content.innerHTML = obra.conteudo;
    dialog.className = 'dialog-text dialog-text-open';
}

function closeDialogText() {
    const dialog = document.getElementsByClassName('dialog-text-open')[0];
    dialog.className = 'dialog-text';
}

window.addEventListener('load', event => renderObras());
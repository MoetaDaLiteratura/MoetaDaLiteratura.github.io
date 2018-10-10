function renderObras() {
    const obras = Obras();
    const html = obras.obras.map((it, index) => `
        <div class="card card-primary">
            <div class="card-title">${it.titulo}</div>
            <div class="card-subtitle">${it.autor}</div>
            <div class="card-content">
                ${it.conteudo}
            </div>
            <div class="card-actions">
                <button onclick="openDialogText(${index})" class="btn btn-primary btn-md">Ver mais</button>
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




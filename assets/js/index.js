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
    const html = obras.obras.map(it => `
        <div class="card">
            ${it.autor}
        </div>
    `).reduce((a,b) => a + b);
    document.getElementById('obras').innerHTML=html;
}

window.addEventListener('load', event => renderObras());
function sidebarOpen() {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.className = 'sidebar sidebar-open';
}
function sidebarClose() {
    const sidebar = document.getElementsByClassName('sidebar-open')[0];
    sidebar.className = 'sidebar';
}
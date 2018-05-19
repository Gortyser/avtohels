var contentHeight = document.getElementById('main-content').clientHeight;
var sidebarHeight = document.getElementById('sidebar').clientHeight;
if (contentHeight < sidebarHeight) {
    contentHeight = sidebarHeight;
    document.getElementById('company-name').style.color="red";
}
if (sidebarHeight < contentHeight) {
    sidebarHeight = contentHeight;
    document.getElementById('company-name').style.color="red";
}

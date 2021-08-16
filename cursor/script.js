document.addEventListener('mousemove', function(e) {
    var cursor = document.getElementById('cursor');
    var aura = document.getElementById('aura');
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    aura.style.left = x + 'px';
    aura.style.top = y + 'px';
})
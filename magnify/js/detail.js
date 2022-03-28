window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maskMaxX = preview_img.offsetWidth - mask.offsetWidth;
        var maskMaxY = preview_img.offsetHeight - mask.offsetHeight;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMaxX) {
            maskX = maskMaxX;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMaxY) {
            maskY = maskMaxY;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        var bigIMG = document.querySelector('.bigImg');
        var bigMaxX = bigIMG.offsetWidth - big.offsetWidth;
        var bigMaxY = bigIMG.offsetHeight - big.offsetHeight;
        var bigX = maskX * bigMaxX / maskMaxX;
        var bigY = maskY * bigMaxY / maskMaxY;
        bigIMG.style.left = -bigX + 'px';
        bigIMG.style.top = -bigY + 'px';
    })
})
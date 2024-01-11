// canvas設定
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// canvas基本描画
// 外枠始め
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 0);
ctx.moveTo(300, 0);
ctx.lineTo(300, 300);
ctx.moveTo(300, 300);
ctx.lineTo(0, 300);
ctx.moveTo(0, 300);
ctx.lineTo(0, 0);
ctx.strokeStyle = 'gray';
ctx.lineWidth = 6;
ctx.stroke();
// 外枠終わり
// 中線始め
ctx.beginPath();
ctx.moveTo(150, 0);
ctx.lineTo(150, 300);
ctx.moveTo(0, 150);
ctx.lineTo(300, 150);
ctx.strokeStyle = 'gray';
ctx.lineWidth = 3;
ctx.stroke();
// 中線終わり

// クリック座標取得
document.getElementById('canvas').addEventListener('click', function (event) {
    // 絶対座標取得
    let clickX = event.pageX;
    let clickY = event.pageY;
    // 相対位置化
    const clientRect = document.getElementById('canvas').getBoundingClientRect();
    let x = clickX - clientRect.left;
    let y = clickY - clientRect.top;

    // canvasに点を描画
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(x, y, 3, 0, Math.PI * 2, false);
    ctx.fill();
});
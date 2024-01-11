// ======================
// 計算基本ルール
// データはx, y分けて配列に
// ======================


// 平均値算出
function avarage(datas) {
    let sum = 0;
    for (let i = 0; i < datas.length; i++) {
        sum += datas[i];
    }
    return sum / datas.length;
}

// 共分散算出
function Sxy(xdatas, ydatas) {
    // 個数チェック
    if (xdatas.length == ydatas.length) {
        const x_avg = avarage(xdatas);
        const y_avg = avarage(ydatas);
        let sum = 0;
        for (let i = 0; i < xdatas.length; i++) {
            sum += (xdatas[i] - x_avg) * (ydatas[i] - y_avg);
        }
        return sum / xdatas.length;
    } else {
        return null;
    }
}

// 標準偏差算出
function Sn(datas) {
    const avg = avarage(datas);
    let sum = 0;
    for (let i = 0; i < datas.length; i++) {
        sum += (datas[i] - avg) ** 2;
    }
    return Math.sqrt(sum / datas.length);
}

// 相関係数算出
function r(xdatas, ydatas) {
    // 個数チェック
    if (xdatas.length == ydatas.length) {
        const sxy = Sxy(xdatas, ydatas);
        const sx = Sn(xdatas);
        const sy = Sn(ydatas);
        return sxy / (sx * sy);
    } else {
        return null;
    }
}

// xy配列
const x_arr = [];
const y_arr = [];

// クリック座標取得
document.getElementById('canvas').addEventListener('click', function (event) {
    // 絶対座標取得
    let clickX = event.pageX;
    let clickY = event.pageY;
    // 相対位置化
    const clientRect = document.getElementById('canvas').getBoundingClientRect();
    let x = clickX - clientRect.left;
    let y = clickY - clientRect.top;
    // 原点左下に変更
    y = Math.abs(300 - y);
    // 配列に追加
    x_arr[x_arr.length] = x;
    y_arr[y_arr.length] = y;
});

// GUESSボタン押下時
function guess() {
    let result_r = r(x_arr, y_arr);
    result_r = Math.floor(result_r * Math.pow(10, 2)) / Math.pow(10, 2);
    document.getElementById('result').innerHTML = '相関係数：' + result_r;
}
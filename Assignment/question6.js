const arr = [3, 5, 7, 9, 4, 3, 8, 9];

(function () {
    let total = 0;
    for (v in arr) {
        total += parseInt(v)
    }
    console.log(total);
}(arr))
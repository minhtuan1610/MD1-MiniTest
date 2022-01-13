let arrElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum = 0;

function checkPrimeNumber(n) {
    let check = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            //False: not prime number
            check = false;
            //break để giảm tải việc xét điều kiện
            break;
        }

    }
    if (n <= 1) {
        check = false;
    }
    //Lệnh 1: function = check (True/False)
    //Lệnh 2: Trả về giá trị check ban đầu
    return check;
}

for (let j = 0; j < arrElement.length; j++) {
    let a = arrElement[j];
    if (checkPrimeNumber(a)) {
        sum += a;

    }
}
document.getElementById("result").innerText = "The sum of Prime Number is: " + sum;
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
    //Lệnh 1: function = check (True/False)
    //Lệnh 2: Trả về giá trị check ban đầu
    return check;
}

const N = 500;
let x = 2;
let cnt = 0;
let sum = 0;

function sumPrimeNumber() {
    while (x < 500) {
        if (checkPrimeNumber(x)) {
            sum += x;
            cnt++;
        }
        x++;
        if (cnt == N) {
            break;
        }
    }
    document.getElementById("result").innerText = "The sum of Prime Number is: " + sum;
}

sumPrimeNumber();
const isPalindrome = function (x){
    return x === +x.toString().split("").reverse().join("")
}

const check = isPalindrome(2);
console.log(check);

// 121 => "121" => ["1", "2", "1"] => ["1", "2", "1"] => "121"
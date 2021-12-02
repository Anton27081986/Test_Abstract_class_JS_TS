// Задание 1
// Создать абстрактный класс “AClass” у которого будет свойство “Numbers” типа Array, который будет содержать n натуральных чисел. Также AClass должен иметь метод “fill”, который заполняет массив Numbers случайными числами; метод “factorial”, который возвращает
// массив факториалов из массива Numbers; и абстрактный метод “sort”. Конструктор принимает один параметр “n” и вызывает метод “fill”. Метод “fill” можно вызывать только из методов класса “AClass”. Метод “factorial” может вызываться из класса AClass и из дочерних классов.
// Реализовать два дочерних класса “Class1” и “Class2” с методом “sort” который сортирует массив Numbers, а затем выдает массив факториалов. Способы сортировки в классах “Class1” и “Class2” должны различаться.


class AClass {
    constructor(n) {
        this.numbers = [];
        this._fill(n);
        // this.numbers.length = n;
    }

    _fill(n){
        for (let i = 0; i < n; i++) {
            this.numbers.push(Math.floor(Math.random() * 10));
        }
        return this.numbers;
    }

    factorial() {
        let arrFactorial = this.numbers.map(item => {
            let result = 1;
                while (item) {
                    result *= item--;
                }
            return result;
        });
        return arrFactorial;
    }

    sort() {

    }
}

class Class1 extends AClass {
    constructor(n) {
        super(n);

    }

    sort() {
        for (let i = 0, endI = this.numbers.length - 1; i < endI; i++) {
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (this.numbers[j] > this.numbers[j + 1]) {
                    let swap = this.numbers[j];
                    this.numbers[j] = this.numbers[j + 1];
                    this.numbers[j + 1] = swap;
                }
            }
        }
    }
}

let class1 = new Class1(3);
class1.sort();
console.log(class1.factorial());

class Class2 extends AClass {
    constructor(n) {
        super(n);
    }

    sort() {
        for (let i = 0; i < this.numbers.length; i++) {
            let min = i;
            for (let j = i; j < this.numbers.length; j++) {
                if (this.numbers[j] < this.numbers[min]) {
                    min = j;
                }
            }
            if (min != 0) {
                let temp = this.numbers[i];
                this.numbers[i] = this.numbers[min];
                this.numbers[min] = temp;
            }
        }
    }
}

let class2 = new Class2(4);
class2.sort();
console.log(class2.factorial());








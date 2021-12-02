// Задание 1
// Создать абстрактный класс “AClass” у которого будет свойство “Numbers” типа Array, который будет содержать n натуральных чисел. Также AClass должен иметь метод “fill”, который заполняет массив Numbers случайными числами; метод “factorial”, который возвращает
// массив факториалов из массива Numbers; и абстрактный метод “sort”. Конструктор принимает один параметр “n” и вызывает метод “fill”. Метод “fill” можно вызывать только из методов класса “AClass”. Метод “factorial” может вызываться из класса AClass и из дочерних классов.
// Реализовать два дочерних класса “Class1” и “Class2” с методом “sort” который сортирует массив Numbers, а затем выдает массив факториалов. Способы сортировки в классах “Class1” и “Class2” должны различаться.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AClass = /** @class */ (function () {
    function AClass(n) {
        this.numbers = [];
        this.fill(n);
    }
    AClass.prototype.fill = function (n) {
        for (var i = 0; i < n; i++) {
            this.numbers.push(Math.floor(Math.random() * 10));
        }
        return this.numbers;
    };
    AClass.prototype.factorial = function () {
        this.numbers = this.numbers.map(function (item) {
            var result = 1;
            while (item) {
                result *= item--;
            }
            return result;
        });
        return this.numbers;
    };
    return AClass;
}());
var Class1 = /** @class */ (function (_super) {
    __extends(Class1, _super);
    function Class1(n) {
        return _super.call(this, n) || this;
    }
    Class1.prototype.sort = function () {
        for (var i = 0, endI = this.numbers.length - 1; i < endI; i++) {
            for (var j = 0, endJ = endI - i; j < endJ; j++) {
                if (this.numbers[j] > this.numbers[j + 1]) {
                    var swap = this.numbers[j];
                    this.numbers[j] = this.numbers[j + 1];
                    this.numbers[j + 1] = swap;
                }
            }
        }
    };
    return Class1;
}(AClass));
var class1;
class1 = new Class1(3);
class1.sort();
console.log(class1); // for test sort;
setTimeout(function () {
    class1.factorial();
    console.log(class1);
}, 3000);
var Class2 = /** @class */ (function (_super) {
    __extends(Class2, _super);
    function Class2(n) {
        return _super.call(this, n) || this;
    }
    Class2.prototype.sort = function () {
        for (var i = 0; i < this.numbers.length; i++) {
            var min = i;
            for (var j = i; j < this.numbers.length; j++) {
                if (this.numbers[j] < this.numbers[min]) {
                    min = j;
                }
            }
            if (min != 0) {
                var temp = this.numbers[i];
                this.numbers[i] = this.numbers[min];
                this.numbers[min] = temp;
            }
        }
    };
    return Class2;
}(AClass));
var class2;
class2 = new Class2(3);
class2.sort();
console.log(class2);
setTimeout(function () {
    console.log(class2);
    class2.factorial();
}, 5000);

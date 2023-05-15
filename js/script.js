function Student(name, faculty, marks) {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;

    this.getAvgMark = function () {
        const sum = this.marks.reduce(function (acc, val) {
            return acc + val;
        });
        return sum / this.marks.length;
    };

    this.getMedianMark = function () {
        const sortedMarks = this.marks.slice().sort(function (a, b) {
            return a - b;
        });
        const middle = Math.floor(sortedMarks.length / 2);
        if (sortedMarks.length % 2 === 0) {
            return (sortedMarks[middle - 1] + sortedMarks[middle]) / 2;
        } else {
            return sortedMarks[middle];
        }
    };

    this.getMaxMark = function () {
        return Math.max.apply(null, this.marks);
    };

    this.getMinMark = function () {
        return Math.min.apply(null, this.marks);
    };

    this.getTotal = function () {
        return this.marks.reduce(function (acc, val) {
            return acc + val;
        });
    };

    this.getInfo = function () {
        return this.name + ' ' + this.faculty + ' ' + this.getTotal();
    };
}

const student = new Student('Serhii Kryvorotenko', 'Psychology', [5, 8, 9, 4, 6, 7, 4]);

console.log(student.getAvgMark());
console.log(student.getMedianMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());
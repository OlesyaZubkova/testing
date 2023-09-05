class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return this.state *= 1.5;
  }
  
  set state(newState) {
    if (newState <= 0) {
      this._state = 0;
    } else if (newState >= 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  
  get state() {
    return this._state;
  }

}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15


// ================================= TASK 2 =================================

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let found = this.books.find(found => found[type] === value);
    return found ? found : null;
  }
  
  giveBookByName(bookName) {
    let findBookName = this.books.find(e => e.name === bookName);
    if (findBookName) {
      this.books.splice(this.books.indexOf(findBookName), 1);
      return findBookName;
    } else {
      return null;
    }
  
  }
  
}


const library = new Library("Библиотека имени Ленина");
console.log(library);
console.log('\n');

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);

library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.books);
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4

library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

console.log('\n');
console.log(library);

  // ================================= TASK 3 =================================

  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
    
    addMark(mark, subject) {
      if (mark >=2 && mark <= 5) {
        if (!this.marks.hasOwnProperty(subject)) {
          this.marks[subject] = [];
        } 
          this.marks[subject].push(mark);
      } 
    }
  
    getAverageBySubject(subject) {
      if (!this.marks.hasOwnProperty(subject)) {
        return 0;
      }
      let result = this.marks[subject].reduce((sum, current) => sum + current, 0) / this.marks[subject].length;
      return +(result);
      // return +(result.toFixed(1));
    }
  
    getAverage() {
      let sum = 0;
      let value = Object.keys(this.marks);
      console.log(value);

      if (value.length > 0) {
        for (let i = 0; i < value.length; i++) {
          sum = sum + this.getAverageBySubject(value[i]);
          console.log(sum);
        }
        sum = sum / value.length;
      }
      return sum;
    }
  }
  
  const student = new Student("Олег Никифоров");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
  console.log(student);
  student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
  console.log(student.getAverageBySubject("физика"));
  student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
  console.log(student.getAverageBySubject("биология"));
  student.getAverage(); // Средний балл по всем предметам 4.75
  console.log(student.getAverage());

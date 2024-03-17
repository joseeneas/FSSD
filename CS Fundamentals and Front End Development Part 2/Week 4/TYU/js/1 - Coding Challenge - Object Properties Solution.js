var
    book = {
        name: "Java",
        authors: ["Ujjawal"],
        "publication year": 2019,
        publisher: "Oracle",
        "change name": function (newName) {
            this.name = newName
        },
        addAuthors: function (author) {
            this.authors.push(author)
        }
    }
console.log(book);
book["change name"]("Python")
console.log(book);
book.addAuthors("Harshit");
console.log(book);
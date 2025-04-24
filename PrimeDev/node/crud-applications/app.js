const express = require("express");

const app = express();

const PORT = 1301;

let books = [
    {
        id: 100,
        name: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki"
    },
    {
        id: 101,
        name: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        id: 102,
        name: "Ikigai: The Japanese Secret to a Long and Happy Life",
        author: "Francesc Miralles & Héctor García"
    },
];

app.use(express.json());

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});

app.get("/", (_, res) => {
    try {
        res.json({
            status: "success",
            message: "Books fetched successfully",
            books: books
        })
    } catch (error) {
        res.json({
            status: "failure",
            message: "Books could not be fetched",
            error: error.message
        })
    }
});

app.post("/", (req, res) => {
    try {
        let newId = books.length == 0 ? 100 : books[books.length - 1].id;
        let { name, author } = req.body;
        let newBook = {
            id: newId + 1,
            name: name,
            author: author
        }
        books.push(newBook);
        console.log(books)
        res.json({
            status: "success",
            message: "New book added successfully",
            books: books
        })
    } catch (error) {
        res.json({
            status: "failure",
            message: "New book could not be added",
            error: error.message
        });
    }
});

app.get("/:id", (req, res) => {
    try {
        let id = req.url;
        id = id.substring(1); // because id return "/101"
        let book = books.find(book => book.id == Number(id))
        res.json({
            status: "success",
            message: "Book fetched successfully",
            book: book
        });
    } catch (error) {
        res.json({
            status: "failure",
            message: "Could not fetch the book of the mentioned id",
            error: error.message
        });
    }
});

app.delete("/:id", (req, res) => {
    try {
        let id = req.url;
        id = id.substring(1); // because id return "/101"
        // console.log("ID: " + id)
        if (id.length == 0) {
            return res.json({
                status: "failure",
                message: "ID does not exist in URL",
            })
        }
        let delBookIndex = books.findIndex(book => book.id == Number(id));
        let newBooks = Number(delBookIndex) != -1 ? books.filter(book => book.id != Number(id)) : "No book has been deleted since no index was specified in the URL";
        let deletedBook = books.slice(delBookIndex, 1)
        // console.log(deletedBook)
        // console.log(books)
        return res.json({
            status: "success",
            message: "Book deleted successfully",
            deletedBook: deletedBook,
            books: newBooks
        })
    } catch (error) {
        res.json({
            status: "failure",
            message: "Could not delete the book of the mentioned id",
            error: error.message
        });
    }
});

app.put("/:id", (req, res) => {
    try {
        let id = req.params.id;
        let { name, author } = req.body;
        let index = books.findIndex(book => book.id == id);
        if (index == -1) {
            return res.json({
            status: "failure",
            message: "ID does not exist in URL",
            });
        }

        books[index] = {
            id: books[index].id,
            name: name || books[index].name, 
            author: author || books[index].author
        };

        res.json({
            status: "success",
            message: "Book updated successfully",
            updatedBook: books[index],
            books: books
        });
        
    } catch (error) {
        res.json({
            status: "failure",
            message: "Could not update the book of the mentioned id",
            error: error.message
        });
    }
})
const { useState } = React;

const BookStore = () => {
    const [books] = useState([
        {
            id: 1,
            title: "The Great Gatsby",
            price: "$12.99",
            image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=400&fit=crop"
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            price: "$14.99",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop"
        },
        {
            id: 3,
            title: "1984",
            price: "$13.99",
            image: "https://images.unsplash.com/photo-1494726161322-5ad556fbc3a5?w=300&h=400&fit=crop"
        },
        
    ]);

    return (
        <div className="container">
            <h1>?? Book Store</h1>
            <div className="books-grid">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <img src={book.image} alt={book.title} className="book-image" />
                        <div className="book-info">
                            <div className="book-title">{book.title}</div>
                            <div className="book-price">{book.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookStore />);

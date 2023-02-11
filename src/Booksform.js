import React, { useState } from 'react';
import './App.css';
function BooksForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [bookList, setBookList] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author, isbn };
    setBookList([...bookList, newBook]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleDeleteBook = (book) => {
    const newBookList = bookList.filter((item) => item !== book);
    setBookList(newBookList);
    setSelectedBook(null);
  };

  const handleRemoveAllBooks = () => {
    setBookList([]);
    setSelectedBook(null);
  };

  return (
    <div id="App5" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")', backgroundSize: 'cover', minHeight: '100vh' }}>
        <h1 className='App9'>BookList Maintenance Form</h1>
        <p style={{color:'aqua', textAlign:'center'}}>Add and view your books using local storage</p>
        
    <div className='parent'>
        <div className='child'>
  
        <form onSubmit={handleSubmit}>

<div className="mb-3">
  <label className="fw-bold text-primary">TITLE</label>
  <input className="form-control" placeholder="Enter Title" type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
</div>

<div className="mb-3">
  <label className="fw-bold text-primary">AUTHOR</label>
  <input className="form-control" placeholder="Enter Author" type="text" value={author} onChange={(event) => setAuthor(event.target.value)}/>
</div>

<div className="mb-3">
  <label className="fw-bold text-primary">ISBN</label>
  <input name="password" className="form-control" placeholder="Enter ISBN" type="text" value={isbn} onChange={(event) => setIsbn(event.target.value)}/>
</div>

<div className="d-grid">
  <button type="submit" className="btn btn-success">Add</button>
</div>
</form>
      </div>
      <div className='child1'>
        <div className="table-responsive">
      <table class="table table-hover table-striped">
        <thead >
          <tr >
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => (
            <tr key={index} onClick={() => handleBookSelect(book)}>
              <td  style={{color:'blue'}}>{book.title}</td>
              <td style={{color:'blue'}}>{book.author}</td>
              <td style={{color:'blue'}}>{book.isbn}</td>
              <td>
                <button onClick={() => handleDeleteBook(book)} className=' btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      <button onClick={handleRemoveAllBooks} className='btn btn-danger' >Remove All</button>
      </div>
      
    </div>
    </div>
  );
}

export default BooksForm;
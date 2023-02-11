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
    <div id="App5" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")', backgroundSize: 'cover', minHeight: '100vh' }}>
        <h1 className='App9'>BookList Maintenance Form</h1>
        
    <div className='parent'>
        <div className='child'>
      <form onSubmit={handleSubmit}>
        <table>
            <tr>
       <td><label>
          Title: </label></td> 
        <td> <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} /> </td> 
       
        </tr>
        <tr>

      <td><label>
          Author: </label></td>  
         <td><input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} /></td> 
       
        </tr>
<tr>
        <td><label>
         ISBN:</label> </td>
<td><input type="text" value={isbn} onChange={(event) => setIsbn(event.target.value)} /></td>
        
       </tr>
       <div className='App8'>
        <button type="submit" >Add Book</button>
        </div>
        
        </table>
      </form>
      </div>
      <div className='child1'>
      <table className='App7'>
        <thead className='App7'>
          <tr className='App7'>
            <th className='App7'>Title</th>
            <th className='App7'>Author</th>
            <th className='App7'>ISBN</th>
            <th className='App7'>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => (
            <tr key={index} onClick={() => handleBookSelect(book)}>
              <td className='App7'>{book.title}</td>
              <td className='App7'>{book.author}</td>
              <td className='App7'>{book.isbn}</td>
              <td>
                <button onClick={() => handleDeleteBook(book)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button onClick={handleRemoveAllBooks} >Remove All</button>
      </div>
      
    </div>
    </div>
  );
}

export default BooksForm;
import React, { components } from 'react';

class BookList extends components {

  renderBooks = ()=>{
    return this.props.books.map(book => <li key={ book.title }>{ book.title }</li>)
  }

  render(){
    const { renderBooks } = this;
    return(
      <div className="book_list">
       <ul>
       {renderBooks()}
       </ul>
      </div>
    )
  }
}

export default BookList;

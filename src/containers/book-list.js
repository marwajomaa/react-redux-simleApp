import React, { Component } from 'react';
import { connect } from 'react-redux';
// make BookList component as container component which is react component that has direct connection to the state managed by redux
// make connection with redux state using connect from react-redux

class BookList extends Component {

  renderBooks = ()=>{
    return this.props.books.map(book => {
      return(
        <li key={ book.title } className="book_li">{ book.title }</li>
      )
    })
}

  render(){
    console.log(this.props);
    const { renderBooks } = this;
    return(
      <div className="book_list">
       <ul>
       { renderBooks() }
       </ul>
      </div>
    )
  };
}

function mapStateToProps(state){
  // whatever is returned from redux state will show up as props inside BookList (returned in object)
  return {
    // key (books) is the props that used in the renderBooks fun and it's value from redux state
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);

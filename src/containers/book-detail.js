import React from 'react'
import { connect } from 'react-redux'
// import { selectBook } from '..//actions/index'
// import { bindActionCreators } from 'redux';

class BookDetail extends React.Component {
    render() {
        if (!this.props.book) {
            return <div> select a book to get started </div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ activeBook: selectBook }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)
export default connect(mapStateToProps)(BookDetail)
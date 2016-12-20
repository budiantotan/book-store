import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    submitBook(input) {
        alert("Book submitted");
    }

    render() {
        let titleInput;

        return (
            <div>
                <h3>Books</h3>
                <ul>
                    {this.props.books.map(
                        (b, i) => <li key={i}>{b.key}</li>
                    )}
                </ul>
                <div>
                    <h3>Book Form</h3>
                    <form onSubmit={e => {
                        e.preventDefault();

                        var input = { title: titleInput.value };
                        this.submitBook(input);
                        e.target.reset();
                    }}>
                        <input type="text" name="title" ref={node => titleInput = node} />
                        <input type="submit" />
                    </form>    
                </div>
            </div>
        )
    }
}

export default Book;
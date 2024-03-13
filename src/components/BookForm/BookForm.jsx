import { Component } from 'react';
import { StyledForm } from './styled';

export default class BookForm extends Component {
  render() {
    return (
      <StyledForm>
        <h2>Book Form</h2>
        <label className="form-label">
          <span>title:</span>
          <input type="text" />
        </label>
        <label className="form-label">
          <span>author:</span>
          <input type="text" />
        </label>
        <label className="form-label">
          <span>year:</span>
          <input type="text" />
        </label>
        <label className="form-label">
          <span>genre:</span>
          <input type="text" />
        </label>
        <label className="form-label">
          <span>favourite:</span>
          <input type="checkbox" />
        </label>

        <button type="submit">Add book</button>
      </StyledForm>
    );
  }
}

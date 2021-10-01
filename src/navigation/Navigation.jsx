import "./Navigation.css";
import {
  Link
} from "react-router-dom";
export const Navigation = (props) => {
  const searchInput =(e)=>{
      props.setInput(e.target.value);
      props.setFinput(e.target.value);

  }
  const submit = (e)=>{
    e.preventDefault();
    props.fetchData();
    props.setInput('');
    
  }


  return (
    <div>
      <div className="header">
        <nav>
          <Link to="/" className="logo">
            Movie App
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favourite">favourite</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
      <form className="form" onSubmit = {submit}>
        <input
        value ={props.input}
          onChange={searchInput}
          type="search"
          className="search"
          placeholder = "Enter Movie Keyword"
        />
      </form>
    </div>
  );
};

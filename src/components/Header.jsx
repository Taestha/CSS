const Header = ({name, id, time}) => {
    return (
      <div className="tweet-header">
          <img
          src="https://placekitten.com/200/150"
          alt="Tweet Image"
          height={50}
          width={50}
        />
        <h3 className="username">{name}</h3>
        <span className="handle">{id}</span>
        <span className="timestamp">-{time}</span>
      </div>
    );
  };
  
  export default Header;
  
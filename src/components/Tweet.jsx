import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";
const Tweet = ({name, id, time}) => {
    return (
      <>
      
        <Header name= {name} id={id} time={time}/>
        <TweetBody/>
        <Footer/>
      </>
    );
  };
  
  export default Tweet;
  
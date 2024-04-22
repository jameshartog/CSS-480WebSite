import logo from '../pfp.jpg';
import '../App.css';
import React from "react";

class UnorderedList extends React.Component {
  render() {
    return(
      <ul>
         {this.props.items.map((item ,key) => 
             <li key={key}> {item}</li>
          )}
      </ul>
    )
  }
}
UnorderedList.defaultProps= {items:[]};

class OuterLoop extends React.Component{
    
  state= {
      listItems: ['Books', 'History', 'Video Games']
   };

  onClick(e) {
     e.preventDefault();
     this.setState({
       listItems: this.state.listItems.reverse()
     });
  }

  render() {
    return (
      <div>
        <div>
           <UnorderedList items={this.state.listItems} />
        </div>
        <div> 
           <button onClick={this.onClick.bind(this)}>Reverse</button>
        </div>
      
      </div>
      
     )
  }
}

const Home = () => {
	return (
		<div>
			<header className="App-header">
        <body>
          <h1>PoC: Hello World - Alternative Assignment</h1>
          <p>Welcome to my <strong>Web</strong> site!
            Since I have not built a website before this is absolutely terrible.</p>
          <h4>A little about myself: </h4>
          <p>My name is JJ Hartog and I am from Seattle, Washington (more specifically West Seattle).
            I am a CSSE major here at UWB and am currently in my 3rd year attending here with Senior standing.
            Whilst I have programmed a variety of backend and application specific projects, I have not done
            much work with web facing software so my knowledge of how websites work is half baked.
            Below is my profile picture I use for most of my accounts; this image is not unlike red glowing
            eyes, but in reality is a picture I took back in elementary school</p>
            <img src={logo} className="App-logo" alt="logo" />
          <p>Here is an unordered list of things that interest me the most:</p>
        </body>
      </header>
      <OuterLoop/>
		</div>
	);
};

export default Home;
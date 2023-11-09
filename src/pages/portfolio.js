import React from "react";

const Portfolio = () => {
	return (
		<div
			style={{
				display: "block",
				justifyContent: "center",
				alignItems: "center",
				alignContent: "center",
				height: "100vh",
			}} 
			className="cards"
		>
			<h1>
				Look at all the portfolios
			</h1>
			<div  className="cards box">
      			<h2>thePANTSco</h2>
				<h3>
      				<p>A Kansas City-based experimental theatre company.</p>
        			<a className="center" href="https://www.thepantsco.org/"> 
        				<img src="https://www.thepantsco.org/wp-content/uploads/2021/10/cropped-cropped-IMG_5985-1-1.jpg" alt="thePANTSco in white font against a black background">
        				</img>
					</a>
					<p>
						<a href="https://www.github.com">
							Github Repository
						</a>
					</p>
				</h3>
			</div>
			<div className="cards box">
      			<h2>
					Wiki-Type
				</h2>
	  			<h3>
        			<p>
						A real-time word typing test that returns an accurate words-per-minute result.
					</p>
        			<a className="center" href="https://calebjwood.github.io/Wiki-Type/"> 
          				<img src="././images/Wiki-Type.png" alt="a still of a deployed typing-test application">
						</img>
        			</a>
					<p>
						<a href="https://github.com/Calebjwood/Wiki-Type">
							Github Repository
						</a>
					</p>
      			</h3>
    		</div>
    		<div className="cards box">
      			<h2>
					Orange
				</h2>
	  			<h3>
        			<p>
						An online community consisting exclusively of words that rhyme with 'orange'. After all, oranges are people too.
					</p>
        			<a className="center" href="https://www.rhymezone.com/r/rhyme.cgi?&typeofrhyme=perfect&loc=moreideas&Word=orange"> 
          				<img src="././images/oranges.jpg" alt="half oranges displayed on a light blue table">
		  				</img>
					</a>
					<p>
						<a href="https://www.github.com">
							Github Repository
						</a>
					</p>
      			</h3>
    		</div>
    		<div className="cards box">
      			<h2>
					Cuban Potatoes
      			</h2>
	  			<h3>
        			<p>
						An AI-driven potato farm delivering the most tobacco-enriched potatoes the world has ever seen.
					</p>
        			<a className="center" href="https://www.sipsnibblesbites.com/cuban-mojo-potatoes/"> 
          				<img src="././images/potatoes.jpg" alt="four different species of potatoes in one big pile on a wooden table">
		  				</img>
					</a>
					<p>
						<a href="https://www.github.com">
							Github Repository
						</a>
					</p>
        			<p>
						Idaho-Schmidaho.
					</p>
	  			</h3>
      		</div>
    		<div className="cards box">
      			<h2>
					Iguana MeetCute
				</h2>
	  			<h3>
      				<p>
						A playdate-scheduler for iguana lovers.
					</p>
      				<a className="center" href="https://www.anapsid.org/iguana/breedingbasics.html"> 
        				<img src="././images/iguanas.jpg" alt="three iguanas pershed atop a hay bale looking at the camera">
						</img>
	  				</a>
	  				<p>
						<a href="https://www.github.com">
							Github Repository
						</a>
					</p>
      				<p>
						"Can I play with your lizard?"
					</p>
    			</h3>
    		</div>
    	</div>
	);
};

export default Portfolio;

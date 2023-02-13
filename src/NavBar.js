import { Link } from "react-router-dom";

function NavBar()
{
	return(
		<>
			<center>
					<div className="nav">
						<Link to="/" > Home </Link>
						<Link to="/python" > Python </Link>
						<Link to="/ml" > ML </Link>
						<Link to="/enquiry" > Enquiry </Link>
					</div>
			</center>
		</>
	);		
}
export default NavBar;
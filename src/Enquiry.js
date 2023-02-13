import { useState } from "react";
import emailjs from "@emailjs/browser";
function Enquiry()
{
	const [name, setName] = useState("");
	const [college, setCollege] = useState("");
	const [phone, setPhone] = useState("");
	const [query, setQuery] = useState("");
	const [ans, setAns] = useState("");

	const hName = (event) => { setName(event.target.value); }
	const hCollege = (event) => { setCollege(event.target.value); }
	const hPhone = (event) => { setPhone(event.target.value); }
	const hQuery = (event) => { setQuery(event.target.value); }

	const save = (event) => {
		event.preventDefault();
		let data = {"from_name":name, "from_college":college, 
		"from_phone":phone, "message":query};
		emailjs.send("service_ownfhut", "template_du7kuzf", data, "bAtXJyl7evl8h-0sl")
		.then(res => setAns("We will get back to you in 2 hours"))
		.catch(err => console.log(err));
	}
	
	return(
			<>
				<center>
				<h1> Enquiry </h1>
				<form onSubmit={save}>
			<input type="text" placeholder="Enter your name" onChange={hName}/>
					<br/><br/>
			<input type="text" placeholder="Enter your college" onChange={hCollege}/>
					<br/><br/>
			<input type="number" placeholder="Enter your phone number" onChange={hPhone}/>
					<br/><br/>
			<textarea placeholder="Enter your query" rows={5} cols={30} onChange={hQuery}/>
					<br/><br/>
			<input type="submit"/>
				</form>
					<h1> {ans} </h1>
				</center>
			</>
	);	

}
export default Enquiry;
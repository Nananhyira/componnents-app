function Navbar(props) {
	console.log(props);
	return (
		<>
			<h1>Hello {props.code} students </h1>
			<h1>Welcome {props.name}</h1>
			<h1>{props.me}</h1>
			<hr />
		</>
	);
}
export default Navbar;

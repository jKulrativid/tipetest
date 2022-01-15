export default function TypeBox(props) {
	return <div>
		<input type="text" onChange={props.onChange} disabled={props.disabled} />
	</div>
}
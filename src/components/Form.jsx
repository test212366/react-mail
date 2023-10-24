export const Form = props => {
	return (
		<form>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					placeholder={props.placeholder}
				/>
			</div>
		</form>
	)
}
export const Users = props => {
	return (
		<>
			<ul>
				{props.user.map((user, key) => {
					return (
						<li
							style={{ marginBottom: '55px', listStyleType: 'none' , color:"red"}}
							key={key}
						>
							<div>name:{user.name} {key}</div>
							<div>age:{user.age}</div>
							<div>position:{user.position}</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}
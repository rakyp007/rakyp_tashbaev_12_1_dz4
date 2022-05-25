import React from 'react'

class MainPage extends React.Component {
	constructor(props) {
			super(props)
			this.state = ({name: ""})

			this.onChangeInput = this.onChangeInput.bind(this)
			this.onSubmit = this.onSubmit.bind(this)
	}
	onChangeInput(e){
		this.setState({value: e.target.value})
	}
	onSubmit(e) {
		e.preventsDefaule()

		console.log(this.state);
	}

	render() {
		return (
			<>
				<from>
					<input
						type='text'
						value={this.state.value}
						onChange={this.onChangeInt}
					/>
					<button type='submit' onClick={this.onSubmit}>
						отправить
					</button>
				</from>
			</>
		)
	}
}
export default MainPage;
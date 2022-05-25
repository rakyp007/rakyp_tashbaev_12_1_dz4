import { Users } from './componentsPage/users/Users'
import MainPage from './page/mainPage/MainPage'

const user = [
	{
        name: "Dastan",
        age: 25,
        position: "Front-end"
    },
    {
        name: "Jalil",
        age: 16,
        position: "schoolboy"
    },
    {
        name: "Ruslan",
        age: 17,
        position: "Student geekTech"
    }
]

function App() {
	return (
		<>
			<Users user={user}/>
			<MainPage />
		</>
	)
}

export default App
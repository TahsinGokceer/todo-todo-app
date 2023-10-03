import './App.css';
import Form from './components/Form';
import Content from './components/Content';
import { TodoProvider } from './context/TodoContext';

function App() {
	return (
		<div className='App'>
			<TodoProvider>
				<Form/>
				<Content/>
			</TodoProvider>			
		</div>
	);
}

export default App;

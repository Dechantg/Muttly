import {useState} from 'react';
import useData from './hooks/useData';
import DataList from './components/Dataist';
import './App.css';
import Status from './components/Status';

export default function App() {
  const [text, setText] = useState("");
  const {status, error, data, addItem, deleteItem} = useData();

  const addFriend = function() {
    addItem(text);
  };

  return (
    <div className="App">
      <h1>My Anything List</h1>

      <Status status={status} error={error} />

      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addFriend}>Add</button>

      <DataList friends={data} deleteItem={deleteItem} />
    </div>
  );
}

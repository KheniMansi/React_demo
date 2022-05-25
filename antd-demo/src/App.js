import { createContext } from 'react';
import './App.css';
import Antd from './Component/Antd';
import CompA from './ComponentContext/CompA';
import Parent from './ComponentCallBack/Parent';
import Usememo from './ComponentUseMemo/Usememo';

const Text = createContext();
const Text2 = createContext();

function App() {
  return (
    <>
      <Antd />
      <Text.Provider value={"Demo"}>
        <Text2.Provider value={"Example"}>
          <CompA />
        </Text2.Provider>
      </Text.Provider>
      {/* <CompA /> */}
      <Parent />
      <Usememo />
    </>
  );
}

export default App;
export {Text, Text2};

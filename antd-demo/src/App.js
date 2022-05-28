import { createContext } from 'react';
import './App.css';
import Antd from './Component/Antd';
import CompA from './ComponentContext/CompA';
import Parent from './ComponentCallBack/Parent';
import Usememo from './ComponentUseMemo/Usememo';
import UseRef from './ComponentUseRef/UseRef';
import First from './ComponentUseImperative/First';
// import LayoutEffact from './ComponentUseLayoutEffect/LayoutEffact';
import Test from './ComponentUseDebugValue/Test';
import DemoParent from './ComponentDemo/DemoParent';
import ParentDemo from './ComponentDemoState/ParentDemo';
import ReduxDemo from './ComponentRedux/ReduxDemo';

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
      
      <UseRef />
      {/* useImperative */}

      <First />
      {/* <LayoutEffact /> */}

      <Test />
      <DemoParent />
      <ParentDemo />
      <ReduxDemo />
    </>
  );
}

export default App;
export {Text, Text2};

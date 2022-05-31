// import { createContext } from 'react';
import './App.css';
// import Antd from './Component/Antd';
// import CompA from './ComponentContext/CompA';
// import Parent from './ComponentCallBack/Parent';
// import Usememo from './ComponentUseMemo/Usememo';
// import UseRef from './ComponentUseRef/UseRef';
// import First from './ComponentUseImperative/First';
// // import LayoutEffact from './ComponentUseLayoutEffect/LayoutEffact';
// import Test from './ComponentUseDebugValue/Test';
// import DemoParent from './ComponentDemo/DemoParent';
// import ParentDemo from './ComponentDemoState/ParentDemo';
// import ReduxDemo from './ComponentRedux/ReduxDemo';
// import Main from './ComponentRoutes/Main';

// const Text = createContext();
// const Text2 = createContext();
// import LoginHtml from './ComponentCrud/LoginHtml';

import Main from './Main';


function App() {
 
  return (
    <>
      <Main />
    {/* <LoginHtml /> */}
      {/* <Antd />
      <Text.Provider value={"Demo"}>
        <Text2.Provider value={"Example"}>
          <CompA />
        </Text2.Provider>
      </Text.Provider> */}
      {/* <CompA /> */}
      
      {/* <Parent />
      <Usememo />
      
      <UseRef /> */}
      {/* useImperative */}

      {/* <First /> */}
      {/* <LayoutEffact /> */}

      {/* <Test />
      <DemoParent />
      <ParentDemo />
      <ReduxDemo />
      <Main /> */}
    </>
  );
}

export default App;
// export {Text, Text2};
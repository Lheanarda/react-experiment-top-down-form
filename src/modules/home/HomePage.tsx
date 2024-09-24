import React, { FC, Suspense, createContext, useEffect } from "react";
import GlobalContext from "./contexts/GlobalContext";
import ContactDetail from "./components/ContactDetail";
import TravelerDetail from "./components/TravelerDetail";
import GlobalContext2 from "./contexts/GlobalContext2";
import { getInitialValues } from "./utils/getInitialValues";
import { mockVDPayload } from "./mocks/VDPayload.mock";
import DynamicContextProvider from "./contexts/DynamicContext";
import Form1 from "./components/Form1";
import { mockVDMap } from "./mocks/VDResult.mock";
import Form2 from "./components/Form2";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 space-y-4 p-10">
      <div>Homes</div>
      {/* <ContactDetail />
      <TravelerDetail /> */}
      <Form1 />
      <Form2 />
    </div>
  );
};

const HomePageContainer: FC = () => {
  return (
    <GlobalContext>
      <GlobalContext2>
        <DynamicContextProvider data={mockVDMap}>
          <HomePage />
        </DynamicContextProvider>
      </GlobalContext2>
    </GlobalContext>
  );
};
export default HomePageContainer;

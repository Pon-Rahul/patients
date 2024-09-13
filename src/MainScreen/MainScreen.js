import styled from "@emotion/styled";
import { useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { MediaQuery } from "../MediaQuery/MediaQuery";

const RootDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
`;

const SidebarDiv = styled.div`
  width: 20%;
`;

const MainDiv = styled.div`
  width: 80%;
  background: #f6f6f6;
`;

const MainResponsiveDiv = styled.div`
  width: 100%;
`;

const ChildDiv = styled.div``;

export const Main = ({ children }) => {
  const [title, setTitle] = useState("Dashboard"); 

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <div>
      {MediaQuery().isResponsive ? (
        <div>
          <MainResponsiveDiv>
            <Header title={title} />
            {children}
          </MainResponsiveDiv>
        </div>
      ) : (
        <div>
          <RootDiv>
            <SidebarDiv>
              <SideBar onTitleChange={handleTitleChange} />
            </SidebarDiv>
            <MainDiv>
              <Header title={title} />
              <div
                style={{
                  marginTop:  "100px",
                  background: "#f6f6f6",
                }}
              >
                <ChildDiv>{children}</ChildDiv>
              </div>
            </MainDiv>
          </RootDiv>
        </div>
      )}
    </div>
  );
};

export default Main;

import styled from "@emotion/styled";
import { MediaQuery } from "../MediaQuery/MediaQuery";
import Footer from "../Footer/Footer";
import ProfileHeader from "../ProfileHeader/ProfileHeader";

const RootDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #f6f6f6;
`;

const MainDiv = styled.div`
  width: 80%;
`;

const MainResponsiveDiv = styled.div`
  width: 100%;
`;

const ChildDiv = styled.div`
  margin-top: 45px;
`;

export const FullScreen = ({ children }) => {
  const isResponsive = MediaQuery().isResponsive;

  return (
    <RootDiv>
      <div style={{ height: "74px"}}>
        <ProfileHeader />
      </div>
      <div style={{ display: "flex" , justifyContent:"center"}}>
        {!isResponsive ? (
          <div>
            <MainDiv>
              <ChildDiv>{children}</ChildDiv>
            </MainDiv>
          </div>
        ) : (
          <MainResponsiveDiv>
            <ChildDiv>{children}</ChildDiv>
          </MainResponsiveDiv>
        )}
      </div>
      <Footer />
    </RootDiv>
  );
};

export default FullScreen;

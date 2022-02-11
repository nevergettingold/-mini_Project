import React from "react";

import styled from "styled-components";

const Home = (props) => {
  return (
    <Container>
      <div>
        <h1>D질래?</h1>
        <h1>Header</h1>
        <h1>Banner</h1>
        <img
          src="https://cdn.wallpapersafari.com/71/63/40yW8c.jpg"
          alt=""
          width="600px"
        />
      </div>
      <Main>
        <p>이번 주의 D지게 공감</p>
        <Card>
          <img
            src="https://www.fonewalls.com/wp-content/uploads/1536x2048-Background-HD-Wallpaper-002-300x400.jpg"
            alt=""
          />
        </Card>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  min-width: 1280px;
  margin: 0 auto;
`;

const Main = styled.div`
  /* width: 1280px; */
  /* display: flex; */
`;

const Card = styled.div``;

export default Home;

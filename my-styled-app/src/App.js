import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Segment,Grid, Card, Icon } from "semantic-ui-react";
import styled, {keyframes} from "styled-components";
import HeaderText from "./styledComponents/HeaderText"
import Axios from "axios"

function App() {
  const [repos, setRepos] = useState([])
  
  async function getRepos() {
    const res = await Axios.get("https://api.github.com/users/zaratejavier/repos?sort=created")

    console.log(res)
    setRepos(res.data)
  }

  useEffect(() =>{
    console.log("useEffect called yo")
    getRepos()
  },[])

  return (
    <AppContainer>
    {/* <Button onClick={this.getRepos}>Get Repos</Button> */}
    <HeaderText fSize="large">
      My Portfolio
    </HeaderText>
    <Segment as={Transparent}>
      <HeaderText>My Projects</HeaderText>
      <Grid>
        <Grid.Row>
          { repos.map( r =>
              <Grid.Column key={r.id} width={4}>
                <StyledCard>
                  <Card.Content>
                    <Card.Header>
                      <Truncated>
                      { r.full_name }
                      </Truncated>
                    </Card.Header>
                  <Card.Meta>
                   { r.description }
                  </Card.Meta>
                  <Card.Meta>
                    {r.stargazers_count > 0 && <Star>
                        <Icon name = "star"/>
                      </Star>}
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <ButtonLink href={r.html_url} target="_blank" rel="noopener norefferer">
                    View
                  </ButtonLink>
                </Card.Content>
                              </StyledCard>
                            </Grid.Column>
                          )
        }
      </Grid.Row>
    </Grid>
  </Segment>
  <Segment as={Transparent}>
    <HeaderText>Contact</HeaderText>
  </Segment>
</AppContainer>
  );
}

const ButtonLink = styled.a`
  float: right;
  padding: 10px 30px;
  boarder-radius: 10px;
  color: ${(props) => props.theme.fg } !important;
  background-color: ${(props) => props.theme.bg } !important;

  &:hover{
    color: ${(props) => props.theme.bg } !important;
  background-color: ${(props) => props.theme.fg } !important;
  transition: background-color 0.2s;
  transition: color 0.2s ease;
  }
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;
const Star = styled.div`
  display: inline-block;
  color: yellow;
  text-shadow: 1px 1px 1px black;
  animation: ${rotate360} 2s linear infinite;
`;

const StyledCard = styled(Card)`
  height: 160px;
  margin-top: 20px !important;
`
const Truncated = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
`


const AppContainer = styled.div`
  background: linear-gradient(to bottom right, #fe8c00, #f83600);
  min-height: 100vh;
  padding: 20px;
`;

const Transparent = styled.div`
  background: transparent !important;
`;

export default App;
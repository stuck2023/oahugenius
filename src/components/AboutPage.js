import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        I'm a local entrepreneur, born and raised on the island of Oahu. As a business strategy consultant, I am the...
<br /> <br/>
Project based, hands-on, no-nonsense, get results guy, that YOUR business has been looking for!



I've had the pleasure to work with many local businesses, of all sizes, across various industries, and have been blessed with experiencing the "behind the scenes" knowledge of how different things work. 
To know more about me check the "My Skills" page.


{/* Here are some industries that I have worked with: */}
<br/> <br/>
{/* Some of the industries that I have worked with: <br></br>
Transportation &emsp;&emsp; Tours and Activities &emsp;&emsp; Hotel/Hospitality
<br></br>
Airlines &emsp;&emsp; Entertainment &emsp;&emsp; Shopping Centres and Retail
<br></br>
Food & Beverage &emsp;&emsp; Technology &emsp;&emsp; Startups
<br></br>
Recruitments & Training &emsp;&emsp; Advertising &emsp;&emsp; Non-Profit Human Services */}

        </Main>


        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage

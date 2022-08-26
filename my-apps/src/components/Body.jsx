

import { Button, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, Text } from '@chakra-ui/react'

import "./Body.css"
import FadeEx, { FadeEx1, FadeEx2, FadeEx3, FadeEx4, FadeEx5, FadeEx6 } from './ButtonImg';



export const Body=()=>{
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

    return(
       
        <div style={{background: "black",height:"94rem",backgroundColor:"#421983"}}>
           {/* <div style={{background: "#421983",height:"34rem",backgroundColor:"purple"}}></div> */}
           <div className='imgbackground' style={{}}></div>
          <div style={{background: "#421983",margin:"auto",width:"50%",border:"1px solid red",color:"white",textAlign:"center"}}>
          <Text fontSize='6xl'style={{color:"white",fontFamily:"Arial,Helvetica,sans-serif;",marginTop:"-15rem"}}>Get measurable results </Text>
          <Text fontSize='6xl'style={{color:"white",fontFamily:"Arial,Helvetica,sans-serif;",}}> from online marketing</Text>
            <br/>
           <Text fontSize='2xl' style={{fontFamily:"Inter,sans-serif;"}}>Do SEO, content marketing, competitor research</Text>
           <Text fontSize='2xl' style={{fontFamily:"Inter,sans-serif;"}}>PPC and social media marketing from just one platform.</Text>

           <div>

                        <br/>
                        <br/>
                    <Stack spacing={4}>
                        <InputGroup >
                        
                            <Input style={{height:"4rem",width:"30rem",backgroundColor:"white",color:"gray",fontSize:"20px"}}  placeholder='Enter domain,keyword or URL' />
                            <h1 style={{backgroundColor:"gray",color:"gray"}}>|</h1>
                            <InputRightAddon style={{height:"4rem",color:"gray"}} children='   USA' />
                            {"     "}
                            <Button colorScheme='#FF622D' variant='solid' size="xl" style={{backgroundColor:"#FF622D",color:"white",width:"14rem",marginLeft:"20px",border:"1px solid #FF622D",fontFamily:"sans-serif",fontSize:"18px"}}>Start Now</Button>
                        </InputGroup>
                    </Stack>

           </div>
          
         


            
          </div> 

          <div className='imgbackground1'></div>
          <div className='sponser'>
          <img src={require("../Image/sponser.png")} alt="" />
          </div>

          <div className='see' >
          <Text fontSize='5xl'style={{color:"white",fontFamily:"Arial,Helvetica,sans-serif;",}}>See what's inside </Text>
          </div>
          <div className="imgbackground3"></div>

          <div className='box'>
            <div className='boxImg'>
              <div >
                <FadeEx1/>
              </div>
              <div>
              <FadeEx2/>
              </div>
              <div>
              <FadeEx3/>
              </div>
              <div>
              <FadeEx4/>
              </div>
              <div>
              <FadeEx5/>
              </div>
              <div>
              <FadeEx6/>
              </div>
             
            </div>
          </div>
          
           
        </div>
       
    )
}
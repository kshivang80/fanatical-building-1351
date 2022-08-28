import {Box, Button, Image,Stack,Text} from "@chakra-ui/react"
import { FaMailBulk,FaTwitter} from 'react-icons/fa';
import "./WhiteBody2.css"

function WhiteBody2(){

    return(
        <div className="big" style={{height:"auto",marginTop:"140px",}}>


     <div className="person" style={{ height:"800px",display:"flex",marginTop:"0px"}}>
        <div style={{ width:"50%",height:"800px"}}>
           
            <Box height="100%"  marginLeft="20%" >
                <Image src="https://cdn.semrush.com/static/index/Oleg_Shchegolev_in_hat.0ac9c95bbf09.webp" alt='Dan Abramov'  height="100%" width="100%"/>
            </Box>
        </div>
        <div style={{ width:"50%",height:"750px"}}>
        <Box marginLeft="60px">
            <Text fontSize='5xl' marginTop="140px">Our CEO will eat his hat</Text>
            <Text fontSize='2xl' marginTop="20px" fontFamily="sans-serif">... if you find another tool that lets you do all these things</Text>
            <Text fontSize='18px' marginTop="40px" fontFamily="sans-serif" >Access over 22 billion keywords for 130 countries</Text>
            <Text fontSize='18px' marginTop="10px" fontFamily="sans-serif" >Run in-depth website audit based on 130+ checks</Text>
            <Text fontSize='18px' marginTop="10px" fontFamily="sans-serif" >Get recommendations to improve your content to increase search rankings</Text>
            <Text fontSize='18px' marginTop="10px" fontFamily="sans-serif" >Track and analyze competitor websites and marketing strategies</Text>
            <Text fontSize='18px' marginTop="10px" fontFamily="sans-serif" >Create and track your PPC campaigns</Text>
            <Text fontSize='18px' marginTop="10px" fontFamily="sans-serif" >Draft, schedule and post content on social</Text>
            <Text fontSize='18px' marginTop="10px" fontFamily="sans-serif" >Create and schedule white-labeled or branded reports</Text>
        </Box>
        <Button
                    marginTop="40px"
                    marginLeft={"60px"}
                    height='53px'
                    width='360px'
                    border='2px'
                    borderColor="#FF622D"
                    backgroundColor={"#FF622D"}
                    fontSize="18px"
                    color={"white"}
                    fontFamily="sans-serif"
                    colorScheme='#FF622D'
                    >Discover all Semrush features</Button>
        </div>
     </div>

     <div style={{textAlign:"center",width:"90%"}}>
          <Text fontSize='5xl' marginTop="140px">Here’s why marketers</Text>
          <Image  marginLeft="67%" width="65px" marginTop="-60px" src="https://www.semrush.com/static/images/accent-heart.e8d7e3e1289495e14365f7b64d55751c.svg"/>
          <Text fontSize='5xl'  marginLeft="58%" marginTop="-69px" >Semrush</Text>

    </div>

    <div className="NewButton">
            <Button colorScheme=''>Marketing Suit</Button>
            <Button colorScheme=''>SEO</Button>
            <Button colorScheme=''>Content marketing</Button>
            <Button colorScheme=''>Market research</Button>
            <Button colorScheme=''>Advertising</Button>
            <Button colorScheme=''>Social media</Button>
   

    </div>

   <div className="BlueBox">
    <Image style={{width:"100%",height:"100%" ,borderRadius:"20px"}} src={require("../Image/13.png")}/>

         
   </div>
<div className="purpleBox1"></div>
   <div className="purpleBox">

   <Text className="t1" fontSize='6xl'      font-family= "Factor A,Arial,Helvetica,sans-serif">Get started with Semrush today</Text>
   <Text fontSize='3xl' marginTop="10px"  fontFamily="sans-serif">Get 7 days of full access to all toolkits. Cancel anytime.</Text>
   <Button
                    marginTop="40px"
                    marginLeft={"60px"}
                    height='54px'
                    width='390px'
                    border='2px'
                    borderColor="#FF622D"
                    backgroundColor={"#FF622D"}
                    fontSize="19px"
                    color={"white"}
                    fontFamily="revert-layer"
                    fontWeight=""
                    colorScheme='#FF622D'
                    >Start your free trial</Button>
       

   </div>

   <div className="blackDiv">
        <Stack >
                    <Button 
                    marginTop="60px"
                    fontSize="18px"
                    marginLeft="10%"
                    leftIcon={<FaMailBulk />}
                     colorScheme='#111317'
                      variant='solid' 
                      width="13%" 
                      height="50px"
                     border="1px solid gray"
                     >
                        Email
                    </Button>
        
            </Stack>
            <div>  <Text fontSize='1xl' marginTop="-35px" marginLeft="26%"  fontFamily="sans-serif" color="#898D9A">USA, 800 Boylston Street, Suite 2475, Boston, MA 02199</Text></div>

            <Button
                    marginTop="-40px"
                    marginLeft={"65%"}
                    height='54px'
                    width='390px'
                    border='2px'
                    borderColor=' #00BC98'
                    backgroundColor={' #00BC98'}
                    fontSize="19px"
                    color={"white"}
                    fontFamily="revert-layer"
                    fontWeight=""
                    colorScheme=' #00BC98'
                    >Get started with Semrush
            </Button>

            <div>  <Text fontSize='1xl' color="#898D9A" marginTop="-2px" marginLeft="71%"  fontFamily="sans-serif"   text-decoration='underline'>or see our plans & priceing</Text></div>



            

   </div>

    <div style={{ backgroundColor:' #111317'}}>
       <div className="Footer">
            <div>
                <h4>SEMRUSH</h4>
                <p>Features</p>
                <p>Pricing</p>
                <p>Success Stories</p>
                <p>Stats and Facts</p>
                <p>Data Studies</p>
                <p>News</p>
                <p>Custom Report</p>
                
                
            </div>
            <div>
                <h4>HELP</h4>
                <p>Knowledge Base</p>
                <p>Academy</p>
                <p>Semrush API</p>
                <h4>COMMUNITY</h4>
                <p>Semrush Blog</p>
                <p>Webinars</p>
                <p>Events</p>

            </div>
            <div>
                <h4>MORE TOOLS</h4>
                <p>Analytics Reports</p>
                <p>Projects</p>
                <p>Content Marketplace</p>
                <p>Affiliate Program</p>
                <p>SEOquake</p>
                <p>Sensor</p>
                <p>Tools for Amazon</p>
                <p>Prowly</p>
                <p>App Center</p>
              

            </div>
            <div>
                <h4>COMPANY</h4>
                <p>About Us</p>
                <p>Newsroom</p>
                <p>Partners</p>
                <p>Legal Info</p>
                <p>Privacy Policy</p>
                <p>Cookie Settings</p>
                <p>Security Info</p>
                <p>For Investors</p>
                <p>Contact Us</p>

            </div>
            <div>
                <h4>FOLLOW US</h4>
                <p >Twitter</p>
                <p>Facebook</p>
                <p>LinkedIn</p>
                <p>Instagram</p>
                <p> YouTube</p>
                <p>Pinterest</p>
              

            </div>
             <div>

                <h4>LANGUAGE</h4>
                <p >English</p>
                <p>Español</p>
                <p>Deutsch</p>
                <p>Français</p>
                <p> Italiano</p>
                <p>Pinterest</p>
                <p>Português (Brasil)</p>
                <p>Tiếng Việt</p>
                <p>Türkçe</p>
                <p>中文</p>
                <p>日本語</p>
                <p>한국어</p>


            </div>
        </div>
    </div>


    <div className="Lastbox">

        <div className="Lastlogo">
         <Image src="https://cdn.semrush.com/__static__/semrush-logo-700.jpg" alt=""  />
         SEMRUSH
        </div>
        <div>  <Text fontSize='1xl' color="#898D9A" marginTop="-30px" marginLeft="29%"  fontFamily="sans-serif"   text-decoration='underline'>© 2008 - 2022 Semrush. All rights reserved.</Text></div>

   
         

    </div>
   












        </div>
    )
   
}

export default WhiteBody2
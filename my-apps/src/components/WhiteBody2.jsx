import {Box, Button, Image,Text} from "@chakra-ui/react"

function WhiteBody2(){

    return(
        <div className="big" style={{border:"2px solid black",height:"1000px"}}>


     <div className="person" style={{ border:"1px solid orange",height:"800px",display:"flex",marginTop:"130px"}}>
        <div style={{ border:"1px solid blue",width:"50%",height:"800px"}}>
           
            <Box height="100%" border="1px solid pink" marginLeft="20%" >
                <Image src="https://cdn.semrush.com/static/index/Oleg_Shchegolev_in_hat.0ac9c95bbf09.webp" alt='Dan Abramov' border="1px solid pink" height="100%" width="100%"/>
            </Box>
        </div>
        <div style={{ border:"1px solid blue",width:"50%",height:"750px"}}>
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













        </div>
    )
   
}

export default WhiteBody2
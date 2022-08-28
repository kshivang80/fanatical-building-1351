


import { Button, Image } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import "./WhiteBody.css"
import { Grid, GridItem } from '@chakra-ui/react'


function WhiteBody(){

    return(
        <div className="box1">
            {/* <div className="imgbackground3"></div> */}
            <div className="keyword">
                <Text fontSize='5xl'style={{color:"#171a22;",fontFamily:"Arial,Helvetica,sans-serif;",}}>“Semrush is like a keyword research tool,</Text>
                <Text fontSize='5xl'style={{color:"#171a22;",fontFamily:"Arial,Helvetica,sans-serif;",}}>Google Trends, Moz, Hootsuite and</Text>
                <Text fontSize='5xl'style={{color:"#171a22;",fontFamily:"Arial,Helvetica,sans-serif;",}}>SimilarWeb in one.”</Text>

            </div>


            <div style={{marginLeft:"40%",marginTop:"2%",border:"1px solid red",width:"27%",justifyItems:"center",textAlign:"center",height:'380px'}}>
            <Image
                    marginLeft={"32%"}
                    borderRadius='full'
                    boxSize='110px'
                    src='https://cdn.semrush.com/static/index/testimonials/Mario_Leon_Rojas.6062ad72d0c3.webp'
                    alt='Dan Abramov'
                    />
               <br/>
                <Text fontSize='2xl'style={{fontWeight:"bold"}}>Mario León Rojas</Text>
                <Text fontSize='1xl' style={{fontFamily:"sans-serif",fontSize:"18px",color:"#171A22",lineHeight:"170%"}}>Performance Marketing Specialist, Banco del Sol</Text>
                <Text fontSize='1xl' style={{fontFamily:"Ubuntu,sans-serif",color:"gray"}}>Source: Semrush G2 reviews</Text>
            </div>

            <div style={{textAlign:"center",border:"1px solid red",width:"85%",marginLeft:"12%"}}>
                <Text fontSize='5xl' style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Award-winning tools trusted</Text>
                <Text fontSize='5xl' style={{fontFamily:"sans-serif",fontWeight:"bold"}}>by the world’s leading companies</Text>
            </div>

            <div style={{textAlign:"center",border:"1px solid red",width:"100%",height:"300px",marginTop:"30px",cursor:"pointer"}}>
              <Image src={require("../Image/heart.png")} style={{width:"100%",height:"100%"}}/>
            </div>

            <div style={{ border:"1px solid #FF622D",display:"flex",justifyContent:"space-between",height:"400px",marginTop:"220px"}}>
                <div style={{ border:"1px solid black",width:"50%"}}>
                <Text fontSize='5xl' style={{marginTop:"10px",marginLeft:"15%",fontFamily:"sans-serif",fontWeight:"bold"}}>More data. More insights</Text>
                <Text fontSize='2xl' style={{marginTop:"30px",marginLeft:"15%",fontFamily:"sans-serif",}}>With the size of our SEO databases and speed of our</Text>
                <Text fontSize='2xl' style={{marginLeft:"15%",fontFamily:"sans-serif",}}>backlink crawler, imagine what you can achieve if you have</Text>
                <Text fontSize='2xl' style={{marginLeft:"15%",fontFamily:"sans-serif",}}>the insights your competitors don’t.</Text>
                <Button
                    marginTop="40px"
                    marginLeft={"15%"}
                    height='58px'
                    width='230px'
                    border='2px'
                    borderColor="#FF622D"
                    backgroundColor={"#FF622D"}
                    fontSize="25px"
                    color={"white"}
                    colorScheme='#FF622D'
                    >Learn More</Button>
                </div>
                <div style={{ border:"1px solid blue",width:"50%"}} >
                    <div className="imgbackground4"  style={{ border:"3px solid red"}}></div>
                    <div className='GridContainer' >
                        <div > 
                            <Text fontSize='5xl' marginTop="18px">22B</Text>
                            <Text fontSize='2xl' fontFamily="sans-serif" >keywords</Text>
                        </div>
                        <div > 
                            <Text fontSize='5xl' marginTop="18px">43T</Text>
                            <Text fontSize='2xl'fontFamily="sans-serif" >backlinks</Text>
                        </div>
                        <div > 
                            <Text fontSize='5xl' marginTop="18px">808M</Text>
                            <Text fontSize='2xl' fontFamily="sans-serif">domain profiles</Text>
                        </div>
                        <div > 
                            <Text fontSize='5xl' marginTop="18px">140</Text>
                            <Text fontSize='2xl' fontFamily="sans-serif" >geo database</Text>
                        </div>
                   </div>

                </div>
                

            </div>

            {/* <div className='GridContainer' >
                    <div style={{ border: "1px solid red;"}}>hhhh</div>
                    <div style={{ border: "1px solid red;"}}>jjjj</div>
                    <div style={{ border: "1px solid red;"}}>.....</div>
                    <div style={{ border: "1px solid red;"}}>,,,,,,</div>
             </div> */}






        </div>
    )
}

export default WhiteBody
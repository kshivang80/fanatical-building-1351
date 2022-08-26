import { border, Box, Button, Fade, Image, useDisclosure } from "@chakra-ui/react"




function FadeEx1() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle}  marginLeft="5%" height="auto" marginTop={"10px"} borderRadius="20px" backgroundColor={"white"}><Image style={{width:"100%",}} src={require("../Image/1.png")}/>
        <br/>
       {/* <div style={{marginTop:"80px",marginLeft:"-40px"}} ></div> */}
        </Button>
        <Fade in={isOpen}>
            <div style={{marginTop:"2%",height:"730px",width:"450%",marginLeft:"2%"}}>
            <Box
            marginTop="200px"
            color='white'
            mt='4'
            bg='white'
            rounded='xl'
            height={"300px"}
            width="auto"
          >
           <Image src={require("../Image/7.png")} style={{borderRadius:"30px" ,}}   />
           
          </Box>


            </div>
         
        </Fade>
      </>
    )
  }

  function FadeEx2() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle} width="180px"  height="140px" marginLeft={"-15%"} marginTop={"10px"} borderRadius="20px" backgroundColor={"white"}><Image style={{width:"100%",height:"100%"}} src={require("../Image/2.png")}/>
        <br/>
       {/* <div style={{marginTop:"80px",marginLeft:"-40px"}} ></div> */}
        </Button>
        <Fade in={isOpen}>
        <div style={{marginTop:"22%",height:"740px",width:"500%",marginLeft:"-190px"}}>
            <Box
            // marginTop="200px"
            color='white'
            mt='4'
            bg='white'
            rounded='xl'
            // height={"300px"}
            // width="auto"
          >
           <Image src={require("../Image/8.png")} style={{borderRadius:"30px",}}   />
           
          </Box>


            </div>
        </Fade>
      </>
    )
  }

  function FadeEx3() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle} width="180px" marginLeft={"-15%"}  height="140px" marginTop={"10px"} borderRadius="20px" backgroundColor={"white"}><Image style={{width:"100%",height:"100%"}} src={require("../Image/3.png")}/>
        <br/>
       {/* <div style={{marginTop:"80px",marginLeft:"-40px"}} ></div> */}
        </Button>
        <Fade in={isOpen}>
        <div style={{marginTop:"32%",height:"800px",width:"600%",marginLeft:"-390px"}}>
            <Box
            marginTop="200px"
            color='white'
            mt='4'
            bg='white'
            rounded='xl'
            height={"300px"}
            width="auto"
          >
           <Image src={require("../Image/9.png")} style={{width:"200%",borderRadius:"30px",}}   />
           
          </Box>


            </div>
        </Fade>
      </>
    )
  }
  function FadeEx4() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle} width="180px" marginLeft={"-13%"}  height="140px" marginTop={"10px"} borderRadius="20px" backgroundColor={"white"}><Image style={{width:"100%",height:"100%"}} src={require("../Image/4.png")}/>
        <br/>
       {/* <div style={{marginTop:"80px",marginLeft:"-40px"}} ></div> */}
        </Button>
        <Fade in={isOpen}>
        <div style={{marginTop:"32%",height:"600px",width:"610%",marginLeft:"-590px"}}>
            <Box
            marginTop="200px"
            color='white'
            mt='4'
            bg='white'
            rounded='xl'
            height={"300px"}
            width="auto"
          >
           <Image src={require("../Image/10.png")} style={{width:"200%",borderRadius:"30px",}}   />
           
          </Box>


            </div>
        </Fade>
      </>
    )
  }
  function FadeEx5() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle} width="180px" marginLeft={"-12%"}  height="140px" marginTop={"10px"} borderRadius="20px" backgroundColor={"white"}><Image style={{width:"100%",height:"100%"}} src={require("../Image/5.png")}/>
        <br/>
       {/* <div style={{marginTop:"80px",marginLeft:"-40px"}} ></div> */}
        </Button>
        <Fade in={isOpen}>
        <div style={{marginTop:"42%",height:"600px",width:"600%",marginLeft:"-750px"}}>
            <Box
            marginTop="200px"
            color='white'
            mt='4'
            bg='white'
            rounded='xl'
            height={"300px"}
            width="auto"
          >
           <Image src={require("../Image/11.png")} style={{width:"200%",borderRadius:"30px",}}   />
           
          </Box>


            </div>
        </Fade>
      </>
    )
  }
  function FadeEx6() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle} width="180px" marginLeft={"-5%"}  height="140px" marginTop={"10px"} borderRadius="20px" backgroundColor={"white"}><Image style={{width:"100%",height:"100%"}} src={require("../Image/6.png")}/>
        <br/>
       {/* <div style={{marginTop:"80px",marginLeft:"-40px"}} ></div> */}
        </Button>
        <Fade in={isOpen}>
        <div style={{marginTop:"42%",height:"600px",width:"600%",marginLeft:"-950px"}}>
            <Box
            marginTop="200px"
            color='white'
            mt='4'
            bg='white'
            rounded='xl'
            height={"300px"}
            width="auto"
          >
           <Image src={require("../Image/12.png")} style={{width:"200%",borderRadius:"30px",}}   />
           
          </Box>


            </div>
        </Fade>
      </>
    )
  }
  export { FadeEx1, FadeEx2, FadeEx3, FadeEx4, FadeEx5, FadeEx6}


    {/* <Image src={require("../Image/1.png")} alt=''/>
              <Image src={require("../Image/2.png")} alt=''/>
              <Image src={require("../Image/3.png")} alt=''/>
              <Image src={require("../Image/4.png")} alt=''/>
              <Image src={require("../Image/5.png")} alt=''/>
              <Image src={require("../Image/6.png")} alt=''/> */}
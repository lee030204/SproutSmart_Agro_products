import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

export default function Faq() {
  return (
    <div style={{backgroundColor:"aliceblue"}}>
        <br />
    <div style={{marginTop:"20px" , marginBottom:"20px",width:"1200px",marginLeft:"100px"}}  >

        <Typography variant='h4' style={{marginLeft:"420px",color:"green"}}>Frequently Asked Questions</Typography>
        <br />
      <Accordion sx={{marginTop:"30px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:"20px",height:"70px",paddingTop:"16px"}}>   How To Cancel The Order That I Placed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* <br /> */}
            {/* <br /> */}
             <Button style={{backgroundColor:"",color:"black"}}>
             SproutSmart.com's Return and Exchange Policy offers no return of goods once delivered. However if you still want to do it you can call us on our missed call number: 1800 3000 2434 or whatsApp us on (+91) 80 50 797979 only before the dispatch.</Button>
             <br />
            <br />
             <Button style={{backgroundColor:"orange"}}>Contact: 6380087037</Button>
            <br />
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:"20px",height:"70px",paddingTop:"16px"}}>  Why There Is A Difference In Selling Price On SproutSmart And Local Shops?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There is no comparison between SproutSmart and Local Shops, at SproutSmart we believe in offering 100% genuine and high quality agri inputs at better prices delivered right at your doorstep. There might or might not be any difference in the selling prices but we make sure we are providing genuine high quality products through our platform.
          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:"20px",height:"70px",paddingTop:"16px"}}>
          Does SproutSmart Deliver Products Outside The Country?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Does SproutSmart Deliver Products Outside The Country?
No, SproutSmart operates only in India we dont deliver products outside the country.
          <br />
          <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:"20px",height:"70px",paddingTop:"16px"}}>What is this one time Onboarding fees? Do I have to pay for it while registering?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, depending on the city you reside in. In select cities, orders are delivered in as less as 1 hour. Please note that the express deliveries may be based on various other factors such as medicine availability, availability of the staff, etc.
          </Typography>
          <br />
          {/* <br /> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:"20px",height:"70px",paddingTop:"16px"}}> Can I Modify My Order Shipping Address To Which It Will Be Delivered?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can modify the shipping address only within1-2 hrs of placing the order because once dispatched it will be difficult for us to change the address. You can also call us on 1800 3000 2434 or whatsApp us on (+91) 80 50 797979 and confirm if your order has already been discpatched because if not than we definitely change it.
          <br />
            <br />
             <Button style={{backgroundColor:"orange"}}>SEND A MAIL</Button>
            <br />
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
     {/* <br /> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:"20px",height:"70px",paddingTop:"16px"}}>  When Will I Receive My Refund For The Order I Cancelled?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a 7 to 10 Working days.
          <br />
          <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:"20px",height:"70px",paddingTop:"16px"}}>  How Do I Login On SproutSmart? I Used To Login With My Phone Number, Which I Don't Have With Me Now?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you dont have the same number, you will have to create a new account through your mobile number. If you have already logged in, enter your mobile number and OTP, then choose your method of login under 'Already have an account?'. Once you have entered the details, you will be logged in to your account. Next time onwards, you can use your mobile and OTP for easy login.
        <br />
          <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight:"bolder",fontSize:"20px",height:"70px",paddingTop:"16px"}}>Terms of Use</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          These terms of use (the "Terms of Use") govern your use of our website www.sproutsmart.com (the "Website") and our "SproutSmart" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Services"). Please read these Terms of Use carefully before you download, install, or use the Services. If you do not agree to these Terms of Use, you may not install, download, or use the Services. By installing, downloading, or using the Services, you signify your acceptance of the Terms of Use and Privacy Policy (being hereby incorporated by reference herein), which takes effect on the date on which you download, install, or use the Services, and create a legally binding arrangement to abide by the same.
          <br />
          <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <br />
    </div>
    </div>
    );
}
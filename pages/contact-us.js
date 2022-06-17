/**
 * @file contact-us.js
 */

// Import dependencies
import { React, useState } from "react";
import Head from "next/head";
import { ThemeProvider, TextField, Typography, Button } from "@mui/material";
import Navigation from "../components/navigation";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import {
  formContainer,
  headingContainer,
} from "../styles/ContactUs.module.scss";

// Import components
import Hero from "../components/hero";

// Import assets
import { expertsBackground } from "../styles/Hero.module.scss";
import Footer from "../components/footer";

export default function ContactUs() {
  const [email, setValue] = useState("Controlled");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    // validate the email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleSubmit = (event) => {
    console.log("submitted");
    setValue(event.target.value);
  };

  return (
    <ThemeProvider theme={epiTheme}>
      <Head>
        <title>Contact Us | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`Get in touch with us via our contact form.`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero
        isSubhero={true}
        heroText={"Contact Us"}
        heroImage={expertsBackground}
        button={false}
      />
      <div className={formContainer}>
        <div className={headingContainer}>
          <Typography variant={`h2`}>Let&apos;s get in touch</Typography>
          <Typography variant={`body1`}>
            Use the form below to send us a message. Alternatively, you can send
            an email to&nbsp;
            <a href="mailto:admin@epidemiologymethods.com">
              admin@epidemiologymethods.com
            </a>
            .
          </Typography>
        </div>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Invalid email address" : false}
          label="Email"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Subject" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button
          onClick={handleSubmit}
          variant={`contained`}
          color={`secondary`}
        >
          Submit
        </Button>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

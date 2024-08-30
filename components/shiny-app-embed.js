import { Container } from "@mui/material";

const ShinyAppEmbed = () => {
  return (
    <Container maxWidth='xl'>
      <div
        style={{
          width: "100%",
          height: "75dvh",
          margin: "10rem 0",
          overflow: "visible",
        }}
      >
        <iframe
          src='https://jianheng-li-apps.shinyapps.io/DM1-V1/_w_d78ea433/'
          style={{ border: "none", width: "100%", height: "100%" }}
          title='Shiny App'
          allowFullScreen
        />
      </div>
    </Container>
  );
};

export default ShinyAppEmbed;

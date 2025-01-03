import { Container } from "@mui/material";

const ShinyAppEmbed = (props) => {
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
          src={props.appLink}
          style={{ border: "none", width: "100%", height: "100%" }}
          title='Shiny App'
          allowFullScreen
        />
      </div>
    </Container>
  );
};

export default ShinyAppEmbed;

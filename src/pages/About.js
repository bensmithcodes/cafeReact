import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import "../App.css";

const About = () => {
  return (
    <Layout>
      <Box className="container" sx={{ backgroundColor: "beige" }}>
        <Box
          className="container"
          sx={{
            my: 15,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
              my: 2,
            },
            "@media (max-width:600px)": {
              mt: 0,
              "& h4": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h4">Welcome To My Restaurant</Typography>

          <Typography variant="body1">
            Welcome to Brew Haven, the ultimate destination for coffee enthusiasts and those in search of a cozy and inviting atmosphere. Located in the heart of Oklahoma, this coffee shop goes beyond serving exceptional coffee. Step inside and discover a world of culinary delights that will satisfy both your cravings and your taste buds.
          </Typography>

          <Typography variant="body1">
            At Brew Haven, you'll find a delightful selection of pastries, sandwiches, and light bites that perfectly complement their signature coffee offerings. The skilled bakers start their day early, preparing a mouthwatering array of pastries baked fresh each morning. Indulge in flaky croissants that practically melt in your mouth or treat yourself to decadent muffins with flavors that range from classic to innovative. The heavenly aromas wafting through the shop will entice you from the moment you walk in.
          </Typography>

          <Typography variant="body1">
            For those seeking a heartier treat, Brew Haven's artisan sandwiches are a must-try. Crafted with locally sourced ingredients, these sandwiches are a testament to the shop's commitment to quality and sustainability. Sink your teeth into a delicious combination of flavors, expertly layered between fresh bread. And if you're looking for a healthy and nourishing option, their homemade granola bowls are a delightful choice. Packed with nutritious goodness, these bowls will provide you with the energy you need for a busy day.
          </Typography>

          <Typography variant="body1">
            Beyond its delectable offerings, Brew Haven is a place where connections are made and friendships are formed. The shop embodies the spirit of community, creating an environment where people come together to enjoy great coffee and engaging conversations. The comfortable seating areas and cozy nooks invite you to unwind and savor the moment. Whether you're a remote worker, a student, or simply in need of a tranquil space, Brew Haven provides the perfect setting. And with free Wi-Fi available, you can stay connected while enjoying the warm ambiance.
          </Typography>

          <Typography variant="body1">
            To further enhance the sense of community and creativity, Brew Haven hosts regular events that bring people together. Open mic nights provide a platform for local talent to showcase their skills, while poetry readings inspire and captivate the audience. Live music performances add a touch of rhythm and melody to the atmosphere, creating a harmonious backdrop to your visit. These events foster a vibrant and welcoming atmosphere that sets Brew Haven apart from other coffee shops.
          </Typography>

          <Typography variant="body1">
            In summary, Brew Haven is more than just a coffee shop; it's a community hub that invites you to immerse yourself in a world of rich flavors, warm ambiance, and genuine hospitality. Whether you're a dedicated coffee connoisseur or simply seeking a welcoming space to relax, Brew Haven welcomes you with open arms. Come and experience the true essence of this Oklahoma gem.
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;

import ReactDOM from "react-dom";
import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Files1 from "../PDFs";
import "../../../course-material/pdf1.pdf";
import "./UserDashboard.scss";
import { useState } from "react";
import "./Assessment";
import { Link } from "react-router-dom";

// Plugins

// Import styles

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function UserDashboardComponent() {
  const [progressBarValue, setProgressBarValue] = useState(0);
  return (
    <div>
      <Card
        sx={{
          minWidth: 275,
          marginLeft: "33%",
          marginRight: "2%",
          marginTop: "5%",
        }}
      >
        <CardContent>
          <h3>Courses</h3>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>Android Development with Java</p>
            </AccordionSummary>

            <AccordionDetails>
              <Typography></Typography>
              <BorderLinearProgress
                variant="determinate"
                value={progressBarValue}
              />
            </AccordionDetails>

            <embed
              width="191"
              height="207"
              name="plugin"
              src="http://www.africau.edu/images/default/sample.pdf"
              type="application/pdf"
            ></embed>
            <br></br>
            <button onClick={() => setProgressBarValue(progressBarValue + 10)}>
              {" "}
              <a
                href="http://www.africau.edu/images/default/sample.pdf"
                target="_blank"
              >
                Open
              </a>
              .
            </button>
            <br></br>
            <br></br>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/y881t8ilMyc"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <br></br>
            <br></br>
            <button onClick={() => setProgressBarValue(progressBarValue + 10)}>
              mark as done
            </button>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p>Machine Learning Associate</p>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
              <BorderLinearProgress variant="determinate" value={50} />
            </AccordionDetails>
            <embed
              width="191"
              height="207"
              name="plugin"
              src="http://www.africau.edu/images/default/sample.pdf"
              type="application/pdf"
            ></embed>
            <br></br>
            <button onClick={() => setProgressBarValue(progressBarValue + 10)}>
              {" "}
              <a
                href="http://www.africau.edu/images/default/sample.pdf"
                target="_blank"
              >
                Open
              </a>
              .
            </button>
            <br></br>
            <br></br>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/y881t8ilMyc"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <br></br>
            <br></br>
            <button onClick={() => setProgressBarValue(progressBarValue + 10)}>
              mark as done
            </button>
            <br></br>
            <br></br>
            <button size="small">
              <Link to="/assessment">Take assessment</Link>
            </button>
          </Accordion>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card
        sx={{
          minWidth: 275,
          marginLeft: "33%",
          marginRight: "2%",
          marginTop: "5%",
        }}
      >
        <CardContent>
          <h3>Certificates</h3>
          <Stack spacing={2}>
            <Item>
              Cyber Security Professional
              <br />
              <div></div>
            </Item>
            <Item> Blockchain Expert</Item>
            <Item> Machine Learning Associate</Item>
          </Stack>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

import { Container, makeStyles, Modal } from "@material-ui/core";
import close from "../images/icon-close.svg";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 300,
    height: 350,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    outline: "none",
    borderRadius: 15,
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    },
  },
  rulesContainer: {
    width: "100%",
    height: "100%",
  },
  rulesTop: {
    width: "100%",
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
  },
  rulesBody: {
    width: "100%",
    height: "60%",
  },
  rulesBodyimg: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
}));

function Rules({ open, setOpen, img }) {
  const classes = useStyles();

  return (
    <>
      <Modal open={open}>
        <Container className={classes.container}>
          <div className={classes.rulesContainer}>
            <div className={classes.rulesTop}>
              <h1 style={{ color: "black" }}>RULES</h1>
              <img onClick={() => setOpen(false)} src={close} alt='' />
            </div>
            <div className={classes.rulesBody}>
              <img className={classes.rulesBodyimg} src={img} alt='' />
            </div>
          </div>
        </Container>
      </Modal>
    </>
  );
}

export default Rules;

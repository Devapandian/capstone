import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./profile.css";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    width: 1500,
    resize: "horizontal",
    overflow: "auto",
    display: "flex",
    marginTop: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  cardOverflow: {
    flex: "0 0 200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: `0 ${theme.spacing(2)}px`,
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  cardContent: {
    gap: theme.spacing(1.5),
    flexDirection: "column",
    alignItems: "center",
    width: 500,
  },
  image: {
    width: 320,
    heigth: 2900,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 30,
  },

  button: {
    "--variant-borderWidth": "2px",
    borderRadius: 40,
    borderColor: theme.palette.primary.main,
    margin: "auto",
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img
        src="data:image/jpeg;base64,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"
        alt=""
        className={classes.image}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body15" component="p" gutterBottom>
          <h1> Danny McLoan</h1>
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Senior Journalist
        </Typography>
        <div
          className="justify-content-start rounded-3 p-4 mb-4"
          style={{ backgroundColor: "#efefef" }}
        >
          <div>
            <p className="small text-muted mb-1">Articles</p>
            <p className="mb-0">41</p>
          </div>
          <div className="px-3">
            <p className="small text-muted mb-1">Followers</p>
            <p className="mb-0">976</p>
          </div>
          <div>
            <p className="small text-muted mb-1">Rating</p>
            <p className="mb-0">8.5</p>
          </div>
        </div>
        <Button variant="outlined" color="primary" className={classes.button}>
          Chat
        </Button>
        &nbsp;
        <Button variant="outlined" color="primary" className={classes.button}>
          Follow
        </Button>
      </CardContent>
    </Card>
  );
}

export default Profile;

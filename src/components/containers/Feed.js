import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsetDividers from "../components/InsetDividers";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "90%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({
  title,
  description,
  sourceUrl,
  sourceTitle,
  createdAt,
  keywords,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  /**
 * 
 * 
 * source.title to display the source title.

source.url to display the source image 

title for the news title.

source.created_at to display the date in the same format.

keywords.name to display the keywords below the date.


 * **/
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            // aria-label="recipe"
            className={classes.avatar}
            src={
              sourceUrl
                ? sourceUrl
                : "https://i.cbc.ca/1.5872462.1610586914!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/hnic-montreal-canadiens-at-winnipeg-jets.jpg"
            }
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      {/* <CardMedia
        className={classes.media}
        image={
          sourceUrl
            ? sourceUrl
            : "https://i.cbc.ca/1.5872462.1610586914!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/hnic-montreal-canadiens-at-winnipeg-jets.jpg"
        }
        title={sourceTitle}
      /> */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {keywords.length === 0 && <b>NO Players</b>}
            {keywords.map((keyword) => (
              <div key={keyword._id}>
                <InsetDividers
                  image={keyword.imagePath}
                  name={keyword.name}
                  sourceType={keyword.type}
                />
              </div>
            ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

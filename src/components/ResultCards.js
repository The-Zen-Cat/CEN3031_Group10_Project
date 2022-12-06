import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
//import Avatar from '@mui/material/Avatar';
// eslint-disable-next-line no-unused-vars
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
//import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import soupkitchen from './images/soupkitchen.jpg';
import clothing from './images/clothing.jfif';
import shelter from './images/shelter.jpg';
//import goodwill from './images/goodwill.jpeg';
import healthcare from './images/healthcare.jpeg';

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export default function ResultCard(propss) {
  const [expanded, setExpanded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    console.log('handling click');
    setIsFavorite(!isFavorite);
  };

  var imageLogo = soupkitchen;

  if (propss.isShelter == true) {
    imageLogo = shelter;
  }
  if (propss.isHealthcare == true) {
    imageLogo = healthcare;
  }
  if (propss.isClothing == true) {
    imageLogo = clothing;
  }

  var favoritesOnly = propss.favoritesOnly;
  if (favoritesOnly && !isFavorite) {
    console.log('favorites but not chosen!');
  } else {
    return (
      <Card sx={{ margin: 2, maxWidth: 600, minWidth: 600 }}>
        <CardHeader
          title={propss.name}
          subheader={
            'Food:' +
            (propss.isFood ? 'Yes  ' : 'No  ') +
            'Shelter:' +
            (propss.isShelter ? 'Yes  ' : 'No  ') +
            'Clothing:' +
            (propss.isClothing ? 'Yes  ' : 'No  ') +
            'Healthcare:' +
            (propss.isHealthcare ? 'Yes  ' : 'No  ')
          }
        />
        <CardMedia component="img" height="194" image={imageLogo} alt={propss.name} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {propss.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
            {isFavorite ? (
              <FavoriteIcon></FavoriteIcon>
            ) : (
              <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
            )}
          </IconButton>

          <ExpandMore
            expand={expanded || propss.printing}
            onClick={handleExpandClick}
            aria-expanded={expanded || propss.printing}
            aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded || propss.printing} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Address: {propss.addressStreet}, {propss.addressCity}, {propss.addressState},{' '}
              {propss.addressZip}
            </Typography>
            <Typography paragraph>Phone Number: {propss.phoneNumber}</Typography>
            <Typography paragraph>Open Time: {propss.opentime}</Typography>
            <Typography paragraph>Close Time: {propss.closetime}</Typography>
            <Typography paragraph>Website URL: {propss.websiteURL}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

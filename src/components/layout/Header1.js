import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HelpIcon from "@material-ui/icons/Help";
import LiveTvIcon from "@material-ui/icons/LiveTv";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class Header1 extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <LiveTvIcon style={{ marginRight: 10, color: "red" }} />
            Live stats
          </MenuItem>
        </Link>
        <Link
          to="/statewise"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={this.handleMobileMenuClose}>
            <LocationCityIcon style={{ marginRight: 10 }} />
            Statewise
          </MenuItem>
        </Link>
        <Link to="/news" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <AnnouncementIcon style={{ marginRight: 10 }} />
            News
          </MenuItem>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <HelpIcon style={{ marginRight: 10 }} />
            About
          </MenuItem>
        </Link>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Covid-19 (India)
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link to="/" className="blinking">
                <Button color="inherit">live stats</Button>
              </Link>

              <Link
                to="/statewise"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">statewise</Button>
              </Link>

              <Link
                to="/news"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">news</Button>
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">about</Button>
              </Link>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        {renderMobileMenu}
      </div>
    );
  }
}

Header1.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header1);

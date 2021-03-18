import React from "react";
import SuperAdminSideNavbar from "./SuperAdminSideNavbar";
import Switch from "@material-ui/core/Switch";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import FreelancerUperSideNavBar from "./FreelancerUperSideNaveBar";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  list: {
    width: 250,
  },
  fullList: {
    // width: 'auto',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

function SideNavbarAdmin() {
  const classes = AntSwitch;
  const [state, setChekd] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setChekd({ ...state, [anchor]: open });
  };
  return (
    <>
      <div className="visible_toogle">
        <AntSwitch
          onClick={toggleDrawer(["left"], true)}
          name="checkedC"
          className="postion_toggle"
        />
      </div>
      <div className="navbar_head">
        {localStorage.getItem("free") === "false" ? (
          <SuperAdminSideNavbar />
        ) : localStorage.getItem("free") === "true" ? (
          <FreelancerUperSideNavBar />
        ) : (
          ""
        )}
      </div>
      {["left"].map((anchor) => (
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          <div className="navbar_mobile">
            <div
              className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
              })}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              {localStorage.getItem("free") === "false" ? (
                <SuperAdminSideNavbar />
              ) : localStorage.getItem("free") === "true" ? (
                <FreelancerUperSideNavBar />
              ) : (
                ""
              )}
            </div>
          </div>
        </Drawer>
      ))}
    </>
  );
}

export default SideNavbarAdmin;

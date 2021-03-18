import React, { Fragment } from "react";
// import AdminNAvBar from "../../Layout/AdminNAvBar";
// eslint-disable-next-line no-unused-vars
import { FlatButtonLight } from "../../Layout/Button";
// import SideNavbarAdmin from "../../Layout/SideNavbarAdmin";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { emphasize } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
// import Drawer from "@material-ui/core/Drawer";
const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    fontSize:"15px",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch 
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
      onChange={()=>{console.log(classes.checked)}}
    />
  );
});

function AdminDash() {
  const data_job = [
    {
      id: 1,
      title: "web development & IT",
      avatar: "",
      info: "",
    },
    {
      id: 2,
      title: "design, art & multimedia",
      avatar: "",
      info: "",
    },
    {
      id: 3,
      title: "writing & tranaslation",
      avatar: "",
      info: "",
    },
    {
      id: 4,
      title: "admin support",
      avatar: "",
      info: "",
    },
    {
      id: 5,
      title: "management & Finance",
      avatar: "",
      info: "",
    },
    {
      id: 6,
      title: "sales & marketing",
      avatar: "",
      info: "",
    },
    {
      id: 7,
      title: "web development & IT",
      avatar: "",
      info: "",
    },
    {
      id: 8,
      title: "web development & IT",
      avatar: "",
      info: "",
    },
  ];

  return (
    <Fragment>
      <div className="block_of_breadcrums">
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            component="a"
            to="/admin-dashboard-feed"
            href="/admin-dashboard-feed"
            label="Home"
            icon={<HomeIcon fontSize="small" />}
          />
          <Typography color="textPrimary">Feeds</Typography>
        </Breadcrumbs>
      </div>
      <hr style={{ color: "gray", background: "grey" }} />
      <br />

      <div className="block_of_admin_board">
        <div className="feed_info">
          <div className="feed_info_col_50">
            <p className="heading_feed">Feeds</p>
            <p className="frrlancer_type">Freelancer Type</p>
            <div className="feed_info_col_50_inner_btn_column">
              <div className="feed_info_col_50_inner_btn_coll">
                {/* <li>
                  <FlatButtonLight
                    text="Remote"
                    b_color="#003bfc49"
                    color="#003bfc"
                    h_color="#003bfc"
                    h_c="white"
                    style={{ float: "right", fontWeight: "400" }}
                  />
                </li>
                <br />
                <li>
                  <FlatButtonLight
                    text="Independent"
                    b_color="#003bfc"
                    color="white"
                    h_color="#003bfc49"
                    h_c="#003bfc"
                    style={{ float: "right" }}
                  />
                </li>
             */}
            
            
              </div>
            </div>
          </div>
          <div className="feed_info_col_50">
            <div className="switch_btn">
              <p>OQ Suggested</p>
              <div>
                <IOSSwitch name="checkedB" />
              </div>
            </div>
          </div>
        </div>
        <div className="feed_search" style={{marginLeft:"0.4rem",marginTop:"-1rem"}}>
          <li>
            <i className="fa fa-search"></i>
            <input
              type="search"
              placeholder="Search for any job Category"
              className="search_job_admin"
            />
          </li>
        </div>
        <div className="feed_topic_project">
          {data_job.map((data) => (
            <Link
              style={{ textDecoration: "none" }}
              to="/admin-dashboard-feed/admin-joblist"
            >
              <div className="feed_topic_project_jobs" key={data.id}>
                <div className="feed_topic_project_jobs_upper">
                  <div className="feed_topic_project_jobs_img_avtar">
                    <div className="span_avatar"></div>
                    <p>{data.title}</p>
                  </div>
                </div>
                <div className="feed_topic_project_jobs_lower">
                  <div className="feed_topic_project_jobs_info"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default AdminDash;

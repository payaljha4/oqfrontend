import React, { Fragment, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import { FlatButton } from "../../Layout/Button";
import "./chat.css";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { emphasize } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);
function Chat() {
  const [show, setshow] = useState(true);
  const openDropdown = (e) => {
    e.preventDefault();
    setshow(!show);
  };
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
          <StyledBreadcrumb
            component="a"
            href="/admin-dashboard-proposal"
            label="Proposal"
          />
          <StyledBreadcrumb
            component="a"
            href="/admin-dashboard-proposal/freelancer-proposal-project"
            label="Lists"
          />
          <Typography color="textPrimary">Chats</Typography>
        </Breadcrumbs>
      </div>
      <hr style={{ color: "gray", background: "grey" }} />
      <br />
      <div className="block_of_admin_board">
        <div className="chat_dasboard">
          <p className="heading_feed">OQ Chats</p>
          <div className="chat_flex_box">
            <div className="chat_flex_box_msg">
              <div className="header_chat_box" style={{backgroundColor:"#94ade0"}}>
                <div className="div_name_id">
                  <Avatar
                    alt="Travis Howard"
                    className="avatr_skills_small"
                    src={require("../../Assets/avtar.jpg")}
                  />
                  <p className="p_tag_name_freelancer">Name</p>
                </div>
                <div className="chat_right_flex_freelancer_details">
                  <div className="chat_right_flex_freelancer_tool">
                    <Tooltip
                      title="View Freelancer Profile"
                      onClick={openDropdown}
                    >
                      <img
                        src="https://img.icons8.com/color/50/000000/user-location.png"
                        alt=""
                      />
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="message_box">
                <div className="div_msg_box">
                  <li className="msg_list sender">
                    Lorem ipsum dolor sit amet consecteturtatibus, dolorum,
                    excepturi esse!
                  </li>
                </div>
                <div className="div_msg_box">
                  <li className="msg_list reciver">
                    Lorem ipsum dolor sit amet consepturi esse!
                  </li>
                </div>
                <div className="div_msg_box">
                  <li className="msg_list sender">
                    Lorem ipsum dolor sit amet consecteturtatibus, dolorum,
                    excepturi esse!
                  </li>
                </div>
                <div className="div_msg_box">
                  <li className="msg_list reciver">
                    Lorem ipsum dolor sit amet consepturi esse!
                  </li>
                </div>
                <div className="div_msg_box">
                  <li className="msg_list sender">
                    Lorem ipsum dolor sit amet consecteturtatibus, dolorum,
                    excepturi esse!
                  </li>
                </div>
                <div className="div_msg_box">
                  <li className="msg_list reciver">
                    Lorem ipsum dolor sit amet consepturi esse!
                  </li>
                </div>
              </div>
              <div className="send_area_message">
                <textarea placeholder=" Type your Message"></textarea>
                <button className="msg_send">
                  <i className="fa fa-send"></i>
                  {/*<span style={{ margin: "5px" }}>Send</span>*/}
                </button>
              </div>
            </div>
            {show === true ? (
              <div className="chat_flex_box_profile hide_profile">
                <div className="diaply_off_btn" style={{ padding: "15px" }}>
                  <FlatButton
                    text="Start Working"
                    b_color="#003bfc"
                    color="white"
                    h_color="white"
                    h_c="#003bfc"
                    className="classname_btn"
                  />
                </div>
                <div className="message_box_short">
                  <li
                    className="feed_search_label"
                    style={{
                      fontWeight: "normal",
                      fontSize: "15px",
                      margin: "4px 0",
                    }}
                  >
                    Freelancer Info.
                  </li>
                  <li style={{ fontSize: "14px" }}>
                    <span className="block_remote" style={{ fontSize: "14px" }}>
                      Remote Freelancer
                    </span>
                  </li>
                  <div className="short_deatils">
                    <div className="flexData_short_deatils emotionalQuotient">
                      <p>25%</p>
                      <br />
                      <span>Emotional Quotient</span>
                    </div>
                    <div className="flexData_short_deatils userSentiment">
                      <p>40%</p>
                      <br />
                      <span>User Sentiment</span>
                    </div>
                    <div className="flexData_short_deatils oqScore">
                      <p>
                        4{" "}
                        <span style={{ fontSize: "15px", color: "blue" }}>
                          out of
                        </span>{" "}
                        <span style={{ color: "red" }}>5</span>
                      </p>
                      <br />
                      <span>OQ Score</span>
                    </div>
                  </div>
                  <div>
                    <p className="feed_search_label_avrgae">
                      Freelancer Average Online Score
                    </p>
                    <span className="feed_search_label">4.5</span>
                    <Rating
                      name="half-rating-read"
                      defaultValue={3.5}
                      precision={0.1}
                      readOnly
                    />
                  </div>
                  <div className="block_flex_bottom_engagment_index_no">
                    <p className="feed_search_label_avrgae">
                      Social Media Index
                    </p>
                    <div style={{ textAlign: "center", margin: "10px 0" }}>
                      <span>5000</span>
                    </div>
                  </div>
                  <p className="feed_search_label" style={{ fontSize: "14px" }}>
                    Engagement Index
                  </p>
                  <div>
                    <Rating name="read-only" value={3} readOnly />
                  </div>
                  <p className="feed_search_label_avrgae">My Skills</p>
                  <div className="avatr_skills_flex">
                    <Avatar
                      alt="Remy Sharp"
                      className="avatr_skills_short"
                      src={require("../../Assets/avtar.jpg")}
                    />
                    <Avatar
                      alt="Travis Howard"
                      className="avatr_skills_short"
                      src={require("../../Assets/avtar.jpg")}
                    />
                    <Avatar
                      alt="Travis Howard"
                      className="avatr_skills_short"
                      src={require("../../Assets/avtar.jpg")}
                    />
                    <Avatar
                      style={{ background: "grey" }}
                      className="avatr_skills_short"
                    >
                      +5 more
                    </Avatar>
                  </div>
                  <p className="feed_search_label_avrgae">
                    Freelancer Work Links
                  </p>
                  <div>
                    <div className="my_blnk_short"></div>
                    <div className="my_blnk_short"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="chat_flex_box_profile">
                <div className="diaply_off_btn" style={{ padding: "15px" }}>
                  <FlatButton
                    text="Start Working"
                    b_color="#003bfc"
                    color="white"
                    h_color="white"
                    h_c="#003bfc"
                  />
                </div>
                <div className="message_box_short">
                  <li
                    className="feed_search_label"
                    style={{
                      fontWeight: "normal",
                      fontSize: "15px",
                      margin: "4px 0",
                    }}
                  >
                    Freelancer Info.
                  </li>
                  <li style={{ fontSize: "14px" }}>
                    <span className="block_remote" style={{ fontSize: "14px" }}>
                      Remote Freelancer
                    </span>
                  </li>
                  <div className="short_deatils">
                    <div className="flexData_short_deatils emotionalQuotient">
                      <p>25%</p>
                      <br />
                      <span>Emotional Quotient</span>
                    </div>
                    <div className="flexData_short_deatils userSentiment">
                      <p>40%</p>
                      <br />
                      <span>User Sentiment</span>
                    </div>
                    <div className="flexData_short_deatils oqScore">
                      <p>
                        4{" "}
                        <span style={{ fontSize: "15px", color: "blue" }}>
                          out of
                        </span>{" "}
                        <span style={{ color: "red" }}>5</span>
                      </p>
                      <br />
                      <span>OQ Score</span>
                    </div>
                  </div>
                  <div>
                    <p className="feed_search_label_avrgae">
                      Freelancer Average Online Score
                    </p>
                    <span className="feed_search_label">4.5</span>
                    <Rating
                      name="half-rating-read"
                      defaultValue={3.5}
                      precision={0.1}
                      readOnly
                    />
                  </div>
                  <div className="block_flex_bottom_engagment_index_no">
                    <p className="feed_search_label_avrgae">
                      Social Media Index
                    </p>
                    <div style={{ textAlign: "center", margin: "10px 0" }}>
                      <span>5000</span>
                    </div>
                  </div>
                  <p className="feed_search_label" style={{ fontSize: "14px" }}>
                    Engagement Index
                  </p>
                  <div>
                    <Rating name="read-only" value={3} readOnly />
                  </div>
                  <p className="feed_search_label_avrgae">My Skills</p>
                  <div className="avatr_skills_flex">
                    <Avatar
                      alt="Remy Sharp"
                      className="avatr_skills_short"
                      src={require("../../Assets/avtar.jpg")}
                    />
                    <Avatar
                      alt="Travis Howard"
                      className="avatr_skills_short"
                      src={require("../../Assets/avtar.jpg")}
                    />
                    <Avatar
                      alt="Travis Howard"
                      className="avatr_skills_short"
                      src={require("../../Assets/avtar.jpg")}
                    />
                    <Avatar
                      style={{ background: "grey" }}
                      className="avatr_skills_short"
                    >
                      +5 more
                    </Avatar>
                  </div>
                  <p className="feed_search_label_avrgae">
                    Freelancer Work Links
                  </p>
                  <div>
                    <div className="my_blnk_short"></div>
                    <div className="my_blnk_short"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Chat;

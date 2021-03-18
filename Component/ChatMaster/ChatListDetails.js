import React, { Fragment } from "react";
import "../JobList/JobList";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { emphasize } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import { Avatar, Divider } from "@material-ui/core";
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
function ChatDetails() {
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
          <Typography color="textPrimary">Chats</Typography>
        </Breadcrumbs>
      </div>
      <hr style={{ color: "gray", background: "grey" }} />
      <br />
      <div className="block_of_admin_board">
        <div className="container_width_joblist">
          <div className="conatiner_heading_job_list">
            <div className="conatiner_heading_title">
              {/* <div className="feed_search"> */}
              <li
                style={{
                  width: "300px",
                  background: "#85bff550",
                  padding: "10px 5px",
                  borderRadius: "5px",
                  boxShadow: "0 0 5px rbga(0,0,0,0.25)",
                }}
              >
                <input
                  type="search"
                  placeholder="Search"
                  className="search_job_admin"
                />
              </li>
              {/* </div> */}
            </div>
          </div> 

          <div className="project_list_inchat_box_flex_parts">
            <Grid item xs={3} sm={3} className="grid_flex_box grid_flex_box_abs">
            <div className="project_list_inchat_box">
                <span style={{ fontWeight: "bold" }} className="class_name_hideen">Projects</span>
                <span style={{ fontWeight: "bold" }}><i class="fa fa-toggle-off" aria-hidden="true"></i></span>
              </div>
              <div className="project_list_inchat_box_all_projects">
                <ul>
                  <Badge
                    badgeContent={4}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                  <br />
                  <Badge
                    badgeContent={4}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                  <Badge
                    badgeContent={4}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                  <Badge
                    badgeContent={4}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                  <Badge
                    badgeContent={null}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                  <Badge
                    badgeContent={null}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                  <Badge
                    badgeContent={null}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                  <Badge
                    badgeContent={null}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                  <Badge
                    badgeContent={null}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                  <Badge
                    badgeContent={null}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                  <Badge
                    badgeContent={4}
                    color="Primary"
                    style={{ margin: "5px auto" ,width:'95%'}}
                  >
                    <li>
                      <div>
                        <span className="title_of_project_chat">
                          11Q Project:
                        </span>
                      </div>
                      <div>
                        <span className="title_of_disc_chat">
                          Graphic Designer
                        </span>
                      </div>
                      <div>
                        <span className="title_of_date_chat">21 Dec,2020</span>
                      </div>
                    </li>
                  </Badge>
                </ul>
              </div>
            </Grid>
            <Grid item xs={9} sm={9} className="grid_flex_box grid_flex_box_center">
              <div className="project_list_inchat_box_details">
                <span style={{ fontWeight: "bold" }}>Project Chats</span>
              </div>
              <div className="project_list_inchat_box_details_info">
                <div>
                  <span className="title_of_project_chat">11Q Project:</span>
                </div>
                <div>
                  <span className="title_of_disc_chat">Graphic Designer</span>
                </div>
                <div>
                  <span className="title_of_disc_full">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi, recusandae tempore consequuntur, ullam sint
                    aliquid, sed repellendus quae
                  </span>
                </div>

                <div>
                  <span className="title_of_date_chat">21 Dec,2020</span>
                </div>
              </div>
              <div>
                <span
                  className="title_of_project_chat"
                  style={{ margin: "8px" }}
                >
                  12 Chats
                </span>
              </div>
              <div className="chat_list_for_each_projects">
                <ul className="bagground_list_cahts_project">
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />{" "}
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />{" "}
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />{" "}
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />{" "}
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />{" "}
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />{" "}
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />{" "}
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />{" "}
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />{" "}
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />{" "}
                  <li className="bagground_list_cahts_project_li">
                    <div className="bagground_list_cahts_project_div">
                      <div className="bagground_list_cahts_project_avtar">
                        <Avatar
                          alt="Remy Sharp"
                          style={{ width: "50px", height: "50px" }}
                          src={require("../../Assets/avtar.jpg")}
                        />
                      </div>
                      <div className="bagground_list_cahts_project_data">
                        <div className="bagground_list_cahts_project_info">
                          <p className="bagground_list_cahts_project_name">
                            Freelacner Name
                          </p>
                          <p className="bagground_list_cahts_project_info_data">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis architecto voluptatum pariatur
                            quidem quae quas ipsumy
                          </p>
                        </div>
                      </div>
                      <div className="bagground_list_cahts_project_badge">
                        <Badge
                          badgeContent={4}
                          color="Primary"
                          style={{ margin: "10px -10px" }}
                        ></Badge>
                      </div>
                    </div>
                  </li>
                  <Divider
                    style={{ width: "80%", margin: "0 auto", height: "2px" }}
                  />
                </ul>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default ChatDetails;

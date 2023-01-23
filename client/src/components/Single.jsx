import React, { useEffect, useState } from "react";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Like from "./Like";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";
import Sider from "./Sider";

const Single = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [readMore, setReadMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // const postId = location.pathname.split("/")[2];
  // console.log(location.pathname.split("/"))
  console.log(id);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  console.log(post.username);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${id}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="user">
            {/* {post.userImg && <img
                src={post.userImg}
                alt=""
              />} */}
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser?.username === post.username && (
              <div className="edit">
                <Link to={`/write?edit=2`} state={post}>
                  <img src={Edit} alt="" />
                </Link>
                <img onClick={handleDelete} src={Delete} alt="" />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <div>
            
          {post.img && (
            <img className="img-fluid" src={`../upload/${post?.img}`} alt="" />
          )}
          </div>

          {readMore ? (
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.desc),
              }}
            ></p>
          ) : (
            `${getText(post.desc).substring(0, 200)}...`
          )}
          <div >
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "  show more"}
            </button>
          </div>
        </div>

        <div className="col-md-3 ms-auto">
          <Sider />
          <Like cat={post.cat} />
          {/* <Menu cat={post.cat} /> */}
        </div>
      </div>
    </div>
  );
};

export default Single;

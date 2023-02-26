import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get("/comments?postId=" + postId);
        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleClick = async (e) => {
    if (currentUser) {
      e.preventDefault();
      axios.post("/comments", { desc, postId });
      setDesc("");
      return;
    }
    alert("Please login");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>

      {comments.map((comment) => (
        <div className="comment">
          {/* <img src={"/upload/" + comment.profilePic} alt="" /> */}
          <div className="info">
            <span>{comment.username}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;

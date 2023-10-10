import { useRef, useState, useEffect, useContext } from "react";
// import axios from "axios";
// import ReelModal from "./reelModal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import profile from "../../assets/profile.png";
import "./Reels.scss";
import gsap from "gsap";
import { FaStar } from "react-icons/fa";
import Comments from "./Comments";
import axios from "axios";
import cookie from "react-cookies";
import superagent from "superagent";
import { LoginContext } from "../Auth/login/LogInContext";

export default function Video({ item }) {
  // const state = useContext(ReelContext);
  const loginState = useContext(LoginContext);

  const [isVideoPlaying, setisVideoPlaying] = useState(false);
  const [newComment, setNewComment] = useState("");
  const vidRef = useRef();
  const [isSlid, setIsSlid] = useState(false); // Each component instance will have its own isSlid state
  const [description, setDescription] = useState(false);
  const [commentsArr, setCommentArr] = useState([]);

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setisVideoPlaying(false);
    } else {
      vidRef.current.play();
      setisVideoPlaying(true);
    }
  };

  const handleToggle = () => {
    const box = document.querySelector(`#newContainer-${item.id}`);
    gsap.to(box, {
      x: isSlid ? 0 : 400,
      duration: 0.1,
    });
    setIsSlid(!isSlid);
  };

  const handleGetComments = async () => {
    try {
      const allComments = await axios.get(
        `${import.meta.env.VITE_DATABASE_URL}/comments/${item.id}`,
        {
          headers: {
            Authorization: `Bearer ${cookie.load("auth")}`,
          },
        }
      );
      setCommentArr(allComments.data.comments);
      console.log("DATA-----------------", allComments.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNewComment = async (e) => {
    e.preventDefault();
    console.log("comment:  ", newComment, "id:  ", item.id);
    const oneComment = {
      content: newComment,
      date:
        `${new Date(Date.now()).getHours()}` +
        ":" +
        `${new Date(Date.now()).getMinutes()}`,
      userId: loginState.id,
      reelId: item.id,
    };
    const req = async () => {
      try {
        const response = await superagent
          .post(`${import.meta.env.VITE_DATABASE_URL}/comments`)
          .set("authorization", `Bearer ${cookie.load("auth")}`)
          .send(oneComment);
        if (response.ok) {
          console.log(response.body);
          setCommentArr([...commentsArr, response.body]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    req();
    // state.AddComment(newComment, item.id);
    setNewComment("");
  };

  const handleDescription = () => {
    const uploaderInfo = document.querySelector(`#uploaderInfo-${item.id}`);
    const descCont = document.querySelector(`#descCont-${item.id}`);

    gsap.to(uploaderInfo, {
      background: description ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.7)",
    });

    gsap.to(descCont, {
      height: description ? 30 : "auto",
      duration: 0.5,
    });
    setDescription(!description);
  };
  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);

  useEffect(() => {
    handleGetComments();
  }, []);

  return (
    <div className="video-cards">
      <video
        onClick={onVideoClick}
        id="vidPlayer"
        className="video-player"
        ref={vidRef}
        src={item.url}
      />
      <section className="reel-btnns">
        <FontAwesomeIcon
          id="cmnt"
          icon={faCommentDots}
          className="commentBTN"
          onClick={handleToggle}
          flip="horizontal"
        />
        <div
          className="uploaderInfo"
          id={`uploaderInfo-${item.id}`}
          onClick={handleDescription}
        >
          <div className="nameANDimage">
            <div className="uploaderIMGcontain">
              <img src={profile} alt="" />
            </div>
            <div className="uploaderName">{item.username}</div>
          </div>
          <div className="starsssss">
            {[...Array(item.rating)].map((star, idx) => {
              return (
                <label key={idx}>
                  <input className="hehe" type="radio" name="rating" />
                  <FaStar className="ssttarr" size={20} color={"#FCA41C"} />
                </label>
              );
            })}
          </div>
          <div className="descCont" id={`descCont-${item.id}`}>
            <div className="descREPTion">{item.description}</div>
          </div>
        </div>
      </section>
      <div className={`newContainer`} id={`newContainer-${item.id}`}>
        {
          <div className="commentsContainer">
            <div className="commentSectionHeader">Comments</div>
            <section className={`commentss`} id={`commentss-${item.id}`}>
              {commentsArr?.map((comment) => {
                console.log(comment);
                return (
                  <Comments
                    key={comment.id}
                    item={item}
                    comment={comment}
                    handleGetComments={handleGetComments}
                  />
                );
              })}
            </section>

            <form onSubmit={handleNewComment}>
              <input
                className="input-comment"
                value={newComment}
                required
                placeholder="Type a new comment"
                onChange={(e) => setNewComment(e.target.value)}
              ></input>
              <button type="submit">➽</button>
            </form>
          </div>
        }
      </div>
    </div>
  );
}

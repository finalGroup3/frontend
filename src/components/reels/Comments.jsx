import "./Reels.scss";
import profile from "../../assets/profile.png";
import axios from "axios";
import { LoginContext } from "../Auth/login/LogInContext";
import { useContext} from "react";
import { When } from "react-if";
import cookie from "react-cookies";


const Comments = ({ item, comment ,handleGetComments}) => {
  const loginState = useContext(LoginContext);

  const handleDeleteCmt = async (id) => {
    try {
      const respone = await axios.delete(
        `${import.meta.env.VITE_DATABASE_URL}/comments/${id}`,
        {
          headers: {
            Authorization: `Bearer ${cookie.load("auth")}`,
          },
        }
      );
      console.log("delete res:===", respone);
    } catch (e) {
      console.log(e);
    }
    handleGetComments()
  };

  return (
    <div>
      <div>
        <img src={profile} alt="" className="omago" />
        <span className="unknownnn">Unknown</span>
        <span className="commentDATE">{comment.date}</span>
      </div>
      <p className={`commentt`} id={`commentt-${comment.id}`} key={item.id}>
        {comment.content}
      </p>
      <When condition={comment.userId == loginState.user.id}>
        <div
          className="deleteBTNon"
          onClick={() => handleDeleteCmt(comment.id)}
        >
          Delete
        </div>
      </When>
    </div>
  );
};

export default Comments;

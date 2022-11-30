import { useState, useEffect } from "react";
import axios from "axios";
import * as Style from "./detail.styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";

function Detail(): JSX.Element {
  const { user } = useAuth();
  const [response, setResponse] = useState([
    {
      name: "",
      description: "",
    },
  ]);
  const navigate = useNavigate();
  useEffect(() => {
    const getDetail = async () => {
      const w = await axios.get(
        `https://api.github.com/users/${user.login}/repos`
      );
      setResponse(w.data);
    };
    getDetail();
  }, []);

  return (
    <Style.Login>
      <Style.Card>
        <Style.AvatarLayer>
          <Style.LogoAvatar src={user.avatar_url} className="logoAvatar" />
          <Style.InfoUser>
            <h3>{user.name}</h3>
            <span>{user.bio || "Description"}</span>
          </Style.InfoUser>
        </Style.AvatarLayer>
        <Style.RepoCard>
          <Style.ButtonGroup>
            <button>Repo</button>
            <button>Favo</button>
          </Style.ButtonGroup>
          <Style.Repos>
            {response.map((rep) => (
              <Style.ReposInner>
                <Style.NameRepos>
                  <h4 className="name">{rep.name}</h4>
                  <span className="subRepo">{rep.description}</span>
                </Style.NameRepos>
                <div className="share">
                  <Style.ShareButton>Compartilhar</Style.ShareButton>
                </div>
              </Style.ReposInner>
            ))}
          </Style.Repos>
        </Style.RepoCard>
        <Style.Back onClick={() => navigate("/search")}>voltar</Style.Back>
      </Style.Card>
    </Style.Login>
  );
}

export default Detail;

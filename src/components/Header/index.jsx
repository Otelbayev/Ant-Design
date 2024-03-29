import React from "react";
import { Container, Content } from "./style";
import { useNavigate } from "react-router-dom";
import { useModeContext } from "../../context/ModeContext";

const Header = () => {
  const [mode, setMode, isopen, setIsOpen] = useModeContext();
  const naviagte = useNavigate();
  return (
    <Container mode={mode}>
      <Content>
        <Content.Left onClick={() => naviagte("/")}>
          <Content.Logo />
          <Content.Title>Ant Design</Content.Title>
        </Content.Left>

        <div className="btn">
          {isopen ? (
            mode === "light" ? (
              <Content.Close onClick={() => setIsOpen(!isopen)} />
            ) : (
              <Content.CloseLight onClick={() => setIsOpen(!isopen)} />
            )
          ) : mode === "light" ? (
            <Content.Menu onClick={() => setIsOpen(!isopen)} />
          ) : (
            <Content.MenuLight onClick={() => setIsOpen(!isopen)} />
          )}
        </div>
        <Content.Right>
          <div className="name">Jasurbek Oʻtelbayev</div>
          <div className="div">
            <label htmlFor="dark">
              {mode === "light" ? (
                <Content.Moon mode={mode} />
              ) : (
                <Content.MoonLight mode={mode} />
              )}
            </label>
            <input
              id="dark"
              onClick={() => {
                localStorage.setItem("mode", "dark");
                setMode("dark");
              }}
              name="input"
              type="radio"
            />
            <input
              id="light"
              name="input"
              onClick={() => {
                localStorage.setItem("mode", "light");
                setMode("light");
              }}
              type="radio"
            />
            <label htmlFor="light">
              {mode === "light" ? (
                <Content.Sun mode={mode} />
              ) : (
                <Content.SunLight mode={mode} />
              )}
            </label>
          </div>
          <div>
            <Content.Link target="blank" to="https://youtube.com/@frontwebuz">
              {mode === "light" ? (
                <Content.Youtube mode={mode} />
              ) : (
                <Content.YoutubeLight mode={mode} />
              )}
            </Content.Link>
            <Content.Link target="blank" to="https://instagram.com/frontwebuz">
              {mode === "light" ? (
                <Content.Instagram mode={mode} />
              ) : (
                <Content.InstagramLight mode={mode} />
              )}
            </Content.Link>
            <Content.Link target="blank" to="https://t.me/frontwebuz">
              {mode === "light" ? (
                <Content.Telegram mode={mode} />
              ) : (
                <Content.TelegramLight mode={mode} />
              )}
            </Content.Link>
            <Content.Link target="blank" to="https://github.com/Jasurbek1604">
              {mode === "light" ? (
                <Content.Github mode={mode} />
              ) : (
                <Content.GithubLight mode={mode} />
              )}
            </Content.Link>
          </div>
        </Content.Right>
      </Content>
    </Container>
  );
};

export default Header;

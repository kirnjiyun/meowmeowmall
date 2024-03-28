import React from "react";
import UserIcon from "../images/icon-user.svg";
import Logo from "../images/meowmeow.svg";
import * as S from "./navBar.styled";
import SearchIcon from "../images/icon-search.svg";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar({ onSearch, auth, onLogout, onSelect }) {
    const menuList = ["전체보기", "인형", "키링", "의류", "디지털"];
    const navigate = useNavigate();
    const location = useLocation();

    const gotoLogin = () => {
        navigate("/login");
    };

    const gotoHome = () => {
        navigate("/");
    };

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            onSearch(keyword);
            navigate(`/?q=${keyword}&category=${getCurrentCategory()}`);
        }
    };

    const select = (menu) => {
        return () => {
            onSelect(menu);
            navigate(`/?category=${menu}`);
        };
    };

    const getCurrentCategory = () => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get("category") || "";
    };

    const currentCategory = getCurrentCategory();

    return (
        <S.NavBarLayout>
            <S.Div1 onClick={auth ? onLogout : gotoLogin}>
                <S.Img src={UserIcon} alt="User Icon" />
                <S.Content>{auth ? "로그아웃" : "로그인"}</S.Content>{" "}
            </S.Div1>
            <S.Div2>
                <S.Logo src={Logo} alt="meowmeow" onClick={gotoHome} />
            </S.Div2>
            <S.Div3>
                <S.Ul>
                    {menuList.map((menu) => (
                        <S.Li key={menu}>
                            <S.Button
                                onClick={select(menu)}
                                isSelected={menu === currentCategory}
                            >
                                ☾{menu}☽
                            </S.Button>
                        </S.Li>
                    ))}
                </S.Ul>
                <S.Div4>
                    <S.SearchBar>
                        <S.Img2 src={SearchIcon} alt="SearchIcon" />
                        <S.Input type="text" onKeyDown={search} />
                    </S.SearchBar>
                </S.Div4>
            </S.Div3>
        </S.NavBarLayout>
    );
}

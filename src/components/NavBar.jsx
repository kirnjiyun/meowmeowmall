import React, { useRef, useState, useEffect } from "react";
import UserIcon from "../images/icon-user.svg";
import Logo from "../images/meowmeow.svg";
import * as S from "./navBar.styled";
import SearchIcon from "../images/icon-search.svg";
import { useNavigate, useLocation } from "react-router-dom";
export default function NavBar({ onSearch, user, onLogout, onSelect }) {
    const menuList = ["전체보기", "인형", "키링", "의류", "디지털"];
    const navigate = useNavigate();
    const location = useLocation();
    const searchInputRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const menuRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        const handleClick = (event) => {
            if (
                isMobileMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            window.addEventListener("click", handleClick);
            console.log("first");
        }

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    const gotoLogin = () => {
        navigate("/login");
        clearSearchState();
    };

    const gotoSignUp = () => {
        navigate("/signup");
        clearSearchState();
    };

    const gotoHome = () => {
        navigate("/");
        clearSearchState();
        onSelect("");
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
            clearSearchState();
        };
    };

    const getCurrentCategory = () => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get("category") || "";
    };

    const currentCategory = getCurrentCategory();

    const clearSearchState = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
        }
        onSearch("");
    };

    return (
        <S.NavBarLayout>
            <S.Div1>
                {user ? (
                    <S.Button onClick={onLogout}>
                        <S.Img src={UserIcon} alt="User Icon" />
                        <S.Content>로그아웃</S.Content>
                    </S.Button>
                ) : (
                    <>
                        <S.Button onClick={gotoLogin}>
                            <S.Img src={UserIcon} alt="User Icon" />
                            <S.Content>로그인</S.Content>
                        </S.Button>
                        <S.Button onClick={gotoSignUp}>
                            <S.Img src={UserIcon} alt="User Icon" />
                            <S.Content>회원가입</S.Content>
                        </S.Button>
                    </>
                )}
            </S.Div1>
            <S.Div2>
                <S.Logo src={Logo} alt="meowmeow" onClick={gotoHome} />
            </S.Div2>
            <S.Div3>
                <S.HamburgerMenu onClick={toggleMobileMenu}>
                    &#9776;
                </S.HamburgerMenu>
                {isMobile ? (
                    isMobileMenuOpen && (
                        <S.MobileMenu ref={menuRef}>
                            <S.Ul>
                                {menuList.map((menu) => (
                                    <li key={menu}>
                                        <S.Button
                                            onClick={select(menu)}
                                            isSelected={
                                                menu === currentCategory
                                            }
                                        >
                                            ☾{menu}☽
                                        </S.Button>
                                    </li>
                                ))}
                            </S.Ul>
                        </S.MobileMenu>
                    )
                ) : (
                    <S.Ul>
                        {menuList.map((menu) => (
                            <li key={menu}>
                                <S.Button
                                    onClick={select(menu)}
                                    isSelected={menu === currentCategory}
                                >
                                    ☾{menu}☽
                                </S.Button>
                            </li>
                        ))}
                    </S.Ul>
                )}
                <S.Div4>
                    <S.SearchBar>
                        <S.Img2 src={SearchIcon} alt="SearchIcon" />
                        <S.Input
                            type="text"
                            onKeyDown={search}
                            ref={searchInputRef}
                        />
                    </S.SearchBar>
                </S.Div4>
            </S.Div3>
        </S.NavBarLayout>
    );
}

import styled from "styled-components";

export const NavBarLayout = styled.div`
    margin: 30px 50px 30px 50px;
    @media (max-width: 768px) {
        margin: 15px 25px 15px 25px;
    }
`;

export const Div1 = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px;
    gap: 10px;
    align-items: center;
    @media (max-width: 768px) {
        justify-content: flex-end;
    }
`;

export const Img = styled.img`
    cursor: pointer;
    height: 16px;
`;

export const Content = styled.p`
    cursor: pointer;
    font-size: 12px;
`;

export const Logo = styled.img`
    width: auto;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const Div2 = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        align-items: center; // 중앙 정렬을 유지
    }
`;

export const Div3 = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(500px, 1000px) 1fr;
    margin-top: 50px;
    @media (max-width: 768px) {
        display: flex; // flexbox 디스플레이로 변경
        flex-direction: column; // 항목을 세로로 쌓음
        align-items: center; // 중앙 정렬
        margin-top: 20px;
    }
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    gap: 10px;
    width: 100%;
    height: 30px;
    grid-column: 2 / 3;
    @media (max-width: 768px) {
        justify-content: center; // 중앙 정렬
    }
`;

export const Div4 = styled.div`
    margin-left: 20px;
    grid-column: 3 / 4;
    @media (max-width: 768px) {
        margin-left: 0; // 화면이 작을 때 마진 제거
    }
`;

export const Button = styled.button`
    font-family: "UhBeenamsoyoung";
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
        text-shadow: 0px 0px 4px #f5c1d0;
    }
    text-shadow: ${(props) =>
        props.isSelected ? "0px 0px 4px #f5c1d0" : "none"};
    @media (max-width: 768px) {
        font-size: 85%; // 화면이 작을 때 폰트 크기를 더 줄임
    }
`;

export const SearchBar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    gap: 5px;
    @media (max-width: 768px) {
        justify-content: center; // 화면이 작을 때 검색 바를 중앙에 위치
    }
`;

export const Img2 = styled.img`
    height: 20px;
`;

export const Input = styled.input`
    width: auto;
    height: 30px;
    font-size: 15px;
    border: 0;
    border-bottom: 2px solid rgb(255, 220, 230);
    outline: none;
    padding-left: 15px;
    transition: border-bottom 0.3s ease;
    &:focus {
        border-bottom: 2px solid rgb(245, 193, 208);
    }
    @media (max-width: 768px) {
        width: 70%; // 화면이 작을 때 입력 필드의 너비를 확장
    }
`;

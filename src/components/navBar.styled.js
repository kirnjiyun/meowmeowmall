import styled from "styled-components";

export const NavBarLayout = styled.div`
    margin: 30px 50px 30px 50px;
`;
export const Div1 = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px;
    gap: 10px;
    align-items: center;
`;
export const Img = styled.img`
    cursor: pointer;
`;
export const Content = styled.p`
    cursor: pointer;
`;
export const Logo = styled.img`
    width: auto;
    cursor: pointer;
`;
export const Div2 = styled.div`
    display: flex;
    justify-content: center;
`;
export const Div3 = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(500px, 1000px) 1fr;
    margin-top: 50px;
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    gap: 10px;
    width: 100%;
    height: 30px;
    grid-column: 2 / 3;
`;

export const Div4 = styled.div`
    margin-left: 20px;
    grid-column: 3 / 4;
`;

export const Li = styled.li``;

export const Button = styled.button`
    font-family: "UhBeenamsoyoung";
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    &:hover {
        text-shadow: 0px 0px 4px #f5c1d0;
    }
    text-shadow: ${(props) =>
        props.isSelected ? "0px 0px 4px #f5c1d0" : "none"};
`;

export const SearchBar = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 30px;
    gap: 5px;
`;
export const Img2 = styled.img``;
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
`;

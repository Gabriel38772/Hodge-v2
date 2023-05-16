export const buttonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Open Sans", "sans-serif";
    outline: none;
    border: none;
    letter-spacing: 2px;
    border-radius: 8px;
    padding: 1em 0;
    font-weight: 700;
    margin: 1em 0;
    cursor: pointer;
    text-transform: ${({ textStyle }) => (textStyle ? textStyle : "none")};
    width: ${({ width }) => (width ? width : "100%")};
    color: ${({ color }) => (color ? color : "white")};
    background-color: ${(props) => props.theme.colors.primaryAccent};

    &:hover {
    background-color: ${(props) => props.theme.colors.primaryAccentLight};
    }`;


export default function Button({ title, icon, onClick }) {
    return (
        <buttonStyle onClick={onClick}>
            {icon && <img src={} alt="" />}
            <span>{title}</span>
        </buttonStyle>
    );
}
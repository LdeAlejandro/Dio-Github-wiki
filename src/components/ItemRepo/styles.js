import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3{
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    button.remove{
        color: #FF0000;
        margin-top:20px;
         background: none;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: underline;
    font: inherit;
    cursor: pointer;
    }

    button.remove:hover {
    color: #0056b3;  
    text-decoration: none;  
}

    hr{
        color: #FAFAFA60;
        margin: 20px 0;
    }
    `
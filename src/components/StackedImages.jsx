import styled from "styled-components";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.jpg";

const StackedImg = ({numbers,previews}) => {
    return ( 
        <StyledStack className="reviews_by">
            <img src={p1.src} alt="" className="thumbnail" />
            <img src={p2.src} alt="" className="thumbnail p2" />
            <img src={p3.src} alt="" className="thumbnail p3" />
            <img src={p4.src} alt="" className="thumbnail p4" />
            <img src={p5.src} alt="" className="thumbnail p5" />
            <div>
            <h4>{numbers}</h4>
            <p>{previews}</p>
          </div>
        </StyledStack>
     );
}
 
export default StackedImg;

let StyledStack = styled.section`
margin-top: 20px;
max-width: 325px;
display: flex;
div{
    position: relative;
    left: -72px;
    margin-top: 10px;
    p,h4{
        color: var(--White);
        margin: 0;
    }
}
img{
    border: 0;
    cursor: pointer;
    transform: scale(1.0);
    transition: .4s;
    position: relative;
    &:hover{
        transform: scale(1.03);
        z-index: 10;
    }
}
.p2{
    position: relative;
    left: -22px;
}
.p3{
    position: relative;
    left: -44px;
}
.p4{
    position: relative;
    left: -66px;
}
.p5{
    position: relative;
    left: -88px;
}
`
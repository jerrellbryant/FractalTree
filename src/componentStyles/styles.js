import styled from 'styled-components'

export const Container = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
`;

export const Form = styled.form`
     display: flex;
     justify-content: space-around;
     align-items: center;
     @media (max-width: 870px) {
         flex-direction: column;
     }
`;

export const FormItem = styled.div`
     background-color: transparent;
     color: white;
     padding: 10px 20px;
     display: flex;
     justify-content: space-around;
     flex-direction: column;
     align-items: center;
     font-size: 18px;
     border-radius: 10px;
     margin: 30px;
`;

export const FormLabel = styled.label`
     padding: 10px;
     position: relative;

`;

export const Input = styled.input`
background-color: inherit;
 -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  width: 100%;
  height: 22px;
  cursor: pointer;
  display: block;
  :focus {
  outline: none;
  }
[disabled] {
  opacity: .3;
  cursor: default;
}

::-webkit-slider-runnable-track {
  box-sizing: border-box;
  width: 100%;
  height: 4px;
  background: #e6e6e6;
  border-radius: 100px;
  margin: 11px 0;
}
::-moz-range-track {
  box-sizing: border-box;
  width: 100%;
  height: 4px;
  background: #e6e6e6;
  border-radius: 100px;
  margin: 11px 0;
}
::-ms-track {
  box-sizing: border-box;
  width: 100%;
  height: 4px;
  background: #e6e6e6;
  border-radius: 100px;
  color: transparent;
  padding: 11px 0;
  border-color: transparent;
}
::-ms-fill-lower,
::-ms-fill-upper {
  box-sizing: border-box;
  width: 100%;
  height: 4px;
  background: #e6e6e6;
  border-radius: 100px;
}
::-ms-fill-lower {
  background: #60cd18;
}

::-webkit-slider-thumb {
  box-sizing: border-box;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
  border: 6px solid #503688;
  height: 24px;
  width: 24px;
  border-radius: 100px;
  background: #8eff2a;
  cursor: pointer;
  -webkit-appearance: none;
          appearance: none;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  margin-top: 2px;
}
::-moz-range-thumb {
  box-sizing: border-box;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
  border: 6px solid #503688;
  height: 24px;
  width: 24px;
  border-radius: 100px;
  background: #8eff2a;
  cursor: pointer;
}
::-ms-thumb {
  box-sizing: border-box;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
  border: 6px solid #503688;
  height: 24px;
  width: 24px;
  border-radius: 100px;
  background: #8eff2a;
  cursor: pointer;
}

`;

export const Button = styled.button`
 width: 200px;
 height: 50px;
 z-index: 1;
 outline: none;
 background-color: inherit;
 color: #fff;
 border: 1px solid transparent;
 border-image: linear-gradient(to right, #6559ae, #ff7159, #6559ae) 1;
 cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0;
  font-size: 20px;
 

 span {
  display: block;
  background: linear-gradient(120deg, #6559ae, #ff7159, #6559ae);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-animation: gradient 3s ease-in-out infinite;
  -webkit-animation: gradient 3s ease-in-out infinite;
  animation: gradient 3s ease-in-out infinite;
}

/* motion */
@-moz-keyframes gradient {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@-webkit-keyframes gradient {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@keyframes gradient {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@-moz-keyframes border {
  0% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 4px 66px, 4px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  25% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 216px 66px, 216px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 100% 0%, 0% 0%);
  }
  75% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 0% 100%);
  }
}
@-webkit-keyframes border {
  0% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 4px 66px, 4px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  25% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 216px 66px, 216px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 100% 0%, 0% 0%);
  }
  75% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 0% 100%);
  }
}
@keyframes border {
  0% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 4px 66px, 4px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  25% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 216px 66px, 216px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 100% 0%, 0% 0%);
  }
  75% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 0% 100%);
  }
}


 
`;

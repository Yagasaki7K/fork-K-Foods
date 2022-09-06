import { Wrapper, DivImgPizza, DivInfo } from './style'

export default function Card() {
    return (
        <Wrapper>
            <DivImgPizza></DivImgPizza>
            <DivInfo>
                <div>
                    <h1>Super Vegetariana</h1>
                    <p>Massa fina, molho de tomate, pimentão, tomate seco, cebola, cogumelo champgnon, pimentão verde, agrião e queijo.</p>
                </div>
                <ul>
                    <li>Vegetarianas</li>
                    <li>500g</li>
                    <li>Serve 2 pessoas</li>
                    <li>R$ 50,00</li>
                </ul>
            </DivInfo>
        </Wrapper>
    )
}
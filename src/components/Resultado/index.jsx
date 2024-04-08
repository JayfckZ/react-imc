import { useEffect, useState } from "react"
import styles from './Resultado.module.css'

const Resultado = ({resultadoIMC}) => {
    const [grau, setGrau] = useState('')

    useEffect(() => {
        if (resultadoIMC <= 16.9) {
            setGrau('Muito abaixo do peso');
        } else if (resultadoIMC > 16.9 && resultadoIMC <= 18.5) {
            setGrau('Abaixo do peso');
        } else if (resultadoIMC > 18.5 && resultadoIMC <= 24.9) {
            setGrau('Peso normal');
        } else if (resultadoIMC > 24.9 && resultadoIMC <= 29.9) {
            setGrau('Acima do peso');
        } else if (resultadoIMC > 29.9 && resultadoIMC <= 34.9) {
            setGrau('Obesidade Grau I');
        } else if (resultadoIMC > 34.9 && resultadoIMC <= 39.9) {
            setGrau('Obesidade Grau II');
        } else if (resultadoIMC >= 40) {
            setGrau('Obesidade Grau III');
        }
    }, [resultadoIMC])

    return(
        <section>
            <h4>O seu resultado é <span>{resultadoIMC.toFixed(2)}</span></h4>
            <h5>{grau}</h5>

            <table>
                <thead>
                    <th>IMC</th>
                    <th>Classificação</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Menor que 16.9</td>
                        <td>Magreza extrema</td>
                    </tr>
                    <tr>
                        <td>Entre 17 e 18.5</td>
                        <td>Magreza</td>
                    </tr>
                    <tr>
                        <td>Entre 18.6 e 24.9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr>
                        <td>Entre 25 e 29.9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td>Entre 30 e 34.9</td>
                        <td>Obesidade Grau I</td>
                    </tr>
                    <tr>
                        <td>Entre 35 e 39.9</td>
                        <td>Obesidade Grau II</td>
                    </tr>
                    <tr>
                        <td>Maior que 40</td>
                        <td>Obesidade Grau III</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Resultado
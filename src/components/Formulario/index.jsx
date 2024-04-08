import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import styles from './Formulario.module.css'
import Resultado from '../Resultado/'

const Formulario = () => {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [valoresInvalidos, setValoresInvalidos] = useState(false)
    const [exibeResultado, setExibeResultado] = useState(false)

    const verifica = () => {
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
            return true
        } else{
            return false
        }
    }
    const calculaIMC= () => {
        if (verifica()){
            setValoresInvalidos(true)
            setExibeResultado(false)
        } else{
            setResultado(peso / (altura * altura))
            setValoresInvalidos(false)
            setExibeResultado(true)
        }
    }

    return (
        <div className="container">
            <section id={styles.secForm}>
                <form className={styles.form} onSubmit={e => e.preventDefault()}>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="peso">Insira seu peso:</label>
                        <input required className={styles.formInput} type="number" id="peso" placeholder="Ex.: 75Kg" onBlur={e => setPeso(parseFloat(e.target.value))} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="alt">Insira sua altura:</label>
                        <InputMask required className={styles.formInput} type="text" id="alt" placeholder="Ex.: 180cm" mask="9.99" maskChar="" onBlur={e => setAltura(parseFloat(e.target.value))} />
                    </div>
                    <button className={styles.formButton} onClick={calculaIMC}>Calcular</button>
                </form>
                {valoresInvalidos ? (
                    <>
                        <h4>Por favor, insira as informações solicitadas.</h4>
                    </>
                ) : (
                    <>
                        {exibeResultado && (
                            <>
                                <Resultado resultadoIMC={resultado}/>
                            </>
                        )}
                    </>
                )}
            </section>
        </div>
    )  
}

export default Formulario
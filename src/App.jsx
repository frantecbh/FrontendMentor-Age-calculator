

import {  useState } from 'react'
import arrow from './assets/arrow.png'

export default function App() {

    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()

    const [ano, setAnos] = useState(0)
    const [mes, setMees] = useState(0)
    const [dia, setDias] = useState(0)

    const [yearIsValid, setYearIsValid] = useState(false)
    const [monthIsValid, setMonthIsValid] = useState(false)
    const [dayIsValid, setDayIsValid] = useState(false)

    function calcularIdade(dataNascimento) {
      // Extrair ano, mês e dia da string
      const [anoNasc, mesNasc, diaNasc] = dataNascimento.split('/');

      console.log(anoNasc)
      console.log(mesNasc)
      console.log(diaNasc)

      if(diaNasc === 0 || diaNasc > 31){
        setDayIsValid(true)
        return
      }else{
        setDayIsValid(false)
      }



      if(anoNasc.length < 4 ){
        setYearIsValid(true)
        return
      }else{
        setYearIsValid(false)
        
      }

      
      // Calcular diferença entre a data atual e a de nascimento
      const dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear();
      const mesAtual = dataAtual.getMonth() + 1;
      const diaAtual = dataAtual.getDate();
      
      let idade = anoAtual - anoNasc;
      let meses = mesAtual - mesNasc;
      let dias = diaAtual - diaNasc;
      
      // Ajustar diferença de meses e dias se necessário
      if (meses < 0 || (meses === 0 && dias < 0)) {
        idade--;
        meses += 12;
      }
      if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
        dias += ultimoDiaMesAnterior;
        meses--;
      }
      
      setAnos(idade)
      setMees(meses)
      setDias(dias)
      
    }
    


 
    
 
    







  return (

    <div className="w-full h-screen mx-auto flex items-center justify-center">
      <div className="bg-White max-w-[833px] w-full h-[651px] rounded-l-[24px] rounded-br-[200px] rounded-tr-[24px] p-14">
        
        {/* input datas */}
        <div className="flex gap-8 w-full">
          <div>
            <p className="text-Gray font-bold -tracking-tight font-Poppins mb-2">DAY</p>
            <div className="flex justify-center h-[72px] w-40 ">          
              <input 
              className="w-[100%] max-w-[100%] p-3 border-2 border-Line rounded-lg outline-none focus:border-Purple text-Black font-Poppins font-bold text-3xl" 
              placeholder='DD' 
              type="number" 
              maxLength={2} 
              max={31}
              value={day}
              onChange={(e) => setDay(e.target.value)} /> 
            </div>   
            <span className='text-Red italic text-sm font-Poppins hidden'>Must be a valid day</span>         
          </div>  
          <div>
            <p className="text-Gray font-bold -tracking-tight font-Poppins mb-2">MONTH</p>
            <div className="flex justify-center h-[72px] w-40 ">           
              <input 
              className="w-[100%] max-w-[100%] p-3 border-2 border-Line rounded-lg outline-none focus:border-Purple text-Black font-Poppins font-bold text-3xl" 
              placeholder='MM' 
              type="number" 
              maxLength={2} 
              max={12}
              value={month}
              onChange={(e) => setMonth(e.target.value)} />  
            </div>
            <span className='text-Red italic text-sm font-Poppins hidden'>Must be a valid day</span>              
          </div>

          <div>
            <p className="text-Gray font-bold -tracking-tight font-Poppins mb-2">YEAR</p>
            <div className="flex justify-center h-[72px] w-40 ">           
              <input 
              className={`w-[100%] max-w-[100%] p-3 border-2 ${!yearIsValid ? 'border-Line' : 'border-Red'}  rounded-lg outline-none focus:border-Purple text-Black font-Poppins font-bold text-3xl`}
              placeholder='AAAA' 
              type="number" 
              maxLength={4} 
              value={year}
              onChange={(e) => setYear(e.target.value)} />  
            </div>  
            <span className={`text-Red italic text-sm font-Poppins ${!yearIsValid ? 'hidden' : 'visible'}`}  >Must be a valid Year</span>            
          </div>
       
        </div>

        <div className="flex items-center">
          <div className=" border-b border-b-Line flex-1"></div>
          <button className="bg-Purple h-24 w-24 rounded-full flex items-center justify-center" onClick={() => calcularIdade(`${year}/${month}/${day}`)}>
              <img src={arrow} alt="" />
          </button>
        </div>

{/* resultado */}
    
        <div>
          <h1 className="font-extrabold font-Poppins flex gap-2 text-[104px] italic leading-[110%]" ><span className="text-Purple">{ano === 0 ? '- -' : ano} </span><span>years</span></h1>
          <h1 className="font-extrabold font-Poppins flex gap-2 text-[104px] italic leading-[110%]"><span className="text-Purple">{ano === 0 ? '- -' : mes}</span><span>months</span></h1>
          <h1 className="font-extrabold font-Poppins flex gap-2 text-[104px] italic leading-[110%]" ><span className="text-Purple">{ano === 0 ? '- -' : dia}</span><span>days</span></h1>
        </div>
        

      </div>

    </div>
  
  )
}
export default function Jsx(){   
   const titulo = <h1>TITULO CONSTANTE</h1>
   return(
      <div>
         {titulo}
         <h1>VALOR DE MULTIPLICAÇÃO {Math.random()}</h1>
      </div>
   )
}
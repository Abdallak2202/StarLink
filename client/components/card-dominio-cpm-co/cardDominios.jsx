import s from "src/styles/cardDominio.module.css"
import Link from "next/link"

export default function Card (){
  return (
    <div >
      <div className={s.container}>
      <div className= {s.product}>
      <ul>
       
          <h1> .Com</h1>
          <h2> por solo</h2>
          <h3> $1790</h3>
          <Link  href="cardDominioDetail">Buscar</Link>
        
      </ul>
      </div>
      <div className= {s.product}>
      <ul>
        
          <h1> .Com +</h1>
          <h1> .online & .store</h1>
          <h2> por solo</h2>
          <h3> $1790</h3>
          <Link href="cardDominioDetail">Buscar</Link>
        
      </ul>
      </div>
      <div className= {s.product}>
      <ul>
     
          <h1> .Com.ar</h1>
          <h2> por solo</h2>
          <h3> $860</h3>
          <Link href="cardDominioDetail">Buscar</Link>
        
      </ul>
      </div>
      <div className= {s.product}>
      <ul>
       
          <h1> .site</h1>
          <h2> por solo</h2>
          <h3> $1490</h3>
          <Link href="cardDominioDetail">Buscar</Link>
         
      </ul>
      </div>
      <div className= {s.product}>
      <ul>
     
          <h1> .Online</h1>
          <h2> por solo</h2>
          <h3> $1890</h3>
          <Link href="cardDominioDetail">Buscar</Link>
        
      </ul>
      </div>
      <div className= {s.product}>
      <ul>
 
          <h1> .Website</h1>
          <h2> por solo</h2>
          <h3> $1490</h3>
          <Link href="cardDominioDetail">Buscar</Link>
        
      </ul>
      </div>
      <div className= {s.product}>
      <ul>
     
          <h1> .Store</h1>
          <h2> por solo</h2>
          <h3> $2790</h3>
          <Link href="cardDominioDetail">Buscar</Link>
         
      </ul>
      </div>
      <div className= {s.product}>
      <ul>
     
          <h1> .Uno</h1>
          <h2> por solo</h2>
          <h3> $1090</h3>
          <Link href="cardDominioDetail">Buscar</Link>
         
      </ul>
      </div>
      <div className= {s.product}>
      <ul>
       
          <h1> .Org</h1>
          <h2> por solo</h2>
          <h3> $3890</h3>
          <Link href="cardDominioDetail">Buscar</Link>
        
      </ul>
      </div>
      <div className= {s.product}>
      <ul>
        
          <h1> .tech</h1>
          <h2> por solo</h2>
          <h3> $1490</h3>
          <Link href="cardDominioDetail">Buscar</Link>
        
      </ul>
      </div>
      <div className= {s.product}>
      <ul>
      
          <h1> .Fun</h1>
          <h2> por solo</h2>
          <h3> $1490</h3>
          <Link href="cardDominioDetail">Buscar</Link>
     
      </ul>
      </div>
     
      <div className= {s.product}>
      <ul>
      
          <h1> .Casa</h1>
          <h2> por solo</h2>
          <h3> $1490</h3>
          <Link href="cardDominioDetail">Buscar</Link>
          
      </ul>
      </div>
      </div>
    </div>
  )
}
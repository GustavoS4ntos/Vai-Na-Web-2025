import logoHeader from '../../assets/logoHeader.png'

import s from './header.module.scss'

export default function Header(){


return(
<header className={s.header}>

<img src={logoHeader} alt= 'Imagem de um Champanhe'/>
<nav>
<ul>
<li><a href=''>Paz</a></li>
<li><a href=''>Saúde</a></li>
<li><a href=''>Alegria</a></li>

</ul>


</nav>

</header>

)


}

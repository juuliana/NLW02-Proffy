import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/54780605?s=460&u=58d983e84d01a6500dcb1fab3d9287ad1c1c2268&v=4" alt="Juliana Ribeiro"/>
                <div>
                    <strong>Juliana Ribeiro</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Apaixonada por programação, quero dedicar meu tempo aos estudos e praticar ensinando a vocês!
                <br/>
                Vamos codar muito!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}
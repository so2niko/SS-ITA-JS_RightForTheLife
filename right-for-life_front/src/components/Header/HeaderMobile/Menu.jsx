import { HeaderItem } from "./HeaderItem";
import React from "react";

export const Menu = ({hidePagesList}) => (
  <ul
    className="rounded-t-xl flex flex-col justify-between items-center w-full bg-gray-100 font-bold text-xl text-gray-600 py-8 m-auto"
    style={{maxWidth: '700px'}}>
    <HeaderItem to="/" title="Главная" onClick={hidePagesList}/>

    <HeaderItem to="/help" title="Помощь" color="green" onClick={hidePagesList}/>
    <HeaderItem to="/animals" title="Питомцы" onClick={hidePagesList}/>
    <HeaderItem to="/stories" title="Счастливые истории" onClick={hidePagesList}/>

    <HeaderItem to="/emergency" title="Срочники" color="red" onClick={hidePagesList}/>
    <HeaderItem to="/news" title="Новости" onClick={hidePagesList}/>
    <HeaderItem to="/about" title="О нас" onClick={hidePagesList}/>
  </ul>
);


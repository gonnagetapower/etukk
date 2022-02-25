import React from "react";
import { CustomCheckbox, CustomButton, Menu, Footer } from "../../components";
import chair from "../../assets/lots/chair.png"
import deliveryIcon from "../../assets/icons/main_page/delivery_icon.png"
import { Categories, Filter, Search, Accordion } from "./components";

import "./MainPage.css"

const MainPage = () => {


    const lotsItems = [

        {
            id: 0, icon: chair, title: "ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ",
            text: "Продается комплект барных стульев, в употреблении четыре года",
            place: "г. Москва",
            initialRate: "100₽",
            tradingStart: "21.09.21 в 10:00"
        },
        {
            id: 1, icon: chair, title: "ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ",
            text: "Продается комплект барных стульев, в употреблении четыре года",
            place: "г. Москва",
            initialRate: "100₽",
            tradingStart: "21.09.21 в 10:00"
        },
        {
            id: 2, icon: chair, title: "ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ",
            text: "Продается комплект барных стульев, в употреблении четыре года",
            place: "г. Москва",
            initialRate: "100₽",
            tradingStart: "21.09.21 в 10:00"
        },
        {
            id: 3, icon: chair, title: "ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ",
            text: "Продается комплект барных стульев, в употреблении четыре года",
            place: "г. Москва",
            initialRate: "100₽",
            tradingStart: "21.09.21 в 10:00"
        },
        {
            id: 4, icon: chair, title: "ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ",
            text: "Продается комплект барных стульев, в употреблении четыре года",
            place: "г. Москва",
            initialRate: "100₽",
            tradingStart: "21.09.21 в 10:00"
        },
        {
            id: 5, icon: chair, title: "ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ",
            text: "Продается комплект барных стульев, в употреблении четыре года",
            place: "г. Москва",
            initialRate: "100₽",
            tradingStart: "21.09.21 в 10:00"
        },
    ]


    return (
        <>
            <div className="app-wrapper">
                <Menu />
                <Search />
                <ul class='content-filter'>
                    <li>Все торги</li>
                    <li>Горячие торги</li>
                </ul>
                <div>С доставкой в другие регионы</div>
                <div class="main-content-wrapper">
                    <div class="filtered-content">
                        {lotsItems && lotsItems.map((lotsItems, index) =>
                            <div class="content-item">
                                <img class="result-item" src={lotsItems.icon} />
                                <div class="current-item">
                                    <p>{lotsItems.title}</p>
                                    <div class="town">г. Москва <img src={deliveryIcon} class="typeDelivery" /></div>
                                    <div class="info">
                                        <div class="start">Начальная ставка</div> <p>{lotsItems.initialRate}</p>
                                    </div>
                                    <div class="info">
                                        <div class="start">Начало торгов </div> <p>{lotsItems.tradingStart}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div class="filter">
                        <Filter />
                        <Categories title="КАТЕГОРИИ">
                            <Accordion title="Авто" />
                            <Accordion title="Мебель" />
                            <Accordion title="Игрушки" />
                        </Categories>
                        <Accordion title="ДОСТАВКА" >
                            <ul>
                                <li><CustomCheckbox /> Все</li>
                                <li><CustomCheckbox /> С доставкой в другие регионы</li>
                                <li><CustomCheckbox /> Только по городу для продажи </li>
                            </ul>
                        </Accordion>
                        <Accordion title="СТАТУС ТОРГОВ">
                            <ul>
                                <li><CustomCheckbox /> Все</li>
                                <li><CustomCheckbox /> Торги Начаты </li>
                                <li><CustomCheckbox /> Торги ожидают начала </li>
                            </ul>
                        </Accordion>
                        <Accordion title="СТОИМОСТЬ ЛОТА">
                            <input></input>
                            <input></input>
                        </Accordion>
                        <Accordion title="ПРОДАВЕЦ">
                            <ul>
                                <li><CustomCheckbox /> Все</li>
                                <li><CustomCheckbox /> Частное лицо</li>
                                <li><CustomCheckbox /> Юридическое лицо </li>
                            </ul>
                        </Accordion>
                        <Accordion title="ПЕРИОД ПРОВЕДЕНИЯ">
                            <input></input>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;
import React from "react";
import { CustomCheckbox, CustomButton, Menu, Footer } from "../../components";
import chair from "../../assets/lots/chair.png"
import deliveryIcon from "../../assets/icons/main_page/delivery_icon.png"
import { Categories, Filter, Search, Accordion } from "./components";

import "./MainPage.css"

const MainPage = () => {
    return (
        <>
            <Menu />
            <Search />
            <ul class='content-filter'>
                <li>Все торги</li>
                <li>Горячие торги</li>
            </ul>
            <div>С доставкой в другие регионы</div>
            <div class="main-content-wrapper">
                <div class="filtered-content">
                    <div class="content-item">
                        <img class="result-item" src={chair} />
                        <div class="current-item">
                            <p>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</p>
                            <div class="town">г. Москва <img src={deliveryIcon} class="typeDelivery" /></div>
                            <div class="info">
                                <div class="start">Начальная ставка </div> <p>100₽</p>
                            </div>
                            <div class="info">
                                <div class="start">Начало торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-item">
                        <img class="result-item" src={chair} />
                        <div class="current-item">
                            <p>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</p>
                            <div class="town">г. Москва <img src={deliveryIcon} class="typeDelivery" /></div>
                            <div class="info">
                                <div class="start">Начальная ставка </div> <p>100₽</p>
                            </div>
                            <div class="info">
                                <div class="start">Начало торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-item">
                        <img class="result-item" src={chair} />
                        <div class="current-item">
                            <p>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</p>
                            <div class="town">г. Москва <img src={deliveryIcon} class="typeDelivery" /></div>
                            <div class="info">
                                <div class="start">Начальная ставка </div> <p>100₽</p>
                            </div>
                            <div class="info">
                                <div class="start">Начало торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-item">
                        <img class="result-item" src={chair} />
                        <div class="current-item">
                            <p>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</p>
                            <div class="town">г. Москва <img src={deliveryIcon} class="typeDelivery" /></div>
                            <div class="info">
                                <div class="start">Начальная ставка </div> <p>100₽</p>
                            </div>
                            <div class="info">
                                <div class="start">Начало торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-item">
                        <img class="result-item" src={chair} />
                        <div class="current-item">
                            <p>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</p>
                            <div class="town">г. Москва <img src={deliveryIcon} class="typeDelivery" /></div>
                            <div class="info">
                                <div class="start">Начальная ставка </div> <p>100₽</p>
                            </div>
                            <div class="info">
                                <div class="start">Начало торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-item">
                        <img class="result-item" src={chair} />
                        <div class="current-item">
                            <p>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</p>
                            <div class="town">г. Москва <img src={deliveryIcon} class="typeDelivery" /></div>
                            <div class="info">
                                <div class="start">Начальная ставка </div> <p>100₽</p>
                            </div>
                            <div class="info">
                                <div class="start">Начало торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-item">
                        <img class="result-item" src={chair} />
                        <div class="current-item">
                            <p>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</p>
                            <div class="town">г. Москва <img src={deliveryIcon} class="typeDelivery" /></div>
                            <div class="info">
                                <div class="start">Начальная ставка </div> <p>100₽</p>
                            </div>
                            <div class="info">
                                <div class="start">Начало торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-item">
                        <img class="result-item" src={chair} />
                        <div class="current-item">
                            <p>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</p>
                            <div class="town">г. Москва <img src={deliveryIcon} class="typeDelivery" /></div>
                            <div class="info">
                                <div class="start">Начальная ставка </div> <p>100₽</p>
                            </div>
                            <div class="info">
                                <div class="start">Начало торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-item">
                        <img class="result-item" src={chair} />
                        <div class="current-item">
                            <p>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</p>
                            <div class="town">г. Москва <img src={deliveryIcon} class="typeDelivery" /></div>
                            <div class="info">
                                <div class="start">Начальная ставка </div> <p>100₽</p>
                            </div>
                            <div class="info">
                                <div class="start">Начало торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                        </div>
                    </div>
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
        </>
    )
}

export default MainPage;
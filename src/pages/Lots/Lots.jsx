import React from "react";
import { CustomButton, Menu } from "../../components";
import example from "../../assets/lots/example.png";
import example2 from "./../../assets/icons/lots_page/ex2.svg";
import first from "../../assets/lots/1.png";
import second from "../../assets/lots/2.png";
import third from "../../assets/lots/3.png";
import share from "../../assets/icons/lots_page/share_icon.svg";
import report from "../../assets/icons/lots_page/report_icon.svg";
import exampleTest from "./../../assets/icons/lots_page/example_test.svg";
import deliveryIcon from "../../assets/icons/main_page/delivery_icon.png";


import "./Lots.css"

const Lots = () => {

    return (
        <>
            <div className="app-wrapper">
                <Menu />
                <div class="lotsWrapper">
                    <div class="lotsContent">
                        <img src={example} />
                        <div class="carousel">
                            <img src={first} alt="" /><img src={second} alt="" /><img src={third} alt="" /><img src={third} alt="" /><img src={third} alt="" />
                        </div>
                        <h1>Описание лота</h1>
                        <div>
                            Продается комплект барных стульев, в употреблении четыре года.
                            Без дефектов, протертостей, дырок и прочего.Материал натуральная кожа, цвет черный.
                            Деревянные ножки из сосны, покрыты лаком, усиленный металлом каркас.</div>
                        <div>
                            Продается комплект барных стульев, в употреблении четыре года.
                            Без дефектов, протертостей, дырок и прочего.Материал натуральная кожа, цвет черный.
                            Деревянные ножки из сосны, покрыты лаком, усиленный металлом каркас.</div>
                        <div>
                            Продается комплект барных стульев, в употреблении четыре года.
                            Без дефектов, протертостей, дырок и прочего.Материал натуральная кожа, цвет черный.
                            Деревянные ножки из сосны, покрыты лаком, усиленный металлом каркас.</div>
                        <h1>Характеристики</h1>
                        <div class='lotsContent__feature'>
                            <div class="start">Марка</div> <p>Русмебель</p>
                        </div>
                        <div class='lotsContent__feature'>
                            <div class="start">Год выпуска</div> <p>2017</p>
                        </div>
                        <div class='lotsContent__feature'>
                            <div class="start">Номер модели</div> <p>123456789101112</p>
                        </div>
                        <div class='lotsContent__actions'>
                            <img src={share} />
                            <img src={report} />
                        </div>
                        <h1>Продавец</h1>
                        {/* заменить картинку */}
                        <img src={exampleTest} />
                    </div>
                    <div class="lotsDeliveryInfo">
                        <div class="lotsDeliveryInfo__current-item">
                            <h1>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</h1>
                            <div class="lotsDeliveryInfo__town">г. Москва <img src={deliveryIcon} class="lotsDeliveryInfo__typeDelivery" /></div>
                            <div class="lotsDeliveryInfo__info">
                                <div class="lotsDeliveryInfo__start">Начальная ставка</div> <p>100₽</p>
                            </div>
                            <div class="lotsDeliveryInfo__info">
                                <div class="lotsDeliveryInfo__start">Начало торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                            <div class="lotsDeliveryInfo__info">
                                <div class="lotsDeliveryInfo__start">Окончание торгов </div> <p>21.09.21 в 10:00</p>
                            </div>
                            <div class="lotsDeliveryInfo__currentPrice">
                                <div>Текущаяя ставка <div>1 100₽</div> </div>
                                <div class="pampam">
                                    <CustomButton >Поднять ставку</CustomButton>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lots;
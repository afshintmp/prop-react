import React from "react";
import icon1 from "../../../image/icon-best-section-1.svg"
import icon2 from "../../../image/icon-best-section-2.svg"
import icon3 from "../../../image/icon-best-section-3.svg"
import icon4 from "../../../image/icon-best-section-4.svg"
import icon5 from "../../../image/icon-best-section-5.svg"
import icon6 from "../../../image/icon-best-section-6.svg"

export default function InfoCart() {
    return <div className="info-cart">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <div className="info-cart-cart">
                        <h3>
                        <span>
                            <img src={icon1} alt=""/>
                        </span>
                            بهترین شرایط معامله
                        </h3>
                        <p>
                            راه حل FTMO با انتخاب گسترده ای از دارایی ها، با پورسانت های بسیار کم و اسپرد فوق العاده
                            خام.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-4">

                    <div className="info-cart-cart">
                        <h3>
                            <span>
                            <img src={icon2} alt=""/>
                        </span>
                            اهرم 1:100
                        </h3>
                        <p>
                            از اهرم معامله گر حرفه ای به نفع خود استفاده کنید بدون اینکه محدودیتی برای اندازه موقعیت
                            تحمیل
                            شود.
                        </p>
                    </div>

                </div>


                <div className="col-12 col-lg-4">
                    <div className="info-cart-cart">
                        <h3>
                        <span>
                             <img src={icon3} alt=""/>

                        </span>
                            فقط یک بار هزینه
                        </h3>
                        <p>
                            دون هزینه های مکرر، بدون عضویت یا سایر هزینه های پنهان. علاوه بر این، هزینه به طور خودکار با
                            اولین تقسیم سود به شما بازپرداخت می شود.

                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="info-cart-cart">
                        <h3>
                        <span>
                            <img src={icon4} alt=""/>
                        </span>
                            محبوب ترین پلتفرم های معاملاتی
                        </h3>
                        <p>


                            MT4، MT5 یا cTrader. خودت انتخاب کن!
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="info-cart-cart">
                        <h3>
                        <span>
                            <img src={icon5} alt=""/>
                        </span>
                            بدون محدودیت در سبک معاملاتی!


                        </h3>
                        <p>


                            استراتژی معاملاتی خود را بدون محدودیت یا محدودیت معامله کنید. می توانید از EA، پوشش ریسک یا
                            تجارت اختیاری استفاده کنید.


                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="info-cart-cart">
                        <h3>
                        <span>
                            <img src={icon6} alt=""/>
                        </span>
                            هر ابزاری را که می خواهید معامله کنید


                        </h3>
                        <p>


                            فارکس، کالاها، شاخص ها، رمزنگاری، سهام، اوراق قرضه.


                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

}
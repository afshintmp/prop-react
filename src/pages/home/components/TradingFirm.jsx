import React from "react";
import frame from "../../../image/Frame-7844.png"
export default function TradingFirm(){
    return <div className="trading-firm">
        <div className="container">
            <div className="row change-direction">
                <div className="col-12 col-md-6">
                    <img src={frame} className="w-100 trading-firm-img" alt="" />
                </div>
                <div className="col-12 col-md-6 ">
                    <div className="trading-firm-info">
                        <h3>
                            تجارت برای اختصاصی
                            شرکت بازرگانی
                        </h3>
                        <p>
                            یک دوره ارزیابی منحصربفرد 2 مرحله ای برای معامله گران ایجاد کرد. این فرآیند ارزیابی شامل یک
                            چالش
                            و تأیید FTMO است و به طور خاص برای کشف استعدادهای تجاری طراحی شده است.


                        </p>
                        <p>
                            پس از اتمام موفقیت آمیز دوره ارزیابی، به شما پیشنهاد می شود که در شرکت تجارت اختصاصی FTMO
                            قرار
                            بگیرید که در آن می توانید از راه دور یک حساب FTMO با موجودی حداکثر 400000 دلار را مدیریت
                            کنید.
                            سفر شما برای رسیدن به آنجا ممکن است چالش برانگیز باشد، اما برنامه‌های آموزشی، تحلیل حساب و
                            مربی
                            عملکرد ما اینجا هستند تا به شما در تلاش برای استقلال مالی کمک کنند.


                        </p>
                    </div>
                </div>


            </div>
        </div>
    </div>

}
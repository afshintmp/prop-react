import React from "react";
import payoutImage from "../../../image/Frame-968-1.png"
export default function PayoutSystem(){
    return <div className="payout-system">
        <div className="container">
            <div className="row">

                <div className="col-6 d-none d-lg-block"><img src={payoutImage} alt="" /></div>

                <div className="col-12 col-lg-6   d-flex align-items-center">
                    <div className="ms-lg-5 ">
                        <h3>
                            سیستم پرداخت
                        </h3>
                        <p>
                            نسبت پرداخت پیش‌فرض برای تمام معامله‌گران FTMO روی 80:20 تنظیم شده است، با این حال، سهم 80
                            درصدی
                            جایی نیست که ما خط را بکشیم.

                        </p>
                        <p>
                            اگر شرایط طرح مقیاس ما را برآورده کنید، نه تنها موجودی حساب FTMO شما را 25 درصد افزایش می
                            دهیم،
                            بلکه نسبت پرداخت نیز به طور خودکار به 90:10 خیره کننده تغییر می کند!


                        </p>
                        <p>
                            همه معامله‌گران FTMO می‌توانند درخواست پرداخت در صورت تقاضا را داشته باشند. پرداخت فقط پس از
                            14
                            روز قابل پردازش است، اما شما همچنین می توانید روز تقسیم سود خود را انتخاب کنید، که حتی می
                            تواند
                            تا سه بار تغییر کند. در خاتمه، ما مطمئن می شویم که شما همیشه برداشت خود را در راحت ترین روز
                            خود
                            دریافت خواهید کرد.
                        </p>

                    </div>


                </div>
            </div>
        </div>
    </div>
}
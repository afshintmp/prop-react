import React from "react";

export default function Plans(){
    return <div className="col-10">
        <div className="main-content">
            <div className="mb-3">
                <label htmlFor="">عنوان پلن</label>

                <input type="text"/>
            </div>
            <div>

                <textarea></textarea>
            </div>
            <div className="pt-4">
                <div>
                    <label>رادیو
                        <input type="radio"/>

                    </label>
                    <label>رادیو
                        <input type="radio"/>

                    </label>
                </div>
            </div>
            <div className="mt-4">
                <button className="w-100 btn-violet btn">
                    ذخیره
                </button>


            </div>

        </div>
    </div>
}
import React, { useRef, useState } from "react";
import "./CardProduct.css";

const BOT_TOKEN = "7385822589:AAHeo3T9DrV3NvlYYkcprCOD-68-QkhjPy4"
const USER_ID = "7385822589"
const CHAT_ID = "-1002187496106"

//https://api.telegram.org/bot7385822589:AAHeo3T9DrV3NvlYYkcprCOD-68-QkhjPy4/getUpdates
//https://api.telegram.org/bot[BOT_TOKEN]/sendMessage?chat_id=[your chat_id]&parse_mode=html

function CardForm({ data }) {
  const [fullName, setfullName] = useState("");
  const tel = useRef();
  const address = useRef();
  const message = useRef();

  const handeSumbit = (e) => {
    e.preventDefault()
    let textt = "CardForm %0A%0A";
    textt += `ism : ${fullName}`
    textt += `nomer: ${tel.current.value}%0A%0A`;
    textt += `manzil: ${address.current.value}%0A%0A`;
    textt += `messege: ${message.current.value}%0A%0A`;


    data.forEach((item) => {
      textt += `Narxi : ${item.price}%0A%0A`;
      textt += `Soni : ${item.quantity}%0A%0A`;
      textt += `Maxsulot nomi: ${item.title}%0A%0A`;
    })


    let urlss =
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${textt}`
    let api = new XMLHttpRequest()
    api.open("GET", urlss, true)
    api.send(

    )
  }

  return (
    <div className="input__reg">
      <h3>Malumotlaringizni kiriting</h3>
      <form onSubmit={handeSumbit}>
        <input
          onChange={(e) => setfullName(e.target.value)}
          type="text"
          placeholder="Toliq ismingizni kiriting"
        />
        <input ref={tel} type="text" placeholder="+998 00 000 00 00 " />
        <input ref={address} type="text" placeholder="Manzilingiz" />
        <input ref={message} type="text" placeholder="Habar yollash" />

        <div className="total">
          <p>Umumiy narx</p>
          <p>
            Jami : {""}
            {data.reduce(
              (sum, item, index) => sum + item.price * item.quantity,
              0
            )}
          </p>
        </div>

        <button className="btn-reg">Rasmiylashtirishga o'tish</button>
      </form>
    </div>
  );
}

export default CardForm;




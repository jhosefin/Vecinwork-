import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarComponent, ChatComponent, FooterComponent } from "../components";

const ChatUsuariopage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/",{}, [navigate]))
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Tu mensaje fue enviado!', 'success')
  })
}

    return(
        <div>
            <NavbarComponent/>
            <ChatComponent/>
            <FooterComponent/>

        </div>
    )
}

export default ChatUsuariopage;
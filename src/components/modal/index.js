import { React,useState } from "react";

const Modal=({openModal,setOpenModal})=>{
    return(
        <dialog open={openModal} className="modal w-full items-center h-full" onClose={()=>{setOpenModal(false)}}>
        <div className="flex flex-row place-self-center bg-slate-100 h-1/2 rounded w-2/5">
        WORKING MAN
        <button className="text-gray-500 px-2 mx-2 rounded h-fit" onClick={()=>{setOpenModal(false)}}>X</button>
        </div>
      </dialog>
    )
}
export default Modal;
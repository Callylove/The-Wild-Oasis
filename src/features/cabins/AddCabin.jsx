import React, { useState } from 'react'
import CreateCabinForm from './CreateCabinForm'
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
// Compound Component in React
export default function AddCabin(){
    return <Modal>
        <Modal.Open opens='cabin-form'>
            <Button>Add new cabins</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
            <CreateCabinForm/>
        </Modal.Window>
    </Modal>
}
// export default function AddCabin() {
//     const [isOpenModal,setIsOpenModal] = useState(false)
//   return (
//     <div>
//     <Button onClick={()=>setIsOpenModal((show)=>!show)}>Add new cabin</Button>
    
//     {isOpenModal && <Modal onClose={()=>setIsOpenModal(false)}><CreateCabinForm onCloseModal={()=>setIsOpenModal(false)}/></Modal>}
//     </div>
//   )
// }

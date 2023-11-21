import { BsThreeDotsVertical } from 'react-icons/bs'
import portfolio from '../../assets/Porfolio.png'
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';

const UserList = () => {
    const db = getDatabase();
    const [userData, setUserData] = useState([])


    useEffect(() => {
        const userRef = ref(db, 'users/');
        onValue(userRef, (snapshot) => {
            console.log(snapshot.val());
            let arr = []
            snapshot.forEach((item) => {
                arr.push(item.val())
            })
            setUserData(arr)
        });
    }, [])
    console.log(userData, 'userData');
    return (

        <div className=' shadow-gray py-4 h-[490px]  px-3 w-full rounded-lg overflow-y-scroll'>
            <div className='flex justify-between items-center'>
                <h3 className="font-nunito font-semibold pl-[20px] text-[22px]">UserList</h3>
                <BsThreeDotsVertical className='  text-[20px]  text-primary ' />
            </div>
            {/* group name s  */}
            {
                userData.map((item) => (
                    <div className="flex items-center px-5 mt-5 border-b-2 border-gray-400 pb-3">
                        <div>
                            <img src={portfolio} alt="" />
                        </div>
                        <div className="ml-[14px]">
                            <h3 className="font-nunito font-bold text-[16px] w-full">{item.username}</h3>
                            <p className="font-nunito font-light ">{item.email}</p>
                        </div>
                        <div className="bg-primary font-bold text-white ml-[40px] py-[6px] px-[20px] text-xl">
                            +
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default UserList
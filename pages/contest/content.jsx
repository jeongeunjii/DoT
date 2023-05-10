import List from '@/components/List'
import Dropdown from '@/components/ModalDropdown'
import { useState } from 'react'
import Divide from '@/components/Divideline'

export default function contest_content() {
    const [interest, setInterest] = useState(false)
    const [color, setColor] = useState(<svg className="absolute right-6 w-14 h-14 ml-12 top-52" fill="none" stroke="#E1E1E4" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>)

    const colorChange = () => {
        if (interest == true) {
            setColor(<svg className="w-14 h-14 absolute right-6 top-52" fill="none" stroke="#E1E1E4" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>)
            setInterest(false)
        }
        else {
            setColor(<svg className="w-14 h-14 absolute right-6 top-52" fill="#FFA12E" stroke="#FFA12E" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>)
            setInterest(true)
        }
    }

    return(
    <>
    <ul className='mb-8'>
        <li className='flex justify-center'>
            <div className='w-32 h-32 bg-orange/20'></div>
        </li>
        <li className='flex justify-start mt-6'>
            <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[14px] font-bold rounded-xl'>학술</div>
            <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[14px] font-bold rounded-xl'>과학/공학</div>
            <span className='flex items-center text-orange font-bold text-base ml-2 '>D-7</span>
            <button onClick={colorChange}>
                {color}
            </button>
        </li>
        <li className='mt-3'>
            <div className='text-2xl text-black font-extrabold text-[23px] whitespace-normal w-[300px]'>2023 산업보안논문경진대회</div>
        </li>
        <li className='flex mt-3'>
            <span className='w-20 text-gray-dark text-[15px]'>주최기관</span>
            <span className='text-black text-[15px] w-64'>한국산업보안논문학회</span>
        </li>
        <li className='flex mt-2'>
            <span className='w-20 text-gray-dark text-[15px]'>접수기간</span>
            <span className='text-black text-[15px] w-64'>23.03.02 ~ 23.03.31</span>
        </li>
        <li className='flex mt-2'>
            <span className='w-20 text-gray-dark text-[15px]'>참여대상</span>
            <span className='text-black text-[15px] w-64'>대학생, 직장인/일반인</span>
        </li>
        <li className='flex mt-2'>
            <span className='w-20 text-gray-dark text-[15px]'>시상규모</span>
            <span className='text-black text-[15px] w-64'>총 2500만원</span>
        </li>
        <li className='flex mt-2'>
            <span className='w-20 text-gray-dark text-[15px]'>활동혜택</span>
            <span className='text-black text-[15px] w-64'>상장수여</span>
        </li>
        <li className='flex mt-2'>
            <span className='w-20 text-gray-dark text-[15px]'>원문공고</span>
            <span className='text-black font-bold underline text-[15px]'>바로가기</span>
        </li>
    </ul>
    <Divide></Divide>
    <ul className='mt-10'>
        <li>
            <span className='ml-2 text-xl text-black font-extrabold'>상세정보</span>
        </li>
        <ul className='list-disc m-4 mt-6 marker:text-orange'>
            <li>
            <div className='text-lg text-orange font-extrabold'>공모주제</div>
            <div className=''>내용</div>
            </li>
            <li>
            <div className='mt-10 text-lg text-orange font-extrabold'>시상내역</div>
            <div className=''>내용</div>
            </li>
            <li>
            <div className='mt-10 text-lg text-orange font-extrabold'>응모대상</div>
            <div className=''>내용</div>
            </li>
        </ul>
    </ul>
    </>
    )
}
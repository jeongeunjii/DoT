import List from '@/components/List_extra'
import Select from '@/components/SelectSort'
import Filter from '@/components/Filter'


export default function extra() {
    const contents = ["여행/호텔/항공", "언론/미디어", "문화/역사", "행사/페스티벌", "교육", "디자인/사진/예술/영상", "경제/금융", "경영/컨설팅/마케팅", "정치/사회/법률", "체육/헬스", "의료/보건", "뷰티/미용/화장품", "과학/공학/기술/IT", "요리/식품", "창업/자기계발", "환경/에너지", "콘텐츠", "사회공헌/교류", "유통/물류", "기타"]
    return (
        <>
            <Select contents={["최신순", "마감임박순", "인기순"]}></Select>
            <div className='flex flex-wrap mt-3'>
                {contents && contents.map(content => {
                    return <Filter content={content} />
                })}
            </div>
            <List></List>
        </>
    )
}
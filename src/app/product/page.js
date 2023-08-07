'use client';
import style1 from '@/style/style1.module.css';
import style2 from '@/style/style2.module.css';
import style3 from '@/style/style3.module.css';
import style4 from '@/style/style4.module.css';


export default function Product(){


    return <>
        <div className={`${style1.main} ${style1.bgGrey}`}>
            <h2 className={style2.heading}>Heading 1</h2>
            <h2 className={style3.heading}>Heading 2</h2>
            <h3 className={style4.heading}>Heading 3</h3>

            <h4 id={style4.myHeading}>Heading 4</h4>
        </div>
    </>
}
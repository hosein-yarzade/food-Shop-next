import next from "next"
import Link from "next/link";
const MealsPage =({})=>{
    return (<main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
            MealsPage
            </h1>
            <p><Link href="./meals/share">share Meals</Link></p>
            <p><Link href="./meals/post-1">Meals - 1</Link></p>
            <p><Link href="./meals/post-2">Meals - 2</Link></p>
            </main>
    )
}
export default MealsPage
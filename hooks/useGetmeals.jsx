import { useRecoilValue } from "recoil"
import { selectMeals } from '../store/Meals'
export default function useGetmeals() {
    const listmeals = useRecoilValue(selectMeals)
    return { listmeals }

}
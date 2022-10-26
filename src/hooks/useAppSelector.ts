import {TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";
import {RootState, AppDispatch} from "../store/reducers";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
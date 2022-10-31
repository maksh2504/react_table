import {TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";
import {RootState, AppDispatch} from "../store/slices";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
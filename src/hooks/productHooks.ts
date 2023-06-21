import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState, AppDispatch} from "../store";
import {
    fetchProducts,
    selectStatus,
    selectProducts,
} from "../services/productSlice";

export function useGetProducts(){
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector((state: RootState)=>
        selectStatus(state)
    );
    const data = useSelector((state: RootState)=> 
    selectProducts(state));
    useEffect(()=> {
        if(status===''){
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

   const isUninitialized = status === undefined;
   const isLoading = status === "pending" ||  status === undefined
   const isError = status === "rejected";
   const isSucess = status === "fulfilled";
  
    return {data, isUninitialized, isLoading, isError, isSucess}
}
  
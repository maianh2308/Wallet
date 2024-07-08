import React, { useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { addAuth, authSelector } from "../redux/reducers/authReducer";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
const AppRouters = () => {
  const { getItem } = useAsyncStorage("auth");
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  const checkLogin = async () => {
    const res = await getItem();

    res && dispatch(addAuth(JSON.parse(res)));
  };
  useEffect(() => {
    checkLogin();
  }, []);
  console.log(auth.accesstoken)
  return <>{auth.accesstoken ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default AppRouters;

import React, { useState, createContext, useReducer } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import LoginComp from "./Component/LoginComp";
import HomeComp from "./Component/HomeComp";
import RegisterComp from "./Component/RegisterComp";
import MenuComp from "./Component/MenuComp";
import Tagihan from "./Component/Hooks/Fungsional/Tagihan";
import AboutComp from "./Component/Fungsional/AboutComp";
import EditComp from "./Component/Class/EditComp";
import KelasComp from "./Component/Hooks/Class/KelasComp";
import HooksComp from "./Component/Hooks/Fungsional/HooksComp";
import HooksUseEffects from "./Component/Hooks/Fungsional/HooksUseEffects";
import ProductComp from "./Component/Hooks/Fungsional/ProductComp";

import NavBarComp from './Component/Fungsional/NavBarComp';
import MahasiswaComp from './Component/Fungsional/MahasiswaComp';
import TambahMhsComp from './Component/Fungsional/TambahMhsComp';

//Context
export const keranjangContext = createContext()
export const AuthContext = createContext()

//Inisiasi State
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }

    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }

    default:
      return state
  }
}

function App() {
  const [value, setValue] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <MenuComp />
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/homepage"
              }}
            />
          }
          <NavBarComp />
          <Route exact path="/" component={LoginComp} />
          <Route exact path="/homepage" component={HomeComp} />
          <Route exact path="/about" component={AboutComp} />
          <Route exact path="/mahasiswa" component={MahasiswaComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahMhsComp} />
          <Route exact path="/mahasiswa/edit" component={EditComp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HooksComp} />
          <Route exact path="/useeffects" component={HooksUseEffects} />
          <Route exact path="/produk" component={ProductComp} />
          <Route exact path="/tagihan" component={Tagihan} />
          <Route exact path="/register" component={RegisterComp} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>

  );
}

export default App;

import React, { useState } from 'react'
import TampilComp from './TampilComp';

const HooksComp = () => {
    const [jumlah, tambahJumlah] = useState(0)

    //login
    const [dataLogin, setDataLogin] = useState({ username: 'nikolashu', token: '12345', isLogin: false })

    //Cek Kondisi Sudah Login / Belum
    let tampil;
    if (dataLogin.isLogin) {
        tampil = <TampilComp
            username={dataLogin.username}
            fungsi={tambahJumlah.bind(this)}
            jumlah={jumlah} />
    } else {
        tampil = <TampilComp username="Maaf Anda Belum Melakukan Login" disabled={true} />
    }

    return (
        <div>
            {tampil}
        </div>
    )
}
export default HooksComp
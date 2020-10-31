import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import Inventario from './controlInventario';

export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();

    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const logout = async () => {
        await firebase.auth().signOut();
    }

    const login = async (e) => {
        e.preventDefault()
        await firebase.auth().signInWithEmailAndPassword(email, password);

    }
    return (
        <div className="container">
            {
                !user &&

                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Correo</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password" onChange={(ev) => setPassword(ev.target.value)} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-10">
                                    <button class="btn btn-primary" onClick={(e) => login(e)}>Iniciar sesión</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            }
            {

                user &&
                <>
                    <div className="row text-right">
                        <div className="col-md-12">
                            <p>Hola, {user.email}!</p>
                            <button class="btn btn-primary" onClick={logout}><img src={"../img/cerrarsesion" + ".png"} width="30" height="30" alt="...imagen..."></img> Cerrar Sesión</button>
                            <br>
                            </br>
                            <br>
                            </br>
                        </div>
                    </div>
                    <div className="row">
                        <Inventario />
                    </div>
                </>

            }
        </div >
    )
}
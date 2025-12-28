import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import Map from './Map/Map.jsx';
import PopupLogin from './Popup/PopupLogin/PopupLogin.jsx';
import PopupName from "./Popup/PopupName/PopupName.jsx";
import Contacts from './Contacts/Contacts.jsx';
import Register from './Register/Register.jsx';
import Loading from './Loading/Loading.jsx';
import InfoSection from './InfoSection/InfoSection.jsx';
import { getUserData, updateUserName } from './Api/auth';
import SecretRoute from "./SecretRoute/SecretRoute.jsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";



export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [reloadMapTrigger, setReloadMapTrigger] = useState(0);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  function handleEditName() {
    setIsEditPopupOpen(true);
  }

  async function handleSaveName(newName) {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const data = await updateUserName(token, newName);

      if (!data.user) {
        console.error("Erro: usuário não retornado pelo backend");
        return;
      }

      setCurrentUser(data.user);
      setIsEditPopupOpen(false);
    } catch (err) {

      console.error("Erro ao atualizar nome:", err.message || err);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setCurrentUser(null);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserData(token)
        .then(data => setCurrentUser(data))
        .catch(err => {
          console.error(err);
          localStorage.removeItem('token');
          setCurrentUser(null);
        });
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="page">
        {loading && <Loading />}
        <Header onHomeClick={() => setReloadMapTrigger(prev => prev + 1)}
          openLogin={() => setIsPopupOpen(true)}
          user={currentUser}
          onEditName={handleEditName}
          onLogout={handleLogout} />


        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main reloadTrigger={reloadMapTrigger} user={currentUser} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<InfoSection />} />


          <Route
            path="/secret"
            element={
              <ProtectedRoute>
                <SecretRoute />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div >
      <Footer />



      <PopupLogin
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onLoginSuccess={(userData) => setCurrentUser(userData)}
      />

      <PopupName
        isOpen={isEditPopupOpen}
        onClose={() => setIsEditPopupOpen(false)}
        onSave={handleSaveName}
        currentName={currentUser?.name || ""}
      />
    </CurrentUserContext.Provider>
  );
}

